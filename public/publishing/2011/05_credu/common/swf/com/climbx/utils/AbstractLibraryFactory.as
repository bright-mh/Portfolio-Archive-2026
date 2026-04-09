package com.climbx.utils {
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.media.Sound;
	import flash.text.Font;	

	public class AbstractLibraryFactory extends Object {
		private var library:Sprite;
		private var registered:Array;

		public function AbstractLibraryFactory(library:Sprite = null) {
			registered = new Array();
			if (library)
				registerLibrary(library);
		}

		public function makeSound(name:String):Sound {
			return makeAsset(name);
		}

		public function makeSprite(name:String):Sprite {
			var container:Sprite;
			var asset:* = makeAsset(name);
			if (asset is Bitmap) {
				container = new Sprite();
				container.addChild(asset);
				return container;
			}
			return asset;
		}

		public function makeFont(name:String):Font {
			registerFont(name);
			return makeAsset(name);
		}

		public function makeBitmapData(name:String):BitmapData {
			return ClassUtil.makeAsset(library, name, null, null);
		}

		public function makeAsset(name:String):* {
			return ClassUtil.makeAsset(library, name);
		}

		public function getFontName(name:String):String {
			registerFont(name);
			return makeFont(name).fontName;
		}

		public function getClass(name:String):Class {
			return ClassUtil.getAsset(library, name);
		}

		public function makeMovieClip(name:String):MovieClip {
			return makeAsset(name);
		}

		public function isLibraryRegistered():Boolean {
			return library != null;
		}

		public function hasAsset(name:String):Boolean {
			return ClassUtil.hasDefinition(library, name);
		}

		public function registerLibrary(library:Sprite):void {
			this.library = library;
		}

		public function registerFont(name:String):void {
			if (!registered[name]) {
				Font.registerFont(ClassUtil.getAsset(library, name));
				registered[name] = true;
			}
		}

		public function makeBitmap(name:String):Bitmap {
			return makeAsset(name);
		}
	}
}
