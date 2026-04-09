package com.climbx.utils {

	/**
	 * @author Administrator
	 */
	public class Paging {
		private var _totalCount : uint = 1;
		private var _currentPage : uint = 1;
		// 보여지는 페이지 번호 개수
		private var _numPages : uint;
		// 한 페이지 당 보여 질 게시물 수
		private var _fetchSize : uint;

		private var _totalPage : uint;
		private var _prevEnabled : Boolean;
		private var _nextEnabled : Boolean;
		private var _startEnabled : Boolean;
		private var _endEnabled : Boolean;
		private var _pages:Array;

		public function Paging(numPages : uint = 10, fetchSize : uint = 10) : void {
			_numPages = numPages;
			_fetchSize = fetchSize;
			update();
		}

		public function get totalCount() : uint {
			return _totalCount;
		}

		public function set totalCount(value : uint) : void {
			if(value < 1) value = 1;
			_totalCount = value;
			update();
		}

		public function get currentPage() : uint {
			return _currentPage;
		}

		public function set currentPage(value : uint) : void { 
			if(value < 1) value = 1;
			_currentPage = value;
			update();
		}

		public function get numPages() : uint {
			return _numPages;
		}

		public function set numPages(value : uint) : void { 
			if(value < 1) value = 1;
			_numPages = value;
			update();
		}

		public function get fetchSize() : uint {
			return _fetchSize;
		}

		public function set fetchSize(value : uint) : void {
			if(value < 1) value = 1;
			var total:Number = _fetchSize * _currentPage;
			_currentPage = Math.ceil(total / value);
			_fetchSize = value;
			update();
		}

		public function get totalPage() : uint {
			return _totalPage;
		}

		public function get prevEnabled() : Boolean {
			return _prevEnabled;
		}

		public function get nextEnabled() : Boolean {
			return _nextEnabled;
		}

		public function get startEnabled() : Boolean {
			return _startEnabled;
		}

		public function get endEnabled() : Boolean {
			return _endEnabled;
		}
		
		public function getPages():Array {
			return _pages.concat();
		}
		
		private function update():void {
			_totalPage = Math.ceil(_totalCount / _fetchSize);
			
			if(_currentPage > _totalPage)
				_currentPage = _totalPage;
			
			var prev:Number = _currentPage - (((_currentPage - 1) % _numPages) + 1);
			var next:Number = prev + _numPages + 1;
			
			_prevEnabled = prev > 0;
			_nextEnabled = _totalPage >= next;
			_startEnabled = _currentPage != 1;
			_endEnabled = _currentPage != _totalPage;
			
			_pages = [];
			for(var i:int = 1 + prev; i < next && i <= _totalPage; i++) {
				_pages.push(i);
			}
		}
	}
}
