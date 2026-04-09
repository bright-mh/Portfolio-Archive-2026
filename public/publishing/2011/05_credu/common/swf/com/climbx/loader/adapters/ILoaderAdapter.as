package com.climbx.loader.adapters {
	import flash.events.IEventDispatcher;
	import flash.net.URLRequest;
	import flash.system.LoaderContext;		

	public interface ILoaderAdapter extends IEventDispatcher {

		function load(request:URLRequest, context:LoaderContext = null):void;

		function getBytesTotal():uint;

		function getBytesLoaded():uint;

		function getLoadedContent():Object;

		function dispose():void;
	}
}
