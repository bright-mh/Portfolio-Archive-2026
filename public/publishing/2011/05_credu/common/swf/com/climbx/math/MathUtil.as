package com.climbx.math {

	public class MathUtil extends Object {

		public function MathUtil() {
		}

		public static function random(param1:Number, param2:Number = 0, param3:Number = 1):Number {
			var _loc_5:Number;
			if (param1 > param2) {
				_loc_5 = param1;
				param1 = param2;
				param2 = _loc_5;
			}
			var _loc_4:* = MathUtil.lerp(Math.random(), param1, param2);
			return Math.round(_loc_4 / param3) * param3;
		}

		public static function isEven(value:Number):Boolean {
			return value % 2 == 0;
		}

		public static function ceil(n:Number, r:Number = 1):Number {
			return Math.ceil(n / r) * r;
		}

		//		public static function fuzzyEquals(param1:Number, param2:Number, param3:int = 5):Boolean {
		//			var _loc_4:* = param1 - param2;
		//			var _loc_5:* = Math.pow(10, -param3);
		//			if (_loc_4 < _loc_5)
		//            {
		//            }
		//			return _loc_4 > -_loc_5;
		//		}

		//		public static function map(param1:Number, param2:Number, param3:Number, param4:Number, param5:Number, param6:Boolean = false):Number {
		//			var _loc_7:* = lerp(norm(param1, param2, param3), param4, param5);
		//			return param6 ? (clamp(_loc_7, param4, param5)) : (_loc_7);
		//		}

		public static function isOdd(value:Number):Boolean {
			return value % 2 != 0;
		}

		public static function round(n:Number, r:Number = 1):Number {
			return Math.round(n / r) * r;
		}

		//		public static function normalDistribution(param1:Number, param2:Number, param3:Number):Number {
		//			var _loc_4:Number;
		//			var _loc_5:Number;
		//			while (_loc_5++ < param1) {
		//				
		//				_loc_4 = _loc_4 + Math.random() * (param3 - param2) / param1;
		//			}
		//			
		//			return _loc_4 + param2;
		//		}

		public static function floor(n:Number, r:Number = 1):Number {
			return Math.floor(n / r) * r;
		}

		//		public static function randomSets(param1:Number, param2:Number, param3:Number, param4:Boolean):Array {
		//			var _loc_6:Array;
		//			var _loc_7:Number;
		//			var _loc_8:Number;
		//			var _loc_5:* = new Array();
		//			if (param4 && param3 <= param2 - param1 + 1) {
		//				_loc_6 = new Array();
		//				_loc_7 = param1;
		//				while (_loc_7++ <= param2) {
		//					
		//					_loc_6.push(_loc_7);
		//				}
		//				
		//				_loc_7 = 1;
		//				while (_loc_7++ <= param3) {
		//					
		//					_loc_8 = Math.floor(Math.random() * _loc_6.length);
		//					_loc_5.push(_loc_6[_loc_8]);
		//					_loc_6.splice(_loc_8, 1);
		//				}
		//			}
		//            else {
		//				_loc_7 = 1;
		//				while (_loc_7++ <= param3) {
		//					
		//					_loc_5.push(MathUtil.random(param1, param2));
		//				}
		//			}
		//			
		//			return _loc_5;
		//		}

		//		public static function square(value:Number):Number {
		//			return value * value;
		//		}

		//		public static function toggle(param1, param2, param3) {
		//			return param1 == param2 ? (param3) : (param2);
		//		}

		public static function lerp(value:Number, min:Number, max:Number, isClamp:Boolean = false):Number {
			var result:Number = (max - min) * value + min;
			return isClamp ? (clamp(result, min, max)) : (result);
		}

		public static function clamp(value:Number, min:Number, max:Number):Number {
			if (isNaN(min)) min = value;
			if (isNaN(max)) max = value;
			return Math.max(Math.min(value, max), min);
		}

		public static function norm(param1:Number, min:Number, max:Number, isClamp:Boolean = false):Number {
			var result:Number = (param1 - min) / (max - min);
			return isClamp ? (clamp(result, min, max)) : (result);
		}

		public static function sign(value:Number):int {
			return value < 0 ? (-1) : (1);
		}
	}
}
