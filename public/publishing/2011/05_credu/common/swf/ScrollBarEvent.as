package
{
	import flash.events.*;
	
	public class ScrollBarEvent extends Event
	{
		public static const VALUE_CHANGED = "valueChanged";
		public var scrollValue:Number;
		
		public function ScrollBarEvent(sv:Number):void
		{
			super(VALUE_CHANGED);
			scrollValue = sv;
		}
		
	}
}
