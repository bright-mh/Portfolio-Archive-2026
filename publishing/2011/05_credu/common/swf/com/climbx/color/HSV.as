package com.climbx.color {
	
	public class HSV extends Object {
		public var s:Number;
		public var v:Number;
		public var h:Number;

		public function HSV(hue:Number, saturation:Number, value:Number) {
			h = hue;
			s = saturation;
			v = value;
		}

		public function clone():HSV {
			return new HSV(h, s, v);
		}

		public function toHex():uint {
			return ColorUtil.hsv2hex(h, s, v);
		}
	}
}
