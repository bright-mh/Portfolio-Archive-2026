package com.climbx.net {
	import flash.net.URLRequest;
	import flash.net.URLRequestHeader;
	import flash.net.URLRequestMethod;
	import flash.utils.ByteArray;
	import flash.utils.Endian;

	/**
	 * @author mediatribe
	 */
	public class MultipartFormDataFactory {
		private var fileData : ByteArray;
		private var fieldNames : Array;

		public function MultipartFormDataFactory() {
		}

		public function addFileData(fileName : String, byteArray : ByteArray, fieldName : String = "Filedata") : void {
			if(fileData == null || fieldNames == null) {
				fileData = new ByteArray();
				fieldNames = [];
			}
			
			if (fieldNames.indexOf(fieldName) != -1)
				throw new Error("MultipartFormDataFactory error: UploadFiledata with fieldName \"" + fieldName + "\" has already been added.");
			fieldNames.push(fieldName);
			
			var i : int;
			var bytes : String;
			
			//add Filedata
			fileData = BOUNDARY(fileData);
			fileData = LINEBREAK(fileData);
			bytes = 'Content-Disposition: form-data; name="' + fieldName + '"; filename="';
			for ( i = 0;i < bytes.length; i++ ) {
				fileData.writeByte(bytes.charCodeAt(i));
			}
			fileData.writeUTFBytes(fileName);
			fileData = QUOTATIONMARK(fileData);
			fileData = LINEBREAK(fileData);
			bytes = 'Content-Type: application/octet-stream';
			for ( i = 0;i < bytes.length; i++ ) {
				fileData.writeByte(bytes.charCodeAt(i));
			}
			fileData = LINEBREAK(fileData);
			fileData = LINEBREAK(fileData);
			fileData.writeBytes(byteArray, 0, byteArray.length);
			fileData = LINEBREAK(fileData);
		}

		public function createRequest(parameters : Object = null) : URLRequest {
			if(fileData == null)
				throw new Error("MultipartFormDataFactory error: FileData is not added.");
			var request : URLRequest = new URLRequest();
			request.contentType = 'multipart/form-data; boundary=' + getBoundary();
			request.method = URLRequestMethod.POST;
			request.data = getPostData(parameters);
			request.requestHeaders.push(new URLRequestHeader('Cache-Control', 'no-cache'));
			return request;
		}

		private function getPostData(parameters : Object = null) : ByteArray {
			var i : int;
			var bytes : String;

			var postData : ByteArray = new ByteArray();
			postData.endian = Endian.BIG_ENDIAN;

			//add Filename to parameters
			if(parameters == null) {
				parameters = new Object();
			}
			//parameters.Filename = fileName;

			//add parameters to postData
			for(var name:String in parameters) {
				postData = BOUNDARY(postData);
				postData = LINEBREAK(postData);
				bytes = 'Content-Disposition: form-data; name="' + name + '"';
				for ( i = 0;i < bytes.length; i++ ) {
					postData.writeByte(bytes.charCodeAt(i));
				}
				postData = LINEBREAK(postData);
				postData = LINEBREAK(postData);
				postData.writeUTFBytes(parameters[name]);
				postData = LINEBREAK(postData);
			}

			//add Filedata to postData
			postData.writeBytes(fileData);
			fileData = null;
			fieldNames = null;

			//add upload filed to postData
			postData = LINEBREAK(postData);
			postData = BOUNDARY(postData);
			postData = LINEBREAK(postData);
			bytes = 'Content-Disposition: form-data; name="Upload"';
			for ( i = 0;i < bytes.length; i++ ) {
				postData.writeByte(bytes.charCodeAt(i));
			}
			postData = LINEBREAK(postData);
			postData = LINEBREAK(postData);
			bytes = 'Submit Query';
			for ( i = 0;i < bytes.length; i++ ) {
				postData.writeByte(bytes.charCodeAt(i));
			}
			postData = LINEBREAK(postData);

			//closing boundary
			postData = BOUNDARY(postData);
			postData = DOUBLEDASH(postData);

			return postData;
		}

		/**
		 * Boundary used to break up different parts of the http POST body
		 */
		private static var _boundary : String = "";

		/**
		 * Get the boundary for the post.
		 * Must be passed as part of the contentType of the UrlRequest
		 */
		public static function getBoundary() : String {

			if(_boundary.length == 0)
				for (var i : int = 0;i < 0x20; i++ )
					_boundary += String.fromCharCode(int(97 + Math.random() * 25));
			return _boundary;
		}

		/**
		 * Add a boundary to the PostData with leading doubledash
		 */
		private static function BOUNDARY(p : ByteArray) : ByteArray {
			var l : int = getBoundary().length;

			p = DOUBLEDASH(p);
			for (var i : int = 0;i < l; i++ ) 
				p.writeByte(_boundary.charCodeAt(i));
			return p;
		}

		/**
		 * Add one linebreak
		 */
		private static function LINEBREAK(p : ByteArray) : ByteArray {
			p.writeShort(0x0d0a);
			return p;
		}

		/**
		 * Add quotation mark
		 */
		private static function QUOTATIONMARK(p : ByteArray) : ByteArray {
			p.writeByte(0x22);
			return p;
		}

		/**
		 * Add Double Dash
		 */
		private static function DOUBLEDASH(p : ByteArray) : ByteArray {
			p.writeShort(0x2d2d);
			return p;
		}
	}
}
