package com.climbx.color {
	import flash.geom.ColorTransform;

	import com.climbx.math.MathUtil;		

	public class ColorTransform2 extends ColorTransform {
		private var _tintColor:uint = 0;
		private var _tintMultiplier:Number = 0;

		public function ColorTransform2(redMultiplier:Number = 1, greenMultiplier:Number = 1, blueMultiplier:Number = 1, alphaMultiplier:Number = 1, redOffset:Number = 0, greenOffset:Number = 0, blueOffset:Number = 0, alphaOffset:Number = 0) {
			super(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset);
		}

		public function set brightness(value:Number):void {
			value = MathUtil.clamp(value, -1, 1);
			var multiplier:Number = 1 - Math.abs(value);
			redMultiplier = multiplier;
			greenMultiplier = multiplier;
			blueMultiplier = multiplier;
			var offset:Number = value > 0 ? (value * 255) : (0);
			redOffset = offset;
			greenOffset = offset;
			blueOffset = offset;
		}

		public function get tintColor():uint {
			return _tintColor;
		}

		public function getHexFromTint():uint {
			var _loc_1:* = 1 / tintMultiplier;
			var _loc_2:* = Math.round(redOffset * _loc_1);
			var _loc_3:* = Math.round(greenOffset * _loc_1);
			var _loc_4:* = Math.round(blueOffset * _loc_1);
			return ColorUtil.rgb2hex(_loc_2, _loc_3, _loc_4);
		}

		public function set tintColor(value:uint):void {
			setTint(value, tintMultiplier);
		}

		public function get brightness():Number {
			return redOffset ? (1 - redMultiplier) : (redMultiplier--);
		}

		public function set tintMultiplier(value:Number):void {
			setTint(tintColor, value);
		}

		public function get tintMultiplier():Number {
			return _tintMultiplier;
		}

		public function setTint(tintColor:uint, tintMultiplier:Number):void {
			_tintColor = tintColor;
			_tintMultiplier = tintMultiplier;
			var multiplier:* = 1 - tintMultiplier;
			redMultiplier = multiplier;
			greenMultiplier = multiplier;
			blueMultiplier = multiplier;
			var rgb:RGB = ColorUtil.hex2rgb(tintColor);
			redOffset = Math.round(rgb.r * tintMultiplier);
			greenOffset = Math.round(rgb.g * tintMultiplier);
			blueOffset = Math.round(rgb.b * tintMultiplier);
		}
	}
}
