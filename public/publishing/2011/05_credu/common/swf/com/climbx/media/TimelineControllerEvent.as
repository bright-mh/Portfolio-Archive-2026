package com.climbx.media {
	import flash.events.Event;		

	/**
	 * @author mediatribe
	 */
	public class TimelineControllerEvent extends Event {
		public static const START:String = "start";
		public static const UPDATE:String = "update";
		public static const END:String = "end";

		public function TimelineControllerEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false) {
			super(type, bubbles, cancelable);
		}

		override public function toString():String {
			return formatToString("TimelineControllerEvent", "type", "bubbles", "cancelable", "eventPhase");
		}

		override public function clone():Event {
			return new TimelineControllerEvent(type, bubbles, cancelable);
		}
	}
}
