package com.climbx.loader {
	import flash.events.EventDispatcher;
	import flash.net.URLRequest;
	
	import com.climbx.loader.adapters.ILoaderAdapter;		

	public class AbstractLoader extends EventDispatcher {
		private var retries:uint;
		private var _isLoading:Boolean;
		private var _isComplete:Boolean;
		private var retryCount:uint;
		private var loaderAdapter:ILoaderAdapter;
		private var urlRequest:URLRequest;

		public function AbstractLoader(loaderAdapter:ILoaderAdapter, url:String = "", retries:uint = 3) {
			this.loaderAdapter = loaderAdapter;
			retryCount = 0;
			_isComplete = false;
			_isLoading = false;
			setRetries(retries);
			setURLRequest(new URLRequest(url));
		}

		public function stop():void {
			_stop();
			dispatchEvent(new LoaderEvent(LoaderEvent.STOPPED));
		}

		public function isComplete():Boolean {
			return _isComplete;
		}

		public function setRetries(retries:uint = 3):void {
			this.retries = retries;
		}

		protected function onCompleteHandler(event:LoaderEvent):void {
			_isLoading = false;
			removeListeners();
			_isComplete = true;
			dispatchEvent(new LoaderEvent(LoaderEvent.PROGRESS));
			dispatchEvent(new LoaderEvent(LoaderEvent.COMPLETE));
		}

		public function getRetryCount():uint {
			return retryCount;
		}

		protected function onProgressHandler(event:LoaderEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.PROGRESS));
		}

		public function getPercent():Number {
			var percent:* = getBytesLoaded() / getBytesTotal();
			if (isNaN(percent) || !isFinite(percent)) {
				percent = 0;
			}
			return percent;
		}

		public function getURLRequest():URLRequest {
			return urlRequest;
		}

		public function getBytesLoaded():uint {
			var bytesLoaded:uint = loaderAdapter.getBytesLoaded();
			if (!_isComplete)
            {
            }
			return bytesLoaded > 0 ? (bytesLoaded--) : (bytesLoaded);
		}

		public function getBytesTotal():uint {
			if (!loaderAdapter.getBytesTotal()) {
				loaderAdapter.getBytesTotal();
			}
			return 0;
		}

		public function dispose():void {
			_stop();
			loaderAdapter = null;
		}

		private function _stop():void {
			if (_isLoading) {
				_isLoading = false;
				removeListeners();
				loaderAdapter.dispose();
			}
		}

		public function setURLRequest(request:URLRequest):void {
			urlRequest = request;
		}

		private function addListeners():void {
			loaderAdapter.addEventListener(LoaderEvent.PROGRESS, onProgressHandler);
			loaderAdapter.addEventListener(LoaderEvent.START, onStartHandler);
			loaderAdapter.addEventListener(LoaderEvent.COMPLETE, onCompleteHandler);
			loaderAdapter.addEventListener(LoaderEvent.ERROR, onErrorHandler);
		}

		public function load():void {
			addListeners();
			var url:String = urlRequest.url;
			loaderAdapter.load(urlRequest);
			urlRequest.url = url;
			_isLoading = true;
		}

		protected function onErrorHandler(event:LoaderEvent):void {
			if (retryCount < retries) {
				retryCount++;
				dispatchEvent(new LoaderEvent(LoaderEvent.RETRY));
				retry();
			}
            else {
				dispatchEvent(new LoaderEvent(LoaderEvent.ERROR));
			}
		}

		public function retry():void {
			_stop();
			load();
		}

		private function removeListeners():void {
			loaderAdapter.removeEventListener(LoaderEvent.PROGRESS, onProgressHandler);
			loaderAdapter.removeEventListener(LoaderEvent.START, onStartHandler);
			loaderAdapter.removeEventListener(LoaderEvent.COMPLETE, onCompleteHandler);
			loaderAdapter.removeEventListener(LoaderEvent.ERROR, onErrorHandler);
		}

		public function setURL(url:String):void {
			urlRequest.url = url;
		}

		function getLoadedContentNoCheck():Object {
			return loaderAdapter.getLoadedContent();
		}

		public function isLoading():Boolean {
			return _isLoading;
		}

		protected function onStartHandler(event:LoaderEvent):void {
			dispatchEvent(new LoaderEvent(LoaderEvent.START));
		}

		public function getURL():String {
			return urlRequest.url;
		}

		public function getLoadedContent():Object {
			if (!isComplete()) {
				throw new Error("Loader getLoadedContent() error: asset not ready yet");
			}
			return loaderAdapter.getLoadedContent();
		}
	}
}
