package com.climbx.loader {
	import flash.events.Event;		

	public class LoaderEvent extends Event {
		private var info:String;
		public static const RETRY:String = "LoaderRetry";
		public static const START:String = "LoaderStart";
		public static const STOPPED:String = "LoaderStopped";
		public static const ERROR:String = "LoaderError";
		public static const PROGRESS:String = "LoaderProgress";
		public static const COMPLETE:String = "LoaderComplete";

		public function LoaderEvent(type:String, info:String = "", bubbles:Boolean = false, cancelable:Boolean = false) {
			this.info = info;
			super(type, bubbles, cancelable);
		}

		public function getInfo():String {
			return info;
		}

		public function getLoaderPercent():Number {
			return (target as AbstractLoader).getPercent();
		}

		override public function clone():Event {
			return new LoaderEvent(type, info, bubbles, cancelable);
		}
	}
}
