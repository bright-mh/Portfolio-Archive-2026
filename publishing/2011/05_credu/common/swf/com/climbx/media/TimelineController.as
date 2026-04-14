package com.climbx.media {
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.utils.Dictionary;	

	/**
	 * @author mediatribe
	 */
	public class TimelineController extends EventDispatcher {
		public static const FORWARD:String = "forward";
		public static const BACKWARD:String = "backward";

		private static var dictionary:Dictionary = new Dictionary(false);

		private var movieClip:MovieClip;
		private var _direction:String;

		public function get direction():String {
			return _direction;
		}

		public function set direction(value:String):void {
			_direction = value;
		}

		private var pulse:Sprite;
		private var _stopAt:int;

		public function get stopAt():Object {
			return _stopAt;
		}

		public function set stopAt(value:Object):void {
			
			var frame:int = value is int ? int(value) : TimelineUtil.getFrameFromLabel(movieClip, value.toString());
			
			if(frame < 1) frame = 1;
			if(frame > movieClip.totalFrames) frame = movieClip.totalFrames;
			
			_stopAt = frame;
		}

		private var playing:Boolean;

		public function TimelineController(movieClip:MovieClip) {
			this.movieClip = movieClip;
			pulse = new Sprite();
			internalRegister(this);
		}

		private static function internalRegister(controller:TimelineController):void {
			if (dictionary[controller.getMovieClip()] == null)
                dictionary[controller.getMovieClip()] = controller;
		}

		private static function internalRelease(controller:TimelineController):void {
			if (dictionary[controller.getMovieClip()]) {
				dictionary[controller.getMovieClip()] = null;
				delete dictionary[controller.getMovieClip()];
			}
		}

		public function getMovieClip():MovieClip {
			return movieClip;
		}

		public function play(frame:Object = null):void {
			if(pulse.hasEventListener(Event.ENTER_FRAME)) {
				pulse.removeEventListener(Event.ENTER_FRAME, update);
			}
			
			if(direction == FORWARD && frame == null)
				stopAt = movieClip.totalFrames;
			else if(direction == BACKWARD && frame == null)
				stopAt = 1;
			else
				stopAt = frame;
			
			if(stopAt < movieClip.currentFrame) {
				direction = BACKWARD;
			} else if(stopAt > movieClip.currentFrame) {
				direction = FORWARD;
			} else {
				if(playing) {
					playing = false;
					dispatchEvent(new TimelineControllerEvent(TimelineControllerEvent.END));
				}
				return;
			}
			
			pulse.addEventListener(Event.ENTER_FRAME, update);
			
			if(!playing) {
				playing = true;	
				dispatchEvent(new TimelineControllerEvent(TimelineControllerEvent.START));
			}
		}

		public static function playTo(mc:MovieClip, stopAt:Object):TimelineController {
			var controller:TimelineController = getController(mc);
			controller.stopAt = stopAt;
			controller.play(stopAt);
			
			return controller;
		}

		public static function playForward(mc:MovieClip):TimelineController {
			var controller:TimelineController = getController(mc);
			controller.stopAt = mc.totalFrames;
			controller.play(mc.totalFrames);
			
			return controller;
		}

		public static function playBackward(mc:MovieClip):TimelineController {
			var controller:TimelineController = getController(mc);
			controller.play(1);
			
			return controller;
		}

		public static function getController(mc:MovieClip):TimelineController {
			var controller:TimelineController;
			if(dictionary[mc] == null)
				controller = new TimelineController(mc);
			else
				controller = dictionary[mc];
			return controller;
		}

		public function dispose():void {
			pulse.removeEventListener(Event.ENTER_FRAME, update);
			internalRelease(this);
		}

		private function update(event:Event):void {
			if(direction == FORWARD) {
				movieClip.nextFrame();
			} else if(direction == BACKWARD) {
				movieClip.prevFrame();
			}
			
			dispatchEvent(new TimelineControllerEvent(TimelineControllerEvent.UPDATE));
			
			if(movieClip.currentFrame == stopAt) {
				dispose();
				playing = false;
				dispatchEvent(new TimelineControllerEvent(TimelineControllerEvent.END));
			}
		}
	}
}
