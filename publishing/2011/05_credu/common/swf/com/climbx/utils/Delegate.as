package com.climbx.utils {

	/**
	 * @author Administrator
	 */
	public class Delegate {
		public static function create(callback : Function, ...args) : Function {
			var handler : Function = function(...innerArgs):void { 
				callback.apply(this, innerArgs.concat(args)); 
			}
			return handler;
		}
	}
}
