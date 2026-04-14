package com.climbx.loader {
	import flash.text.StyleSheet;
	
	import com.climbx.loader.adapters.URLLoaderAdapter;		

	public class CSSLoader extends AbstractLoader {
		private var css:StyleSheet;

		public function CSSLoader(url:String = "", retries:uint = 3) {
			super(new URLLoaderAdapter(URLLoaderAdapter.TEXT_MODE), url, retries);
		}

		public function getStyleSheet():StyleSheet {
			if (!css) {
				css = new StyleSheet();
				css.parseCSS(String(getLoadedContent()));
			}
			return css;
		}
	}
}
