package com.climbx.media {
	import flash.events.AsyncErrorEvent;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.events.SecurityErrorEvent;
	import flash.media.ID3Info;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundLoaderContext;
	import flash.media.SoundTransform;
	import flash.net.URLRequest;		

	/**
	 * @author Administrator
	 */
	public class AudioController extends EventDispatcher implements IMediaController {
		private var sound:Sound;
		private var wasBuffering:Boolean;
		private var _looping:Boolean;
		private var channel:SoundChannel;
		private var _isPaused:Boolean;
		private var _volume:Number;
		private var position:Number;

		public function AudioController(url:String = "") {
			if(url != "")
				load(url);
		}

		public function load(url:String):void {
			_isPaused = true;
			sound = new Sound();
			sound.addEventListener(ProgressEvent.PROGRESS, onLoadProgress, false, 0, true);
			sound.addEventListener(Event.OPEN, onLoadOpen, false, 0, true);
			sound.addEventListener(Event.COMPLETE, onLoadComplete, false, 0, true);
			sound.addEventListener(Event.ID3, onID3, false, 0, true);
			sound.addEventListener(IOErrorEvent.IO_ERROR, onIOError, false, 0, true);
			sound.addEventListener(AsyncErrorEvent.ASYNC_ERROR, asyncError, false, 0, true);
			sound.addEventListener(SecurityErrorEvent.SECURITY_ERROR, onIOError, false, 0, true);
			var context:SoundLoaderContext = new SoundLoaderContext(3000, true);
			sound.load(new URLRequest(url), context);
			position = 0;
			resume();
			stop();
			volume = 1;
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_START));
		}
		
		private function onLoadProgress(event:ProgressEvent):void {
			if(sound.isBuffering && !wasBuffering) {
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_SHOW));
			}
			if(!sound.isBuffering && wasBuffering) {
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.BUFFER_COMPLETE));
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_HIDE));
			}
			if(sound.isBuffering) {
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.BUFFER_PROGRESS));
			}
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_PROGRESS));
			
			wasBuffering = sound.isBuffering;
		}

		public function stop():void {
			channel.stop();
			channel.removeEventListener(Event.SOUND_COMPLETE, onSoundComplete);
			_isPaused = true;
		}

		public function resume():void {
			channel = sound.play(position);
			channel.addEventListener(Event.SOUND_COMPLETE, onSoundComplete);
			_isPaused = false;
		}

		private function onSoundComplete(event:Event):void {
			if(_looping) {
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_HIDE));
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOOP));
				seek(0);
			} else {
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_HIDE));
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.END));
			}
		}
		
		public function set volume(value:Number):void {
			_volume = value;
			var soundTransform:SoundTransform = channel.soundTransform;
			soundTransform.volume = _volume;
			channel.soundTransform = soundTransform;
		}
		
		public function get volume():Number {
			return _volume;
		}
		
		public function set looping(value:Boolean):void {
			_looping = value;
		}
		
		public function get looping():Boolean {
			return _looping;
		}

		private function onLoadOpen(event:Event):void {
		}

		private function onLoadComplete(event:Event):void {
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_COMPLETE));
		}

		private function onID3(event:Event):void {
			try {
				var id3:ID3Info = event.target["id3"];
				for (var propName:String in id3) {
					trace(propName + " = " + id3[propName]);
				}
			}
    		catch (err:SecurityError) {
				trace("Could not retrieve ID3 data.");
			}
		}

		private function asyncError(event:AsyncErrorEvent):void {
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_ERROR));
		}

		private function onIOError(event:SecurityErrorEvent):void {
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_ERROR));
		}
		
		public function pause():void {
			_isPaused = true;
		}
		
		public function isPaused():Boolean {
			return _isPaused;
		}
		
		public function getDuration():Number {
			return sound.length;
		}

		public function dispose():void {
			stop();
			sound.close();
		}

		public function getTime():Number {
			return channel.position;
		}
		
		public function seek(offset:Number):void {
			position = offset;
			if(_isPaused) return;
				stop();
				resume();
		}
	}
}
