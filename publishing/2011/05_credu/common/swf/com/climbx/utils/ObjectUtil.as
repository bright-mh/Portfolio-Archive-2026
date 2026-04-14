package com.climbx.utils {
	import flash.utils.ByteArray;	

	/**
	 * @author Administrator
	 */
	public class ObjectUtil {

		public static function clone(object:Object):Object {
			var bytes:ByteArray = new ByteArray();
			bytes.writeObject(object);
			bytes.position = 0;
			return bytes.readObject();
		}
	}
}
