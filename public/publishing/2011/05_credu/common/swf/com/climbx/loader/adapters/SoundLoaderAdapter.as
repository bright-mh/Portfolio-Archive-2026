package com.climbx.loader.adapters {
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.events.SecurityErrorEvent;
	import flash.media.Sound;
	import flash.media.SoundLoaderContext;
	import flash.net.URLRequest;
	import flash.system.LoaderContext;
	
	import com.climbx.loader.LoaderEvent;		

	public class SoundLoaderAdapter extends EventDispatcher implements ILoaderAdapter {
		private var bytesLoaded:uint;
		private var loader:Sound;
		private var bytesTotal:uint;

		public function SoundLoaderAdapter() {
		}

		private function addListeners():void {
			var dispatcher:IEventDispatcher = loader;
			dispatcher.addEventListener(ProgressEvent.PROGRESS, onProgressHandler);
			dispatcher.addEventListener(Event.OPEN, onStartHandler);
			dispatcher.addEventListener(Event.COMPLETE, onCompleteHandler);
			dispatcher.addEventListener(IOErrorEvent.IO_ERROR, onIOErrorHandler);
			dispatcher.addEventListener(SecurityErrorEvent.SECURITY_ERROR, onSecurityErrorHandler);
		}

		public function load(request:URLRequest, context:LoaderContext = null):void {
			bytesLoaded = 0;
			bytesTotal = 0;
			loader = new Sound();
			addListeners();
			loader.load(request, context as SoundLoaderContext);
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
			var dispatcher:IEventDispatcher = loader;
			dispatcher.removeEventListener(ProgressEvent.PROGRESS, onProgressHandler);
			dispatcher.removeEventListener(Event.OPEN, onStartHandler);
			dispatcher.removeEventListener(Event.COMPLETE, onCompleteHandler);
			dispatcher.removeEventListener(IOErrorEvent.IO_ERROR, onIOErrorHandler);
			dispatcher.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, onSecurityErrorHandler);
		}

		public function getLoadedContent():Object {
			return loader;
		}

		public function dispose():void {
			bytesLoaded = 0;
			bytesTotal = 0;
			removeListeners();
			loader.close();
			loader = null;
		}
	}
}
