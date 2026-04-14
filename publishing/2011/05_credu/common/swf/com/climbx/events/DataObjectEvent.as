package com.climbx.events {
	import com.climbx.utils.ObjectUtil;	
	
	import flash.events.Event;	
	
	/**
	 * @author Administrator
	 */
	public class DataObjectEvent extends Event {
		public var data:Object;
		
		public function DataObjectEvent(type:String, data:Object, bubbles:Boolean = false, cancelable:Boolean = false) {
			this.data = data;
			super(type, bubbles, cancelable);
		}

		override public function clone():Event {
			return new DataObjectEvent(type, ObjectUtil.clone(data), bubbles, cancelable);
		}
	}
}
