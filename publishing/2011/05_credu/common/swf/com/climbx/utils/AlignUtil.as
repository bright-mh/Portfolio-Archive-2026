package com.climbx.utils
{
	import flash.display.DisplayObject;
	import flash.geom.Rectangle;
	
	public class AlignUtil {
		
		public static function alignLeft(target:DisplayObject, bounds:Rectangle, offsetX:Number = 0, snapToPixel:Boolean = true):void {
			target.x = snapToPixel ? Math.round(bounds.x) : bounds.x;
			target.x += offsetX;
		}
		
		public static function alignRight(target:DisplayObject, bounds:Rectangle, offsetX:Number = 0, snapToPixel:Boolean = true):void {
			var rightX:Number = bounds.width - target.width + bounds.x;
			
			target.x = snapToPixel ? Math.round(rightX) : rightX;
			target.x -= offsetX;
		}
		
		public static function alignTop(target:DisplayObject, bounds:Rectangle, offsetY:Number = 0, snapToPixel:Boolean = true):void {
			target.y = snapToPixel ? Math.round(bounds.y) : bounds.y;
			target.y += offsetY;
		}
		
		public static function alignBottom(target:DisplayObject, bounds:Rectangle, offsetY:Number = 0, snapToPixel:Boolean = true):void {
			var bottomY:Number = bounds.height - target.height + bounds.y;
			
			target.y = snapToPixel ? Math.round(bottomY) : bottomY;
			target.y -= offsetY;
		}
		
		public static function alignCenter(target:DisplayObject, bounds:Rectangle, offsetX:Number = 0, snapToPixel:Boolean = true):void {
			var targetBounds:Rectangle = target.getBounds(target.parent);
			var dx:Number = (bounds.x + bounds.width * .5) - (targetBounds.x + targetBounds.width * .5);
			
			target.x += snapToPixel ? Math.round(dx) : dx;
			target.x += offsetX;
		}
		
		public static function alignMiddle(target:DisplayObject, bounds:Rectangle, offsetY:Number = 0, snapToPixel:Boolean = true):void {
			var targetBounds:Rectangle = target.getBounds(target.parent);
			var dy:Number = (bounds.y + bounds.height * .5) - (targetBounds.y + targetBounds.height * .5);

			target.y += snapToPixel ? Math.round(dy) : dy;
			target.x += offsetY;
		}
		
		public static function alignCenterMiddle(target:DisplayObject, bounds:Rectangle, offsetX:Number = 0, offsetY:Number = 0, snapToPixel:Boolean = true):void {
			AlignUtil.alignCenter(target, bounds, offsetX, snapToPixel);
			AlignUtil.alignMiddle(target, bounds, offsetY, snapToPixel);
		}
	}
}