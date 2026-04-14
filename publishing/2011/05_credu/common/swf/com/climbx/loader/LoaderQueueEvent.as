package com.climbx.loader {
	import flash.events.Event;		

	public class LoaderQueueEvent extends Event {
		private var info:String;
		public static const EACH_START:String = "eachStart";
		public static const START:String = "start";
		public static const EACH_RETRY:String = "eachRetry";
		public static const PROGRESS:String = "progress";
		public static const EACH_STOPPED:String = "eachStopped";
		public static const EACH_ERROR:String = "eachError";
		public static const EACH_COMPLETE:String = "eachComplete";
		public static const COMPLETE:String = "complete";
		public static const STOPPED:String = "stopped";

		public function LoaderQueueEvent(type:String, info:String = "", bubles:Boolean = false, cancelable:Boolean = false) {
			this.info = info;
			super(type, bubles, cancelable);
		}

		override public function toString():String {
			return formatToString("LoaderQueueEvent", "type", "bubbles", "cancelable", "eventPhase");
		}

		override public function clone():Event {
			return new LoaderQueueEvent(type, info, bubbles, cancelable);
		}

		public function getInfo():String {
			return info;
		}

		public function locateLoader(Meter:String):AbstractLoader {
			return (target as LoaderQueue).locateLoader(Meter);
		}

		public function getCurrentLoader():AbstractLoader {
			return (target as LoaderQueue).getCurrentLoader();
		}

		public function getLoaderQueuePercent():Number {
			return (target as LoaderQueue).getPercent();
		}

		public function getCurrentLoaderPercent():Number {
			return (target as LoaderQueue).getCurrentLoader().getPercent();
		}
	}
}
