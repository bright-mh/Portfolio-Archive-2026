package com.climbx.media {
	import flash.events.Event;		

	public class MediaControllerEvent extends Event {
		public static const LOAD_PROGRESS:String = "loadProgress";
		public static const PLAYBACK_BUFFER_SHOW:String = "playbackBufferShow";
		public static const LOAD_START:String = "loadStart";
		public static const LOOP:String = "loop";
		public static const LOAD_ERROR:String = "loadError";
		public static const LOAD_COMPLETE:String = "loadComplete";
		public static const BUFFER_PROGRESS:String = "bufferProgress";
		public static const BUFFER_COMPLETE:String = "bufferComplete";
		public static const END:String = "end";
		public static const PLAYBACK_BUFFER_HIDE:String = "playbackBufferHide";

		public function MediaControllerEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false) {
			super(type, bubbles, cancelable);
		}

		override public function toString():String {
			return formatToString("MediaControllerEvent", "type", "bubbles", "cancelable", "eventPhase");
		}

		override public function clone():Event {
			return new MediaControllerEvent(type, bubbles, cancelable);
		}
	}
}
