package com.climbx.loader {
	import flash.events.EventDispatcher;			

	/**
	 * @author Administrator
	 */

	public class LoaderQueue extends EventDispatcher {
		private var stack:Array;
		private var urlPrefix:String;
		private var _isComplete:Boolean;
		private var totalSize:Number;
		private var currentIndex:Number;
		private var _isLoading:Boolean;
		private var startEventDispatched:Boolean;

		public function LoaderQueue(urlPrefix:String = "") {
			urlPrefix = urlPrefix;
			stack = new Array();
			currentIndex = -1;
			_isComplete = false;
			_isLoading = false;
			startEventDispatched = false;
		}

		private function _onEachError(event:LoaderEvent):void {
			fireEvent(LoaderQueueEvent.EACH_ERROR);
		}

		public function stop():void {
			_isLoading = false;
			getCurrentLoader().stop();
			fireEvent(LoaderQueueEvent.STOPPED);
		}

		public function isComplete():Boolean {
			return _isComplete;
		}

		public function locateLoader(url:String):AbstractLoader {
			for(var i:int = 0;i < stack.length; i++) {  
				if ((stack[i] as LoaderQueueItem).loader.getURL() == url) {
					return (stack[i] as LoaderQueueItem).loader;
				}
			}
			return null;
		}

		private function onEachStopped(event:LoaderEvent):void {
			fireEvent(LoaderQueueEvent.EACH_STOPPED);
		}

		private function onEachComplete(event:LoaderEvent):void {
			fireEvent(LoaderQueueEvent.EACH_COMPLETE);
			loadNext();
		}

		private function onEachStart(event:LoaderEvent):void {
			if (!startEventDispatched) {
				fireEvent(LoaderQueueEvent.START);
				startEventDispatched = true;
			}
			fireEvent(LoaderQueueEvent.EACH_START);
		}

		private function calculateTotalSize():void {
			var size:Number;
			for(var i:int = 0;i < stack.length; i++) {
				size = size + (stack[i] as LoaderQueueItem).size;
			}
			totalSize = size;
		}

		private function listenersHelper(functionName:String, loader:AbstractLoader):void {
			loader[functionName](LoaderEvent.COMPLETE, onEachComplete);
			loader[functionName](LoaderEvent.ERROR, _onEachError);
			loader[functionName](LoaderEvent.PROGRESS, onEachProgress);
			loader[functionName](LoaderEvent.RETRY, onEachRetry);
			loader[functionName](LoaderEvent.START, onEachStart);
			loader[functionName](LoaderEvent.STOPPED, onEachStopped);
		}

		public function getPercent():Number {
			var size:Number;
			var item:LoaderQueueItem;
			if (isLoading()) {
				size = 0;
				for(var i:int = 0;i < currentIndex; i++) {  
					item = stack[i] as LoaderQueueItem;
					size = size + item.size * item.loader.getPercent();
				}
				return size / totalSize;
			}
            else {
				if (isComplete()) {
					return 1;
				}
			}
			return 0;
		}

		private function onEachRetry(event:LoaderEvent):void {
			fireEvent(LoaderQueueEvent.EACH_RETRY);
		}

		private function fireEvent(type:String, info:String = ""):void {
			dispatchEvent(new LoaderQueueEvent(type, info));
		}

		public function getAllLoaders():Array {
			var loaders:Array = new Array();
			for(var i:int = 0;i < stack.length; i++) {
				loaders.push((stack[i] as LoaderQueueItem).loader);
			}
			return loaders;
		}

		private function loadNext():void {
			var currentLoader:AbstractLoader;
			var nextLoader:AbstractLoader;
			if (isLoading()) {
				currentLoader = (stack[currentIndex] as LoaderQueueItem).loader;
				removeListeners(currentLoader);
			}
            else {
				_isLoading = true;
			}
			if (++currentIndex == stack.length) {
				_isLoading = false;
				_isComplete = true;
				fireEvent(LoaderQueueEvent.COMPLETE);
			}
            else {
				nextLoader = (stack[currentIndex] as LoaderQueueItem).loader;
				_addListeners(nextLoader);
				nextLoader.load();
			}
		}

		private function removeListeners(loader:AbstractLoader):void {
			listenersHelper("removeEventListener", loader);
		}

		public function add(loader:AbstractLoader, size:Number = 1):void {
			loader.setURL(urlPrefix + loader.getURL());
			stack.push(new LoaderQueueItem(loader, size));
		}

		public function load():void {
			calculateTotalSize();
			loadNext();
		}

		private function onEachProgress(event:LoaderEvent):void {
			fireEvent(LoaderQueueEvent.PROGRESS);
		}

		public function skipToNext():void {
			getCurrentLoader().stop();
			loadNext();
		}

		public function removeByLoader(loader:AbstractLoader):void {
			for(var i:int = 0;i < stack.length; i++) {
				if ((stack[i] as LoaderQueueItem).loader == loader) {
					stack.splice(i, 1);
					return;
				}
			}
		}

		public function isLoading():Boolean {
			return _isLoading;
		}

		public function removeByURL(url:String):void {
			for(var i:int = 0;i < stack.length; i++) {    
				if ((stack[i] as LoaderQueueItem).loader.getURL() == url) {
					stack.splice(i, 1);
					return;
				}
			}
		}

		public function getCurrentLoader():AbstractLoader {
			return stack[currentIndex].loader;
		}

		public function getSize():uint {
			return stack.length;
		}

		private function _addListeners(loader:AbstractLoader):void {
			listenersHelper("addEventListener", loader);
		}
	}
}

import com.climbx.loader.*;

class LoaderQueueItem extends Object {
	public var size:Number;
	public var loader:AbstractLoader;

	function LoaderQueueItem(loader:AbstractLoader, size:Number) {
		this.loader = loader;
		this.size = size;
	}
}
