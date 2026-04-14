package com.climbx.color {
	import flash.display.DisplayObject;
	import flash.geom.ColorTransform;
	
	import com.climbx.math.MathUtil;	

	public class ColorUtil extends Object {

		public function ColorUtil() {
		}

		public static function setColor(target:DisplayObject, color:Number = NaN):void {
			var colorTransform:ColorTransform = new ColorTransform();
			if (!isNaN(color)) {
				colorTransform.color = color;
			}
			target.transform.colorTransform = colorTransform;
		}

		public static function hex2argb(value:uint):ARGB {
			return new ARGB(value >> 24 & 255, value >> 16 & 255, value >> 8 & 255, value & 255);
		}

		public static function argb2hexString(a:Number, r:Number, g:Number, b:Number, prefix:String = ""):String {
			var hexString:String = argb2hex(a, r, g, b).toString(16);
			while (hexString.length < 6) {
				hexString = "0" + hexString;
			}
			return prefix + hexString;
		}

		public static function rgb2hexString(r:Number, g:Number, b:Number, prefix:String = ""):String {
			var hexString:String = rgb2hex(r, g, b).toString(16);
			while (hexString.length < 6) {
				hexString = "0" + hexString;
			}
			return prefix + hexString;
		}

		public static function hex2String(hex:uint, prefix:String = "#"):String {
			return prefix + hex.toString(16);
		}

		public static function interpolateColorTransform(progress:Number, fromColor:ColorTransform, toColor:ColorTransform, param4:Boolean = true):ColorTransform {
			var colorTransform:ColorTransform = new ColorTransform();
			colorTransform.redMultiplier = MathUtil.lerp(progress, fromColor.redMultiplier, toColor.redMultiplier);
			colorTransform.greenMultiplier = MathUtil.lerp(progress, fromColor.greenMultiplier, toColor.greenMultiplier);
			colorTransform.blueMultiplier = MathUtil.lerp(progress, fromColor.blueMultiplier, toColor.blueMultiplier);
			colorTransform.redOffset = MathUtil.lerp(progress, fromColor.redOffset, toColor.redOffset);
			colorTransform.greenOffset = MathUtil.lerp(progress, fromColor.greenOffset, toColor.greenOffset);
			colorTransform.blueOffset = MathUtil.lerp(progress, fromColor.blueOffset, toColor.blueOffset);
			if (param4) {
				colorTransform.alphaMultiplier = MathUtil.lerp(progress, fromColor.alphaMultiplier, toColor.alphaMultiplier);
				colorTransform.alphaOffset = MathUtil.lerp(progress, fromColor.alphaOffset, toColor.alphaOffset);
			}
            else {
				colorTransform.alphaMultiplier = fromColor.alphaMultiplier;
				colorTransform.alphaOffset = fromColor.alphaOffset;
			}
			return colorTransform;
		}

		public static function rgb2hsv(r:Number, g:Number, b:Number):HSV {
			var value:Number;
			r = r / 255;
			g = g / 255;
			b = b / 255;
			var _loc_4:* = Math.min(Math.min(r, g), b);
			value = Math.max(Math.max(r, g), b);
			if (_loc_4 == value) {
				return new HSV(0, 0, value * 100);
			}
			var _loc_5:* = r == _loc_4 ? (g - b) : (g == _loc_4 ? (b - r) : (r - g));
			var _loc_6:* = r == _loc_4 ? (3) : (g == _loc_4 ? (5) : (1));
			var hue:Number = Math.floor((_loc_6 - _loc_5 / (value - _loc_4)) * 60) % 360;
			var saturation:Number = Math.floor((value - _loc_4) / value * 100);
			saturation = Math.floor(value * 100);
			return new HSV(hue, saturation, value);
		}

		public static function changeContrast(param1:Number, param2:Number):uint {
			var rgb:RGB = ColorUtil.hex2rgb(param1);
			rgb.r = MathUtil.clamp(rgb.r + param2, 0, 255);
			rgb.g = MathUtil.clamp(rgb.g + param2, 0, 255);
			rgb.b = MathUtil.clamp(rgb.b + param2, 0, 255);
			return ColorUtil.rgb2hex(rgb.r, rgb.g, rgb.b);
		}

		public static function rgbObj2hex(rgb:RGB):uint {
			return rgb.r << 16 | rgb.g << 8 | rgb.b;
		}

		public static function hex2hsv(value:uint):HSV {
			var rgb:RGB = hex2rgb(value);
			return rgb2hsv(rgb.r, rgb.g, rgb.b);
		}

		public static function argb2hex(a:Number, r:Number, g:Number, b:Number):uint {
			return a << 24 | r << 16 | g << 8 | b;
		}

		public static function hex2rgb(value:uint):RGB {
			return new RGB(value >> 16 & 255, value >> 8 & 255, value & 255);
		}

		public static function randomHex():uint {
			var red:Number = MathUtil.random(0, 255);
			var green:Number = MathUtil.random(0, 255);
			var blue:Number = MathUtil.random(0, 255);
			return rgb2hex(red, green, blue);
		}

		public static function interpolateHex(value:Number, argbMin:uint, argbMax:uint):uint {
			var min:ARGB = hex2argb(argbMin);
			var max:ARGB = hex2argb(argbMax);
			var a:Number = MathUtil.lerp(value, min.a, max.a);
			var r:Number = MathUtil.lerp(value, min.r, max.r);
			var g:Number = MathUtil.lerp(value, min.g, max.g);
			var b:Number = MathUtil.lerp(value, min.b, max.b);
			return argb2hex(a, r, g, b);
		}

		public static function hsv2hex(h:Number, s:Number, v:Number):uint {
			return hsv2rgb(h, s, v).toHex();
		}

		public static function rgb2hex(r:Number, g:Number, b:Number):uint {
			return r << 16 | g << 8 | b;
		}

		public static function hsv2rgb(h:Number, s:Number, v:Number):RGB {
			var red:Number;
			var green:Number;
			var blue:Number;
			h = h % 360;
			if (v == 0) {
				return new RGB(0, 0, 0);
			}
			s = s / 100;
			v = v / 100;
			h = h / 60;
			var i:int = Math.floor(h);
			var f:Number = h - i;
			var p:Number = v * (1 - s);
			var q:Number = v * (1 - s * f);
			var t:Number = v * (1 - s * (1 - f));
			if (i == 0) {
				red = v;
				green = t;
				blue = p;
			}
            else if (i == 1) {
				red = q;
				green = v;
				blue = p;
			}
            else if (i == 2) {
				red = p;
				green = v;
				blue = t;
			}
            else if (i == 3) {
				red = p;
				green = q;
				blue = v;
			}
            else if (i == 4) {
				red = t;
				green = p;
				blue = v;
			}
            else if (i == 5) {
				red = v;
				green = p;
				blue = q;
			}
			red = Math.floor(red * 255);
			green = Math.floor(green * 255);
			blue = Math.floor(blue * 255);
			return new RGB(red, green, blue);
		}
	}
}
