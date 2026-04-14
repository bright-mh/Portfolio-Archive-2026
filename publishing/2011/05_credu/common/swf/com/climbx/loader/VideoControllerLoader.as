package com.climbx.loader {
	import flash.media.Video;	
	
	import com.climbx.loader.adapters.VideoControllerLoaderAdapter;
	import com.climbx.media.VideoController;		

	public class VideoControllerLoader extends AbstractLoader {

		public function VideoControllerLoader(url:String = "", retries:uint = 3) {
			super(new VideoControllerLoaderAdapter(VideoControllerLoaderAdapter.LOAD_MODE), url, retries);
		}
		
		public function getVideo():Video {
			return getVideoController().getVideo();
		}

		public function getVideoController():VideoController {
			return getLoadedContent() as VideoController;
		}
	}
}
