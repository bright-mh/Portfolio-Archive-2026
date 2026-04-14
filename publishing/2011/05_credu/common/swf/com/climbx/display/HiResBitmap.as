package com.climbx.display {
	import flash.display.Graphics;
	import flash.display.Shape;
	import flash.display.BitmapData;

	/**
	 * @author mediatribe
	 */
	public class HiResBitmap extends Shape {
		private var _bitmapData : HiResBitmapData;
		private var _smoothing : Boolean;

		public function HiResBitmap(bitmapData : HiResBitmapData = null, smoothing : Boolean = false) {
			super();
			_bitmapData = bitmapData;
			_smoothing = smoothing;
			this.bitmapData = bitmapData;
		}

		private function drawBitmap() : void {
			if(_bitmapData == null) return;
			var bitmapDataSet : Array = _bitmapData.bitmapDataSet;
			var bitmapData : BitmapData;
			var horizontalTilesLength : int;
			var verticalTilesLength : int = bitmapDataSet.length;
			var maxResolution : int = _bitmapData.maxResolution;
			var g:Graphics = super.graphics;
			for(var row : int = 0;row < verticalTilesLength;row++) {
				horizontalTilesLength = bitmapDataSet[row].length;
				for(var col : int = 0;col < horizontalTilesLength;col++) {
					bitmapData = bitmapDataSet[row][col];
					g.beginBitmapFill(bitmapData, null, false, _smoothing);
					g.drawRect(col * maxResolution, row * maxResolution, bitmapData.width, bitmapData.height);
					g.endFill();
				}
			}
		}

		public function get bitmapData() : HiResBitmapData {
			return _bitmapData;
		}

		public function set bitmapData(value : HiResBitmapData) : void {
			_bitmapData = value;
			super.graphics.clear();
			drawBitmap();
		}

		public function get smoothing() : Boolean {
			return _smoothing;
		}

		public function set smoothing(value : Boolean) : void {
			_smoothing = value;
			drawBitmap();
		}
		
		override public function get graphics() : Graphics {
			throw new Error("The HiResBitmap class does not implement this method.");
			return null;
		}
	}
}
