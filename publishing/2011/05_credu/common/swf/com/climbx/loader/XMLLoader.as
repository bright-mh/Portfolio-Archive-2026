package com.climbx.loader {
	import com.climbx.loader.adapters.URLLoaderAdapter;		

	public class XMLLoader extends AbstractLoader {

		public function XMLLoader(url:String = "", retries:uint = 3) {
			super(new URLLoaderAdapter(URLLoaderAdapter.TEXT_MODE), url, retries);
		}

		public function getXML():XML {
			return XML(getLoadedContent());
		}
	}
}
