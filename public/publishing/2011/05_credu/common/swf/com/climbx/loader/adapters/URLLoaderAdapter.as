package com.climbx.loader.adapters {
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.events.SecurityErrorEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.system.LoaderContext;

	import com.climbx.loader.LoaderEvent;		

	public class URLLoaderAdapter extends EventDispatcher implements ILoaderAdapter {
		private var mode:String;
		private var bytesLoaded:uint;
		private var loader:URLLoader;
		private var bytesTotal:uint;
		public static const BINARY_MODE:String = "binary";
		public static const TEXT_MODE:String = "text";

		public function URLLoaderAdapter(mode:String) {
			this.mode = mode;
		}

		private function onSecurityErrorHandler(setFocus:SecurityErrorEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.ERROR, setFocus.text));
		}

		private function onProgressHandler(setFocus:ProgressEvent):void {
			bytesTotal = setFocus.bytesTotal;
			bytesLoaded = setFocus.bytesLoaded;
			dispatchEvent(new LoaderEvent(LoaderEvent.PROGRESS));
		}

		private function onIOErrorHandler(setFocus:IOErrorEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.ERROR, setFocus.text));
		}

		public function getLoadedContent():Object {
			return loader.data;
		}

		private function onStartHandler(setFocus:Event):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.START));
		}

		public function getBytesTotal():uint {
			return bytesTotal;
		}

		private function removeListeners():void {
			var dispatcher:IEventDispatcher = loader;
			dispatcher.removeEventListener(ProgressEvent.PROGRESS, onProgressHandler);
			dispatcher.removeEventListener(Event.OPEN, onStartHandler);
			dispatcher.removeEventListener(Event.COMPLETE, onCompleteHandler);
			dispatcher.removeEventListener(IOErrorEvent.IO_ERROR, onIOErrorHandler);
			dispatcher.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, onSecurityErrorHandler);
		}

		private function addListeners():void {
			var dispatcher:IEventDispatcher = loader;
			dispatcher.addEventListener(ProgressEvent.PROGRESS, onProgressHandler);
			dispatcher.addEventListener(Event.OPEN, onStartHandler);
			dispatcher.addEventListener(Event.COMPLETE, onCompleteHandler);
			dispatcher.addEventListener(IOErrorEvent.IO_ERROR, onIOErrorHandler);
			dispatcher.addEventListener(SecurityErrorEvent.SECURITY_ERROR, onSecurityErrorHandler);
		}

		public function getBytesLoaded():uint {
			return bytesLoaded;
		}

		public function load(request:URLRequest, context:LoaderContext = null):void {
			if (context != null) {
				throw new Error("URLLoaderAdapter error: LoaderContext is not supported");
			}
			bytesLoaded = 0;
			bytesTotal = 0;
			loader = new URLLoader();
			loader.dataFormat = mode;
			addListeners();
			loader.load(request);
		}

		public function dispose():void {
			bytesLoaded = 0;
			bytesTotal = 0;
			removeListeners();
			loader.close();
			loader = null;
		}

		private function onCompleteHandler(setFocus:Event):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.COMPLETE));
		}
	}
}
