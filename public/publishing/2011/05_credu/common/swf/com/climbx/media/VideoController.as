package com.climbx.media {
	import flash.events.EventDispatcher;	
	import flash.display.DisplayObjectContainer;
	import flash.display.Sprite;
	import flash.events.AsyncErrorEvent;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.NetStatusEvent;
	import flash.events.SecurityErrorEvent;
	import flash.media.SoundTransform;
	import flash.media.Video;
	import flash.net.NetConnection;
	import flash.net.NetStream;

	import com.climbx.math.MathUtil;	

	public class VideoController extends EventDispatcher implements IMediaController {
		private var videoContainer:DisplayObjectContainer;
		private var video:Video;
		private var _pulse:Sprite;
		private var stream:NetStream;
		/*
		private var _netConn:String;
		 */
		private var url:String;
		private var useMetadataSize:Boolean;
		private var _volume:Number;
		private var height:Number;
		private var width:Number;
		private var _isPaused:Boolean;
		private var isDone:Boolean;
		private var bufferCompleteDispatched:Boolean;
		private var duration:Number;
		private var smoothing:Boolean;
		private var connection:NetConnection;
		private var _looping:Boolean;
		private static var ONE_SEC:Number = 193197;

		public function VideoController(videoContainer:DisplayObjectContainer, url:String = ""/*, command:String = null*/) {
			this.videoContainer = videoContainer;
			if(url != "")
				load(url/*, command*/);
		}

		private function securityErrorHandler(event:SecurityErrorEvent):void {
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_ERROR));
		}

		public function set videoHeight(value:Number):void {
			useMetadataSize = false;
			height = value;
			if (video) {
				video.height = height;
			}
		}

		public function getVideo():Video {
			return video;
		}

		private function onPlayStatusHandler(info:Object):void {
		}

		public function seek(offset:Number):void {
			stream.seek(offset);
		}

		public function get videoHeight():Number {
			return height;
		}

		private function connectStream():void {
			stream = new NetStream(connection);
			stream.addEventListener(IOErrorEvent.IO_ERROR, IOErrorHandler, false, 0, true);
			stream.addEventListener(NetStatusEvent.NET_STATUS, netStatusHandler, false, 0, true);
			stream.addEventListener(AsyncErrorEvent.ASYNC_ERROR, asyncErrorHandler, false, 0, true);
			video = new Video();
			video.attachNetStream(stream);
			if (width) {
				video.width = width;
			}
			if (height) {
				video.height = height;
			}
			video.smoothing = smoothing;
			stream.bufferTime = 3;
			stream.client = {onMetaData:onMetadataHandler, onCuePoint:onCuePointHandler, onPlayStatus:onPlayStatusHandler};
			stream.play(url);
			stream.seek(0);
			stream.pause();
			volume = 1;
			videoContainer.addChild(video);
			_pulse = new Sprite();
			_pulse.addEventListener(Event.ENTER_FRAME, pulse, false, 0, true);
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_START));
		}

		public function get videoWidth():Number {
			return width;
		}

		public function getBytesTotal():uint {
			return stream.bytesTotal;
		}

		public function isPaused():Boolean {
			return _isPaused;
		}

		public function stop():void {
			volume = 0;
			stream.seek(0);
			stream.pause();
			_isPaused = true;
		}

		private function onCuePointHandler(info:Object):void {
		}

		public function set videoWidth(value:Number):void {
			useMetadataSize = false;
			width = value;
			if (video) {
				video.width = width;
			}
		}

		public function closeStream():void {
			stream.close();
		}

		private function pulse(event:Event):void {
			if (!bufferCompleteDispatched) {
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.BUFFER_PROGRESS));
			}
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_PROGRESS));
			if (getBufferedPercent() >= 1 && !bufferCompleteDispatched && duration > 0) {
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.BUFFER_COMPLETE));
				bufferCompleteDispatched = true;
			}
			if (getLoadedPercent() >= 1 && bufferCompleteDispatched && duration > 0) {
				_pulse.removeEventListener(Event.ENTER_FRAME, pulse);
				dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_COMPLETE));
			}
			return;
		}

		public function get volume():Number {
			return _volume;
		}

		public function getDuration():Number {
			return duration;
		}

		public function dispose():void {
			stop();
			closeStream();
			closeNetConnection();
		}

		public function getBytesLoaded():uint {
			return stream.bytesLoaded;
		}

		public function resume():void {
			stream.resume();
			volume = 1;
			_isPaused = false;
		}

		public function getBufferedPercent():Number {
			var percent:Number = stream.bytesLoaded / Math.min(ONE_SEC * 3, stream.bytesTotal);
			percent = MathUtil.clamp(percent, 0, 1);
			if (isNaN(percent) || !isFinite(percent)) {
				percent = 0;
			}
			return percent;
		}

		public function set volume(value:Number):void {
			_volume = value;
			var soundTransform:SoundTransform = stream.soundTransform;
			soundTransform.volume = _volume;
			stream.soundTransform = soundTransform;
		}

		private function onMetadataHandler(info:Object):void {
			duration = info["duration"];
			if (useMetadataSize) {
				setVideoSize(info["width"], info["height"]);
			}
		}

		private function asyncErrorHandler(event:AsyncErrorEvent):void {
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_ERROR));
		}

		public function get videoSmoothing():Boolean {
			return smoothing;
		}

		public function getTime():Number {
			return stream.time;
		}

		public function get looping():Boolean {
			return _looping;
		}

		public function getURL():String {
			return url;
		}

		public function getLoadedPercent():Number {
			var percent:Number = stream.bytesLoaded / stream.bytesTotal;
			if (isNaN(percent) || !isFinite(percent)) {
				percent = 0;
			}
			return percent;
		}

		public function closeNetConnection():void {
			connection.close();
		}

		public function setVideoSize(width:Number, height:Number):void {
			useMetadataSize = false;
			width = width;
			height = height;
			if (video) {
				video.width = width;
				video.height = height;
				videoSmoothing = smoothing;
			}
		}

		private function netStatusHandler(event:NetStatusEvent):void {
			switch(event.info["code"]) {
				case "NetConnection.Connect.Success":
					connectStream();
					break;
				case "NetStream.Play.StreamNotFound":
					dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_ERROR));
					break;
				case "NetStream.Play.Start":
					isDone = false;
					break;
				case "NetStream.Play.Stop":
					if (_looping) {
						stream.seek(0);
						dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_HIDE));
						dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOOP));
					} else {
						isDone = true;
						dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_HIDE));
						dispatchEvent(new MediaControllerEvent(MediaControllerEvent.END));
					}
					break;
				case "NetStream.Buffer.Flush":
					break;
				case "NetStream.Buffer.Full":
					dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_HIDE));
					break;
				case "NetStream.Buffer.Empty":
					if (!isDone) {
						dispatchEvent(new MediaControllerEvent(MediaControllerEvent.PLAYBACK_BUFFER_SHOW));
					}
					break;
				case "NetStream.Pause.Notify":
					break;
				default:
					break;
			}
		}

		private function IOErrorHandler(event:IOErrorEvent):void {
			dispatchEvent(new MediaControllerEvent(MediaControllerEvent.LOAD_ERROR));
		}

		public function load(url:String/*, command:String = null*/):void {
			useMetadataSize = true;
			bufferCompleteDispatched = false;
			isDone = false;
			_isPaused = true;
			smoothing = false;
			_looping = false;
			this.url = url;
			/*
			_netConn = command;
			 */
			if (_pulse) {
				_pulse.removeEventListener(Event.ENTER_FRAME, pulse);
			}
			if (stream && video) {
				videoContainer.removeChild(video);
				video = null;
				stream = null;
			}
			connection = new NetConnection();
			connection.client = this;
			connection.addEventListener(NetStatusEvent.NET_STATUS, netStatusHandler, false, 0, true);
			connection.addEventListener(SecurityErrorEvent.SECURITY_ERROR, securityErrorHandler, false, 0, true);
			connection.connect(null);
		}

		public function set videoSmoothing(value:Boolean):void {
			smoothing = value;
			if (video) {
				video.smoothing = smoothing;
			}
		}

		public function pause():void {
			volume = 0;
			stream.pause();
			_isPaused = true;
		}

		public function set looping(value:Boolean):void {
			_looping = value;
		}
	}
}
