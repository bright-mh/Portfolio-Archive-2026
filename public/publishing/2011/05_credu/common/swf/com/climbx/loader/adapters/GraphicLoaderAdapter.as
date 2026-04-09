package com.climbx.loader.adapters {
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.events.SecurityErrorEvent;
	import flash.net.URLRequest;
	import flash.system.LoaderContext;

	import com.climbx.loader.LoaderEvent;		

	public class GraphicLoaderAdapter extends EventDispatcher implements ILoaderAdapter {
		private var bytesLoaded:uint;
		private var loader:Loader;
		private var bytesTotal:uint;

		public function GraphicLoaderAdapter() {
		}

		private function addListeners():void {
			var dispatcher:IEventDispatcher = loader.contentLoaderInfo;
			dispatcher.addEventListener(ProgressEvent.PROGRESS, onProgressHandler);
			dispatcher.addEventListener(Event.OPEN, onStartHandler);
			dispatcher.addEventListener(Event.COMPLETE, onCompleteHandler);
			dispatcher.addEventListener(IOErrorEvent.IO_ERROR, onIOErrorHandler);
			dispatcher.addEventListener(SecurityErrorEvent.SECURITY_ERROR, onSecurityErrorHandler);
		}

		public function load(request:URLRequest, context:LoaderContext = null):void {
			bytesLoaded = 0;
			bytesTotal = 0;
			loader = new Loader();
			addListeners();
			loader.load(request, context);
		}

		private function onIOErrorHandler(event:IOErrorEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.ERROR, event.text));
		}

		private function onSecurityErrorHandler(event:SecurityErrorEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.ERROR, event.text));
		}

		private function onStartHandler(event:Event):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.START));
		}

		private function onProgressHandler(event:ProgressEvent):void {
			bytesTotal = event.bytesTotal;
			bytesLoaded = event.bytesLoaded;
			dispatchEvent(new LoaderEvent(LoaderEvent.PROGRESS));
		}

		public function getBytesTotal():uint {
			return bytesTotal;
		}

		private function onCompleteHandler(event:Event):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.COMPLETE));
		}

		public function getBytesLoaded():uint {
			return bytesLoaded;
		}

		private function removeListeners():void {
			var dispatcher:IEventDispatcher = loader.contentLoaderInfo;
			dispatcher.removeEventListener(ProgressEvent.PROGRESS, onProgressHandler);
			dispatcher.removeEventListener(Event.OPEN, onStartHandler);
			dispatcher.removeEventListener(Event.COMPLETE, onCompleteHandler);
			dispatcher.removeEventListener(IOErrorEvent.IO_ERROR, onIOErrorHandler);
			dispatcher.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, onSecurityErrorHandler);
		}

		public function getLoadedContent():Object {
			return loader.content;
		}

		public function dispose():void {
			bytesLoaded = 0;
			bytesTotal = 0;
			removeListeners();
			loader.close();
			loader.unload();
			loader = null;
		}
	}
}
