package com.climbx.net {
	import flash.display.Stage;
	import flash.external.ExternalInterface;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;	

	/**
	 * @author Administrator
	 */
	public class NetUtil {
		public static const TARGET_BLANK:String = "_blank";
		public static const TARGET_SELF:String = "_self";
		public static const TARGET_PARENT:String = "_parent";
		public static const TARGET_TOP:String = "_top";
		public static const TARGET_JAVASCRIPT:String = "javascript";

		public static function analyzeLink(link:String, target:String = "_blank"):void {
			if (ExternalInterface.available) {
				if(target == TARGET_JAVASCRIPT) {
					ExternalInterface.call(link);
					return;
				}
				try {
					var userAgent:String = getUserAgent();
					if (userAgent.indexOf("firefox") != -1 || (userAgent.indexOf("msie") != -1 && uint(userAgent.substr(userAgent.indexOf("msie") + 5, 3)) >= 7))
						ExternalInterface.call("window.open", link, target);
					else
						navigateToURL(new URLRequest(link), target);
				}
                catch (e:Error) {
					navigateToURL(new URLRequest(link), target);
				}
			} else {
				if(target == TARGET_JAVASCRIPT)
					throw new Error("NetUtil.analyzeLink error: ExternalInterface is not available");
				else
					navigateToURL(new URLRequest(link), target);
			}
		}

		public static function getUserAgent():String {
			return (ExternalInterface.call("function(){ return navigator.userAgent; }") as String).toLowerCase();
		}

		public static function isDebugPlayer():Boolean {
			var stack:String;
			try {
				throw new Error("debug player test");
			}
	            catch (e:Error) {
				stack = e.getStackTrace();
			}
			return stack != null;
		}

		public static function isOnline(stage:Stage):Boolean {
			var url:String = stage.loaderInfo.url;
			var protocol:String = url.slice(0, url.indexOf("://"));
			return protocol != "file";
		}
		
		public static function createMultipartPostRequest():URLRequest {
			var request:URLRequest = new URLRequest();
			return request;
		}
	}
}
