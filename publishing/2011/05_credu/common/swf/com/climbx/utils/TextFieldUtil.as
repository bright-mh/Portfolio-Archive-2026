package com.climbx.utils {
	import flash.text.TextFieldAutoSize;	
	import flash.text.TextField;	

	/**
	 * @author Administrator
	 */
	public class TextFieldUtil {
		private static var standardWidth:Number;

		public function TextFieldUtil() {
		}

		public static function appendLinkText(textField:TextField, text:String, link:String, target:String = "_blank"):void {
			textField.htmlText += "<a href='" + link + "' target='" + target + "'>" + text + "</a>";
		}

		public static function removeTextOverflow(textField:TextField, subfix:String = ""):void {
			if(textField.multiline)
				throw new Error("TextFieldUtil.removeTextOverflow error: Property multiline of TextField must not true.");
			if(textField.autoSize != TextFieldAutoSize.NONE)
				throw new Error("TextFieldUtil.removeTextOverflow error: Property autoSize of TextField must be \"none\".");
			
			if(textField.maxScrollH <= 0) return;
			removeTextBy(textField, testOverflow, subfix);
		}

		public static function removeTextByWidth(textField:TextField, width:Number ,subfix:String = ""):void {
			if(textField.multiline)
				throw new Error("TextFieldUtil.removeTextByWidth error: Property multiline of TextField must not true.");
			if(textField.autoSize == TextFieldAutoSize.NONE)
				throw new Error("TextFieldUtil.removeTextByWidth error: Property autoSize of TextField must not \"none\".");
			if(textField.width < width) return;
			standardWidth = width;
			removeTextBy(textField, testWidth, subfix);
		}

		private static function removeTextBy(textField:TextField, testFunction:Function, subfix:String = ""):void {
			textField.appendText(subfix);
			while (testFunction(textField)) {
				var words:Array = textField.text.split("");
				var length:int = words.length;
				words.splice(length - (subfix.length + 1), 1);
				textField.text = words.join("");
			}
		}

		private static function testOverflow(textField:TextField):Boolean {
			return textField.maxScrollH > 0;
		}

		private static function testWidth(textField:TextField):Boolean {
			return textField.width > standardWidth;
		}
	}
}
