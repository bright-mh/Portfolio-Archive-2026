package com.climbx.color {  

	public class RGB extends Object {
		public var b:Number;
		public var g:Number;
		public var r:Number;

		public function RGB(red:Number, green:Number, blue:Number) {
			r = red;
			g = green;
			b = blue;
		}

		public function toHex():uint {
			return ColorUtil.rgb2hex(r, g, b);
		}
	}
}
