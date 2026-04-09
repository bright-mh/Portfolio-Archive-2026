package com.climbx.events {
	import flash.events.Event;	
	
	/**
	 * @author Administrator
	 */
	public class DataNumberEvent extends Event {
		public var data:Number;
		
		public function DataNumberEvent(type:String, data:Number, bubbles:Boolean = false, cancelable:Boolean = false) {
			this.data = data;
			super(type, bubbles, cancelable);
		}

		override public function clone():Event {
			return new DataNumberEvent(type, data, bubbles, cancelable);
		}
	}
}
