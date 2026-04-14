package com.climbx.loader.adapters {
	import flash.display.Sprite;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	import flash.net.URLRequest;
	import flash.system.LoaderContext;
	
	import com.climbx.loader.LoaderEvent;
	import com.climbx.media.VideoController;
	import com.climbx.media.MediaControllerEvent;		

	public class VideoControllerLoaderAdapter extends EventDispatcher implements ILoaderAdapter {
		private var mode:String;
		private var loader:VideoController;
		public static const BUFFER_MODE:String = "bufferMode";
		public static const LOAD_MODE:String = "loadMode";

		public function VideoControllerLoaderAdapter(mode:String) {
			this.mode = mode;
		}

		private function addListeners():void {
			var dispatcher:IEventDispatcher = loader;
			if (mode == LOAD_MODE) {
				dispatcher.addEventListener(MediaControllerEvent.LOAD_COMPLETE, onCompleteHandler);
				dispatcher.addEventListener(MediaControllerEvent.LOAD_PROGRESS, onProgressHandler);
			}
            else {
				dispatcher.addEventListener(MediaControllerEvent.BUFFER_COMPLETE, onCompleteHandler);
				dispatcher.addEventListener(MediaControllerEvent.BUFFER_PROGRESS, onProgressHandler);
			}
			dispatcher.addEventListener(MediaControllerEvent.LOAD_START, onStartHandler);
			dispatcher.addEventListener(MediaControllerEvent.LOAD_ERROR, onErrorHandler);
		}

		public function getBytesLoaded():uint {
			return mode == LOAD_MODE ? (loader.getBytesLoaded()) : (loader.getBufferedPercent() * 1000);
		}

		public function load(request:URLRequest, context:LoaderContext = null):void {
			if (context != null) {
				throw new Error("FLVControllerLoaderAdapter error: LoaderContext is not supported");
			}
			loader = new VideoController(new Sprite());
			loader.load(request.url);
			addListeners();
		}

		private function onStartHandler(event:MediaControllerEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.START));
		}

		private function onErrorHandler(event:MediaControllerEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.ERROR, "VideoControllerEvent error"));
		}

		public function getBytesTotal():uint {
			return mode == LOAD_MODE ? (loader.getBytesTotal()) : (1000);
		}

		private function onProgressHandler(event:MediaControllerEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.PROGRESS));
		}

		private function onCompleteHandler(event:MediaControllerEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.COMPLETE));
		}

		private function removeListeners():void {
			var dispatcher:IEventDispatcher = loader;
			if (mode == LOAD_MODE) {
				dispatcher.removeEventListener(MediaControllerEvent.LOAD_COMPLETE, onCompleteHandler);
				dispatcher.removeEventListener(MediaControllerEvent.LOAD_PROGRESS, onProgressHandler);
			}
            else {
				dispatcher.removeEventListener(MediaControllerEvent.BUFFER_COMPLETE, onCompleteHandler);
				dispatcher.removeEventListener(MediaControllerEvent.BUFFER_PROGRESS, onProgressHandler);
			}
			dispatcher.removeEventListener(MediaControllerEvent.LOAD_START, onStartHandler);
			dispatcher.removeEventListener(MediaControllerEvent.LOAD_ERROR, onErrorHandler);
		}

		public function getLoadedContent():Object {
			return loader;
		}

		public function dispose():void {
			removeListeners();
			loader.dispose();
			loader = null;
		}
	}
}
