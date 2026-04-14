package com.climbx.media {

	/**
	 * @author Administrator
	 */
	public interface IMediaController {
		function load(url:String):void;
		function resume():void;
		function stop():void;
		function pause():void;
		function isPaused():Boolean;
		function getDuration():Number;
		function dispose():void;
		function getTime():Number;
		function seek(offset:Number):void;
		function set looping(value:Boolean):void;
		function get looping():Boolean;
		function set volume(value:Number):void;
		function get volume():Number;
	}
}
