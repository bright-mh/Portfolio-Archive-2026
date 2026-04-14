package com.climbx.events {
	import flash.events.Event;	
	
	/**
	 * @author Administrator
	 */
	public class DataStringEvent extends Event {
		public var data:String;
		
		public function DataStringEvent(type:String, data:String, bubbles:Boolean = false, cancelable:Boolean = false) {
			this.data = data;
			super(type, bubbles, cancelable);
		}

		override public function clone():Event {
			return new DataStringEvent(type, data, bubbles, cancelable);
		}
	}
}
