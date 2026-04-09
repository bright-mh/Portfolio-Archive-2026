package com.climbx.media {
	import flash.display.FrameLabel;
	import flash.display.MovieClip;	

	/**
	 * @author mediatribe
	 */
	public class TimelineUtil {
		public function TimelineUtil() {
		}

		public static function isLabelInMovieClip(movieClip:MovieClip, label:String):Boolean {
			var frameLabel:FrameLabel;
			for (var i:int = 0;i < movieClip.currentLabels.length; i++) {
				frameLabel = movieClip.currentLabels[i] as FrameLabel;
				if (frameLabel.name == label) {
					return true;
				}
			}
			return false;
		}

		public static function getFrameFromLabel(movieClip:MovieClip, label:String):int {
			var frameLabel:FrameLabel;
			for (var i:int = 0;i < movieClip.currentLabels.length; i++) {
				frameLabel = movieClip.currentLabels[i] as FrameLabel;
				if (frameLabel.name == label) {
					return frameLabel.frame;
				}
			}
			throw new Error("TimelineController error: Frame label \'" + label + "\' not found in " + movieClip.name);
		}
	}
}