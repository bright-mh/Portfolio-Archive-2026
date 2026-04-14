package com.climbx.utils {
	import flash.display.Sprite;
	import flash.system.ApplicationDomain;
	import flash.utils.getDefinitionByName;	

	/**
	 * @author Administrator
	 */
	public class ClassUtil {
		public static function getClassRef(name:String):Class {
			return getDefinitionByName(name) as Class;
		}

		public static function makeAsset(target:Sprite, name:String, ... args):* {
			return apply(getAsset(target, name), args);
		}

		public static function makeInstance(name:String, ... args):Object {
			var classRef:Class = getClassRef(name);
			return apply(classRef, args);
		}

		public static function getAsset(target:Sprite, name:String):* {
			return getDomain(target).getDefinition(name);
		}

		public static function getDomain(target:Sprite):ApplicationDomain {
			return target.loaderInfo.applicationDomain;
		}

		public static function hasDefinition(target:Sprite, name:String):Boolean {
			return getDomain(target).hasDefinition(name);
		}

		public static function apply(classRef:Class, args:Array):* {
			var length:int = args.length;
			if (length > 15)
				throw new Error("ClassUtils.apply error: More than 15 arguments have been passed.");
			
			switch(length) {
				case 0:
					return new classRef;
				case 1:
					return new classRef(args[0]);
				case 2:
					return new classRef(args[0], args[1]);
				case 3:
					return new classRef(args[0], args[1], args[2]);
				case 4:
					return new classRef(args[0], args[1], args[2], args[3]);
				case 5:
					return new classRef(args[0], args[1], args[2], args[3], args[4]);
				case 6:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5]);
				case 7:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
				case 8:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
				case 9:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
				case 10:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
				case 11:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10]);
				case 12:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], args[11]);
				case 13:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], args[11], args[12]);
				case 14:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], args[11], args[12], args[13]);
				case 15:
					return new classRef(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], args[11], args[12], args[13], args[14]);
				default:
					break;
			}
		}
	}
}
