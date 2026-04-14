package com.climbx.loader {
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.DisplayObject;

	import com.climbx.loader.adapters.GraphicLoaderAdapter;		

	public class GraphicLoader extends AbstractLoader {

		public function GraphicLoader(url:String = "", retries:uint = 3) {
			super(new GraphicLoaderAdapter(), url, retries);
		}

		public function getDisplayObject():DisplayObject {
			return getLoadedContent() as DisplayObject;
		}

		public function getBitmap():Bitmap {
			return new Bitmap(getBitmapData());
		}

		public function getBitmapData():BitmapData {
			var source:DisplayObject = getLoadedContent() as DisplayObject;
			var bitmapData:BitmapData = new BitmapData(source.width, source.height, true, 0);
			bitmapData.draw(source);
			return bitmapData;
		}
	}
}
