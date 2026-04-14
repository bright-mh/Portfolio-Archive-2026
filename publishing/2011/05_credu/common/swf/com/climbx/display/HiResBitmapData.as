package com.climbx.display {
	import flash.display.BitmapData;
	import flash.display.IBitmapDrawable;
	import flash.filters.BitmapFilter;
	import flash.geom.ColorTransform;
	import flash.geom.Matrix;
	import flash.geom.Point;
	import flash.geom.Rectangle;
	import flash.utils.ByteArray;

	/**
	 * @author mediatribe
	 */
	public class HiResBitmapData extends BitmapData {
		private var _width : int;
		private var _height : int;
		private var _transparent : Boolean;
		private var _maxResolution : int;
		private var _bitmapDataSet : Array;

		public function HiResBitmapData(width : int, height : int, maxResolution : int = 2880, transparent : Boolean = true, fillColor : uint = 0xFFFFFFFF) {
			_width = width;
			_height = height;
			_maxResolution = maxResolution;
			_transparent = transparent;
			
			_bitmapDataSet = [];
			var horizontalTilesLength : int = Math.ceil(_width / _maxResolution);
			var verticalTilesLength : int = Math.ceil(_height / _maxResolution);
			var widthCounter : int = 0;
			var heightCounter : int = 0;
			var tileWidth : int;
			var tileHeight : int;
			var bitmapData : BitmapData;

			for (var row : int = 0;row < verticalTilesLength; row++) {
				_bitmapDataSet.push([]);
				tileHeight = _height - heightCounter;
				if(tileHeight > _maxResolution)
					tileHeight = _maxResolution;
				heightCounter += tileHeight;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					tileWidth = _width - widthCounter;
					if(tileWidth > _maxResolution)
						tileWidth = _maxResolution;
					widthCounter += tileWidth;
					if(col == 0 && row == 0)
						super(tileWidth, tileHeight, _transparent, fillColor);
					bitmapData = new BitmapData(tileWidth, tileHeight, _transparent, fillColor);
					_bitmapDataSet[row].push(bitmapData);
				}
				widthCounter = 0;
			}
		}

		public function get maxResolution() : int {
			return _maxResolution;
		}

		internal function get bitmapDataSet() : Array {
			return _bitmapDataSet;
		}

		override public function applyFilter(sourceBitmapData : BitmapData, sourceRect : Rectangle, destPoint : Point, filter : BitmapFilter) : void {
			throw new Error("The HiResBitmapData class does not implement this method.");
		}

		override public function clone() : BitmapData {
			throw new Error("The HiResBitmapData class does not implement this method.");
			return null;
		}

		override public function colorTransform(rect : Rectangle, colorTransform : ColorTransform) : void {
			throw new Error("The HiResBitmapData class does not implement this method.");
		}

		override public function compare(otherBitmapData : BitmapData) : Object {
			throw new Error("The HiResBitmapData class does not implement this method.");
			return null;
		}

		override public function copyChannel(sourceBitmapData : BitmapData, sourceRect : Rectangle, destPoint : Point, sourceChannel : uint, destChannel : uint) : void {
			throw new Error("The HiResBitmapData class does not implement this method.");
		}

		override public function copyPixels(sourceBitmapData : BitmapData, sourceRect : Rectangle, destPoint : Point, alphaBitmapData : BitmapData = null, alphaPoint : Point = null, mergeAlpha : Boolean = false) : void {
			throw new Error("The HiResBitmapData class does not implement this method.");
		}

		override public function dispose() : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					_bitmapDataSet[row][col].dispose();
				}
			}
			super.dispose();
		}

		override public function draw(source : IBitmapDrawable, matrix : Matrix = null, colorTransform : ColorTransform = null, blendMode : String = null, clipRect : Rectangle = null, smoothing : Boolean = false) : void {
			if(matrix == null) matrix = new Matrix();
			var bmd : BitmapData;
			var tempMmatrix : Matrix;
			var tempRect : Rectangle;
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			var offsetX : int;
			var offsetY : int;
			for(var row : int = 0;row < verticalTilesLength; col++) {
				horizontalTilesLength = _bitmapDataSet[col].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					bmd = _bitmapDataSet[row][col] as BitmapData;
					offsetX = col * _maxResolution;
					offsetY = row * _maxResolution;
					tempMmatrix = matrix.clone();
					tempMmatrix.translate(-offsetX, -offsetY);
					if(clipRect != null) {
						tempRect = clipRect.clone();
						tempRect.x -= offsetX;
						tempRect.y -= offsetY;
					} else {
						tempRect = null;
					}
					bmd.draw(source, tempMmatrix, colorTransform, blendMode, tempRect, smoothing);
				}
			}
		}

		override public function fillRect(rect : Rectangle, color : uint) : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					var temp : Rectangle = rect.clone();
					temp.x -= col * _maxResolution;
					temp.y -= row * _maxResolution;
					_bitmapDataSet[row][col].fillRect(temp, color);
				}
			}
		}

		override public function floodFill(x : int, y : int, color : uint) : void {
			throw new Error("The HiResBitmapData class does not implement this method.");
		}

		override public function generateFilterRect(sourceRect : Rectangle, filter : BitmapFilter) : Rectangle {
			throw new Error("The HiResBitmapData class does not implement this method.");
			return null;
		}

		override public function getColorBoundsRect(mask : uint, color : uint, findColor : Boolean = true) : Rectangle {
			throw new Error("The HiResBitmapData class does not implement this method.");
			return null;
		}

		override public function getPixel(x : int, y : int) : uint {
			var indexX : int = x / _maxResolution;
			var indexY : int = y / _maxResolution;
			return _bitmapDataSet[indexY][indexX].getPixel(x - indexX * _maxResolution, y - indexY * _maxResolution);
		}

		override public function getPixel32(x : int, y : int) : uint {
			var indexX : int = x / _maxResolution;
			var indexY : int = y / _maxResolution;
			return _bitmapDataSet[indexY][indexX].getPixel32(x - indexX * _maxResolution, y - indexY * _maxResolution);
		}

		override public function getPixels(rect : Rectangle) : ByteArray {
			throw new Error("The HiResBitmapData class does not implement this method.");
			return null;
		}

		override public function get height() : int {
			return _height;
		}

		override public function hitTest(firstPoint : Point, firstAlphaThreshold : uint, secondObject : Object, secondBitmapDataPoint : Point = null, secondAlphaThreshold : uint = 1) : Boolean {
			throw new Error("The HiResBitmapData class does not implement this method.");
			return false;
		}

		override public function lock() : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					_bitmapDataSet[row][col].lock();
				}
			}
		}

		override public function merge(sourceBitmapData : BitmapData, sourceRect : Rectangle, destPoint : Point, redMultiplier : uint, greenMultiplier : uint, blueMultiplier : uint, alphaMultiplier : uint) : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					var tempRect : Rectangle = sourceRect.clone();
					tempRect.x -= col * _maxResolution;
					tempRect.y -= row * _maxResolution;
					var tempPoint : Point = destPoint.clone();
					tempPoint.x -= col * _maxResolution;
					tempPoint.y -= row * _maxResolution;
					_bitmapDataSet[row][col].merge(sourceBitmapData, tempRect, tempPoint, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier);
				}
			}
		}

		override public function noise(randomSeed : int, low : uint = 0, high : uint = 255, channelOptions : uint = 7, grayScale : Boolean = false) : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					_bitmapDataSet[row][col].noise(randomSeed, low, high, channelOptions, grayScale);
				}
			}
		}

		override public function paletteMap(sourceBitmapData : BitmapData, sourceRect : Rectangle, destPoint : Point, redArray : Array = null, greenArray : Array = null, blueArray : Array = null, alphaArray : Array = null) : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					var tempRect : Rectangle = sourceRect.clone();
					tempRect.x -= col * _maxResolution;
					tempRect.y -= row * _maxResolution;
					var tempPoint : Point = destPoint.clone();
					tempPoint.x -= col * _maxResolution;
					tempPoint.y -= row * _maxResolution;
					_bitmapDataSet[row][col].paletteMap(sourceBitmapData, tempRect, tempPoint, redArray, greenArray, blueArray, alphaArray);
				}
			}
		}

		override public function perlinNoise(baseX : Number, baseY : Number, numOctaves : uint, randomSeed : int, stitch : Boolean, fractalNoise : Boolean, channelOptions : uint = 7, grayScale : Boolean = false, offsets : Array = null) : void {
			throw new Error("The HiResBitmapData class does not implement this method.");
			
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			
			var tempArray : Array;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					tempArray = [];
					for(var i : int = 0;i < numOctaves; i++) {
						tempArray[i] = new Point();
						trace(tempArray[i]);
					}
					_bitmapDataSet[row][col].perlinNoise(baseX, baseY, numOctaves, randomSeed, false, fractalNoise, channelOptions, grayScale, tempArray);
				}
			}
		}

		override public function pixelDissolve(sourceBitmapData : BitmapData, sourceRect : Rectangle, destPoint : Point, randomSeed : int = 0, numPixels : int = 0, fillColor : uint = 0) : int {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			var seedValue:int;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					var tempRect : Rectangle = sourceRect.clone();
					tempRect.x -= col * _maxResolution;
					tempRect.y -= row * _maxResolution;
					var tempPoint : Point = destPoint.clone();
					tempPoint.x -= col * _maxResolution;
					tempPoint.y -= row * _maxResolution;
					seedValue = _bitmapDataSet[row][col].pixelDissolve(sourceBitmapData, tempRect, tempPoint, randomSeed, numPixels, fillColor);
				}
			}
			return seedValue;
		}

		override public function get rect() : Rectangle {
			throw new Error("The HiResBitmapData class does not implement this method.");
			return null;
		}

		override public function scroll(x : int, y : int) : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					_bitmapDataSet[row][col].scroll(x, y);
				}
			}
		}

		override public function setPixel(x : int, y : int, color : uint) : void {
			var indexX : int = x / _maxResolution;
			var indexY : int = y / _maxResolution;
			_bitmapDataSet[indexY][indexX].setPixel(x - indexX * _maxResolution, y - indexY * _maxResolution, color);
		}

		override public function setPixel32(x : int, y : int, color : uint) : void {
			var indexX : int = x / _maxResolution;
			var indexY : int = y / _maxResolution;
			_bitmapDataSet[indexY][indexX].setPixel32(x - indexX * _maxResolution, y - indexY * _maxResolution, color);
		}

		override public function setPixels(rect : Rectangle, inputByteArray : ByteArray) : void {
			throw new Error("The HiResBitmapData class does not implement this method.");
		}

		override public function threshold(sourceBitmapData : BitmapData, sourceRect : Rectangle, destPoint : Point, operation : String, threshold : uint, color : uint = 0, mask : uint = 4.294967295E9, copySource : Boolean = false) : uint {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			var pixels:uint = 0;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					var tempRect : Rectangle = sourceRect.clone();
					tempRect.x -= col * _maxResolution;
					tempRect.y -= row * _maxResolution;
					var tempPoint : Point = destPoint.clone();
					tempPoint.x -= col * _maxResolution;
					tempPoint.y -= row * _maxResolution;
					pixels += _bitmapDataSet[row][col].threshold(sourceBitmapData, tempRect, tempPoint, operation, threshold, color, mask, copySource);
				}
			}
			return pixels;
		}

		override public function get transparent() : Boolean {
			return _transparent;
		}

		override public function unlock(changeRect : Rectangle = null) : void {
			var horizontalTilesLength : int;
			var verticalTilesLength : int = _bitmapDataSet.length;
			for(var row : int = 0;row < verticalTilesLength; row++) {
				horizontalTilesLength = _bitmapDataSet[row].length;
				for (var col : int = 0;col < horizontalTilesLength; col++) {
					_bitmapDataSet[row][col].unlock(changeRect);
				}
			}
		}

		override public function get width() : int {
			return _width;
		}
	}
}
