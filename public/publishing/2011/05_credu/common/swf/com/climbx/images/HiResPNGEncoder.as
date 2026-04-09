package com.climbx.images {
	import flash.utils.setTimeout;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.display.BitmapData;
	import flash.utils.ByteArray;

	/**
	 * @author mediatribe
	 */
	 
	/**
	 * Class that converts BitmapData into a valid PNG
	 */	
	public class HiResPNGEncoder extends EventDispatcher {

		private static const PIXEL_PER_ITERATION:uint = 2880 * 100;
		private static const INCH_IN_METER_UNIT : Number = 0.0254;
		private static var crcTable : Array;
		
		/**
		 * Created a PNG image from the specified BitmapData
		 *
		 * @param image The BitmapData that will be converted into the PNG format.
		 * @param dpi Dots per inch.
		 * @return a ByteArray representing the PNG encoded image data.
		 * @langversion ActionScript 3.0
		 * @playerversion Flash 9.0
		 * @tiptext
		 */
		public function encode(img : BitmapData, dpi : uint = 72) : ByteArray {
			// Create output byte array
			var png : ByteArray = new ByteArray();
			// Write PNG signature
			writeSignature(png);
			// Build IHDR chunk
			writeHeader(png, img);
			// Build PHYS chunk
			writeResolution(png, dpi);
			
			// Build IDAT chunk
			var IDAT : ByteArray = new ByteArray();
			img.lock();
			for(var i : int = 0;i < img.height;i++) {
				// no filter
				IDAT.writeByte(0);
				var p : uint;
				var j : int;
				if ( !img.transparent ) {
					for(j = 0;j < img.width;j++) {
						p = img.getPixel(j, i);
						IDAT.writeUnsignedInt(uint(((p & 0xFFFFFF) << 8) | 0xFF));
					}
				} else {
					for(j = 0;j < img.width;j++) {
						p = img.getPixel32(j, i);
						IDAT.writeUnsignedInt(uint(((p & 0xFFFFFF) << 8) | (p >>> 24)));
					}
				}
			}
			img.unlock();
			IDAT.compress();
			writeChunk(png, 0x49444154, IDAT);
			
			// Build IEND chunk
			writeEnd(png);
			// return PNG
			return png;
		}

		/**
		 * Created a PNG image from the specified BitmapData
		 *
		 * @param image The BitmapData that will be converted into the PNG format.
		 * @param dpi Dots per inch.
		 * @langversion ActionScript 3.0
		 * @playerversion Flash 9.0
		 * @tiptext
		 */
		public function encodeAsync(img : BitmapData, dpi : uint = 72) : void {
			// Create output byte array
			var png : ByteArray = new ByteArray();
			// Write PNG signature
			writeSignature(png);
			// Build IHDR chunk
			writeHeader(png, img);
			// Build PHYS chunk
			writeResolution(png, dpi);
			// Build IDAT chunk
			asyncLoop(png, img);
		}
		
		private function asyncLoop(png:ByteArray, img:BitmapData, IDAT:ByteArray = null, xpos:int = 0, ypos:int = 0):void {
			if(IDAT == null) {
				img.lock();
				IDAT = new ByteArray();
				// no filter
				IDAT.writeByte(0);
			}
			for(var i:int = 0;i < PIXEL_PER_ITERATION; i++) {
				var p : uint;
				if ( !img.transparent ) {
					p = img.getPixel(xpos, ypos);
					IDAT.writeUnsignedInt(uint(((p & 0xFFFFFF) << 8) | 0xFF));
				} else {
					p = img.getPixel32(xpos, ypos);
					IDAT.writeUnsignedInt(uint(((p & 0xFFFFFF) << 8) | (p >>> 24)));
				}
				if(++xpos >= img.width) {
					xpos = 0;
					// no filter
					IDAT.writeByte(0);
					trace(ypos, img.height, ypos / img.height);
					if(++ypos >= img.height) {
						img.unlock();
						IDAT.compress();
						writeChunk(png, 0x49444154, IDAT);
						
						// Build IEND chunk
						writeEnd(png);
						encoded = png;
						dispatchEvent(new Event(Event.COMPLETE));
						return;
					}
				}
			}
			setTimeout(asyncLoop, 10, png, img, IDAT, xpos, ypos);
		}
		
		public var encoded:ByteArray;
		
		private function writeSignature(png:ByteArray):void {
			png.writeUnsignedInt(0x89504e47);
			png.writeUnsignedInt(0x0D0A1A0A);
		}
		
		private function writeHeader(png:ByteArray, img:BitmapData):void {
			var IHDR : ByteArray = new ByteArray();
			IHDR.writeInt(img.width);
			IHDR.writeInt(img.height);
			IHDR.writeUnsignedInt(0x08060000); // 32bit RGBA
			IHDR.writeByte(0);
			writeChunk(png, 0x49484452, IHDR);
		}
		
		private function writeResolution(png:ByteArray, dpi:uint):void {
			var PHYS : ByteArray = new ByteArray();
			PHYS.writeUnsignedInt(Math.round(dpi / INCH_IN_METER_UNIT));
			PHYS.writeUnsignedInt(Math.round(dpi / INCH_IN_METER_UNIT));
			PHYS.writeByte(1);
			writeChunk(png, 0x70485973, PHYS);
		}
		
		private function writeEnd(png:ByteArray):void {
			writeChunk(png, 0x49454E44, null);
		}

		private function writeChunk(png : ByteArray, type : uint, data : ByteArray) : void {
			if (crcTable == null) {
				crcTable = [];
				var c : uint;
				for (var n : uint = 0;n < 256; n++) {
					c = n;
					for (var k : uint = 0;k < 8; k++) {
						if (c & 1) {
							c = uint(uint(0xedb88320) ^ uint(c >>> 1));
						} else {
							c = uint(c >>> 1);
						}
					}
					crcTable[n] = c;
				}
			}
			var len : uint = 0;
			if (data != null) {
				len = data.length;
			}
			png.writeUnsignedInt(len);
			var p : uint = png.position;
			png.writeUnsignedInt(type);
			if ( data != null ) {
				png.writeBytes(data);
			}
			var e : uint = png.position;
			png.position = p;
			c = 0xffffffff;
			for (var i : int = 0;i < (e - p); i++) {
				c = uint(crcTable[
		                (c ^ png.readUnsignedByte()) & uint(0xff)] ^ uint(c >>> 8));
			}
			c = uint(c ^ uint(0xffffffff));
			png.position = e;
			png.writeUnsignedInt(c);
		}
	}
}
