package com.climbx.utils {	

	/**
	 * @author Administrator
	 */
	public class XMLListUtil {
		public static function push(list:XMLList, ... args):uint {
			trace(args);
			list = list + new XMLList(args);
			trace("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
			trace(list[list.length() - 1]);
			trace("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
			trace(list);
			return list.length();
		}
		
		public static function pop(list:XMLList):XML {
			var popped:XMLList = new XMLList(list[list.length() - 1]);
			delete list[list.length() - 1];
			return popped[0];
		}
		
		public static function shift(list:XMLList):XML {
			var shifted:XMLList = new XMLList(list[0]);
			delete list[0];
			return shifted[0];
		}
		
		public static function unshift(list, ... args):uint {
			if(list.length())
				list = args + list[0];
			else
				list[0] = args;
			return list.length();
		}
	}
}
