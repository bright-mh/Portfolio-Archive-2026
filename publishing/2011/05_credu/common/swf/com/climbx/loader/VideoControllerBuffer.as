package com.climbx.loader {
	import com.climbx.loader.adapters.VideoControllerLoaderAdapter;
	import com.climbx.media.VideoController;		

	public class VideoControllerBuffer extends AbstractLoader {

		public function VideoControllerBuffer(url:String = "", retries:uint = 3) {
			super(new VideoControllerLoaderAdapter(VideoControllerLoaderAdapter.BUFFER_MODE), url, retries);
		}

		public function getVideoController():VideoController {
			return getLoadedContent() as VideoController;
		}
	}
}
