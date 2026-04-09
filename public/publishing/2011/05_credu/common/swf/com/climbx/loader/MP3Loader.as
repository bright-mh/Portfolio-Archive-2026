package com.climbx.loader {
	import flash.media.Sound;
	
	import com.climbx.loader.adapters.SoundLoaderAdapter;		

	public class MP3Loader extends AbstractLoader {

		public function MP3Loader(url:String = "", retries:uint = 3) {
			super(new SoundLoaderAdapter(), url, retries);
		}

		public function getSound():Sound {
			return getLoadedContent() as Sound;
		}
	}
}
