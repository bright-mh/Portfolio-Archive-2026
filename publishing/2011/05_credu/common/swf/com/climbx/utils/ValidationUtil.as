package com.climbx.utils {

	/**
	 * @author Administrator
	 */
	public class ValidationUtil {
		public static function isValidEmail(value:String):Boolean {
			return RegExp(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/).exec(value);
		}

		public static function isValidSSN(value:String):Boolean {
			return RegExp(/^[\d]{3}(-?)[\d]{2}\1[\d]{4}$/).exec(value);
		}

		public static function isValidUSZipCode(value:String):Boolean {
			return RegExp(/^[0-9]{5}([- \/]?[0-9]{4})?$/).exec(value);
		}

		public static function isValidUSPhoneNumber(value:String):Boolean {
			return RegExp(/^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/).exec(value);
		}
	}
}
