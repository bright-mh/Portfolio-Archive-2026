package com.climbx.color {   

	public class ARGB extends Object {
		public var a:Number;
		public var g:Number;
		public var r:Number;
		public var b:Number;

		public function ARGB(alpha:Number, red:Number, green:Number, blue:Number) {
			a = alpha;
			r = red;
			g = green;
			b = blue;
		}

		public function toHex():uint {
			return ColorUtil.argb2hex(a, r, g, b);
		}
	}
}
