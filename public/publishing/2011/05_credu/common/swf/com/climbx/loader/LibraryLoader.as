package com.climbx.loader {
	import flash.display.DisplayObject;
	import flash.display.Sprite;
	
	import com.climbx.loader.adapters.GraphicLoaderAdapter;
	import com.climbx.utils.AbstractLibraryFactory;		

	public class LibraryLoader extends AbstractLoader {
		private var assetFactoryInstance:AbstractLibraryFactory;

		public function LibraryLoader(assetFactoryInstance:AbstractLibraryFactory, url:String = "", retries:uint = 3) {
			assetFactoryInstance = assetFactoryInstance;
			super(new GraphicLoaderAdapter(), url, retries);
		}

		override protected function onCompleteHandler(event:LoaderEvent):void {
			assetFactoryInstance.registerLibrary(getLoadedContentNoCheck() as Sprite);
			super.onCompleteHandler(event);
		}

		public function getDisplayObject():DisplayObject {
			return getLoadedContent() as DisplayObject;
		}
	}
}
