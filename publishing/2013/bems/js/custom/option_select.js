/**
	open select for BEMS
	2013-11-29 처음 작성
	bems 에서 검색 조건을 선택하기 위한 모달팝업창을 위한 스크립트
*/

var bemsSelectList = {
  gId: null,
  selector: "", // 적용하고자 하는 div 의 아이디
  type: "", // 01 : single select, 02 : multi select
  selected: null, // 선택된 item이 index. default : null
  handler: "onClickData", // item을 클릭할 때 실행 시킬 함수의 이름

  onOff: function (onOff) {
    if (onOff == 1) jQuery(selector).addClass("on");
    else jQuery(selector).removeClass("on");
  },

  // clear : 해당 데이터를 클리어 한다.
  clear: function (dName) {
    this.data = null;
    this.retrieve(dName);
  },

  // 해당 데이터를 선택하지 않은 것으로 초기화 한다.
  init: function (dName) {
    this.selected = null;
    for (i = 0; i < this.data.length; i++) this.data[i].selected = false;
    this.retrieve(dName);
  },

  // 해당 데이터를 출력한다.
  // dName : 데이터 변수 명.  (** 중요)
  retrieve: function (dName) {
    jQuery("#" + this.selector).empty();
    var targetDiv = "#" + this.selector;
    var targetClass = "." + this.selector;

    if (this.type == 01 && this.data) // multi select 가 안되는 타입(type == 01) 일경우 아래 수행
    {
      for (i = 0; this.data.length > 0 && i < this.data.length; i++) {
        if (this.selected != null) {
          if (this.data[i].id == this.selected) {
            jQuery(targetDiv).append(
              "<li class='on'><a title='" + this.data[i].title + "'>" + this.data[i].title + "</a></li>",
            );
          } else {
            jQuery(targetDiv).append(
              "<li><span title='" + this.data[i].title + "'>" + this.data[i].title + "</span></li>",
            );
          }
        } else {
          jQuery(targetDiv).append(
            "<li><a href='javascript:" +
              this.handler +
              '("' +
              this.selector +
              '",' +
              this.data[i].id +
              ', "' +
              dName +
              "\")' title='" +
              this.data[i].title +
              "'>" +
              this.data[i].title +
              "</a></li>",
          );
        }
      }
    } else if (this.type == 02) // multi select 가 되는 타입(type==02) 일경우 아래 수행
    {
      // 레이어 초기화
      var objLen = jQuery("." + this.selector).length;
      for (i = 0; i < objLen; i++) {
        jQuery(targetClass).eq(i).empty();
      }

      var dataLen = this.data ? this.data.length : 0;
      if (objLen > 1 && dataLen > 0) // 옵션 항목을 넣을 레이어가 2개 이상인 경우
      {
        for (k = 0; k < this.data.length; k++) {
          var eqIdx = this.data[k].eq != null ? this.data[k].eq : Math.floor(k / (dataLen / objLen), 0);

          // 옵션의 구분이 title/item 인 경우에 해당하는 css 클래스 적용
          if (this.data[k].gubun == "title") {
            jQuery(targetClass)
              .eq(eqIdx)
              .append(
                "<li class='listTitle'><span title='" + this.data[k].title + "'>" + this.data[k].title + "</span></li>",
              );
          } else {
            if (this.data[k].selected == true) {
              jQuery(targetClass)
                .eq(eqIdx)
                .append("<li><span title='" + this.data[k].title + "'>" + this.data[k].title + "</span></li>");
            } else {
              jQuery(targetClass)
                .eq(eqIdx)
                .append(
                  "<li><a href='javascript:" +
                    this.handler +
                    '("' +
                    this.selector +
                    '",' +
                    this.data[k].id +
                    ', "' +
                    dName +
                    "\")' title='" +
                    this.data[k].title +
                    "'>" +
                    this.data[k].title +
                    "</a></li>",
                );
            }
          }
        }
      } else // 옵션 항목을 넣을 레이어가 1개인경우
      {
        for (i = 0; this.data && this.data.length > 0 && i < this.data.length; i++) {
          if (this.data[i] != null) {
            if (this.data[i].gubun == "title") {
              jQuery(targetDiv).append(
                "<li class='listTitle'><span title='" + this.data[i].title + "'>" + this.data[i].title + "</span></li>",
              );
            } else {
              if (this.data[i].selected == true) {
                jQuery(targetDiv).append(
                  "<li><span title='" + this.data[i].title + "'>" + this.data[i].title + "</span></li>",
                );
              } else {
                jQuery(targetDiv).append(
                  "<li><a href='javascript:" +
                    this.handler +
                    '("' +
                    this.selector +
                    '",' +
                    this.data[i].id +
                    ', "' +
                    dName +
                    "\")' title='" +
                    this.data[i].title +
                    "'>" +
                    this.data[i].title +
                    "</a></li>",
                );
              }
            }
          }
        }
      }
    } else if (this.type == 03) // Multi select & 재선택이 가능한 타입
    {
      for (i = 0; this.data.length > 0 && i < this.data.length; i++) {
        if (this.selected != null) {
          if (this.data[i].id == this.selected) {
            jQuery(targetDiv).append("<li><span>" + this.data[i].title + "</span></li>");
          } else {
            jQuery(targetDiv).append(
              "<li><a href='javascript:" +
                this.handler +
                '("' +
                this.selector +
                '",' +
                this.data[i].id +
                ', "' +
                dName +
                "\")' title='" +
                this.data[i].title +
                "'>" +
                this.data[i].title +
                "</a></li>",
            );
          }
        } else {
          jQuery(targetDiv).append(
            "<li><a href='javascript:" +
              this.handler +
              '("' +
              this.selector +
              '",' +
              this.data[i].id +
              ', "' +
              dName +
              "\")' title='" +
              this.data[i].title +
              "'>" +
              this.data[i].title +
              "</a></li>",
          );
        }
      }
    } else // type 이 01 나 02 가 아닌 경우
    {
    }
  },
  data: null, // 데이터를 저장할 변수
};

/**
		onClickData :  레이어 내 옵션을 클릭할 경우 실행되는 함수. 
		parameter:
			gIdx: 그룹 IDX. Layer 의 ID  명을 써 준다. 
			idx : 선택되어지는 옵션의 idx. idx는 순차적인 번호를 사용해야 함. 
			dName : 데이터 변수의 이름						
*/

function onClickData(gIdx, idx, dName) {
  try {
    var obj = eval(dName);
    if (obj.type == 01 || obj.type == 03) {
      obj.selected = idx;
    } else if (obj.type == 02) {
      obj.data[idx].selected = true;
    }
    obj.retrieve(dName);

    if (dName == "data1") {
      //
      // data1 을 선택한 경우에 수행할 내용을 작성
      // 실제 데이터를 불러와서 다음 항목에 옵션들을 채우는 작업은 여기에 작성함.
      //
      /**  
				데이터 형식 : 

				id : 순서
				eq : 레이어 순서 (두개 이상일 경우, 0부터 시작)
				gubun : title-제목, item-항목
				selected : 초기에 선택이 되어있는지 여부
				title : 아이템 표시 text

			**/
    }

    if (dName == "data2") // data1 을 선택한 경우에 수행할 내용을 작성
    {
    }
  } catch (e) {
    alert(e);
  }
}

function addItem(gIdx, idx, dName) {
  var obj = eval(dName);
  if (obj.type == 01) {
    obj.selected = idx;
  } else if (obj.type == 02) {
    obj.data[idx].selected = true;
  }
  obj.retrieve(dName);
  addItemToDiv(obj.data[idx].title, idx, dName);
}

function removeItem(ref, id, dName) {
  var obj = eval(dName);
  if (obj.data[id].id == id) {
    obj.data[id].selected = false;
    obj.retrieve(dName);
    ref.parent().remove();
  } else {
    ref.parent().remove();
  }
}

function addItemToDiv(title, id, dName) {
  jQuery(".choiceList.clear02").append(
    "<li id='item_" +
      id +
      "'><a class='fl itemDel' onclick='removeItem(jQuery(this), " +
      id +
      ', "' +
      dName +
      "\");'><img src='/html/2014/bems/images/common/btn_popup_close02.gif' alt='닫기' /></a><span class='fl txtStyle'>" +
      title +
      "</span></li>",
  );
  var bh = jQuery(".choiceList").height();
  jQuery(".choiceBox").scrollTop(bh);
}

/**
 *	선택항목 박스를 초기화 하는 함수
 *
 */

function initChoiceBox(obj) {
  if (
    obj.hasClass("on")
  ) // 활성화 되어있는 상태 에서 작동해야 할 내용 작성. 활성화 되어 있는 상태에서 버튼을 누르면 비활성화가 되면서 초기화가 되어야 한다.
  {
    //			obj.removeClass("on");
    deActBtn();
    data3.clear("data3");
    data2.clear("data2");
    data1.init("data1");
    jQuery(".choiceList").empty();
  } else {
    //obj.addClass("on");
    actBtn();
  }
}

/**
 * 초기화 버튼 activation
 */
function actBtn() {
  jQuery("#btnInit").addClass("on");
}
/**
 * 초기화 버튼 deactivation
 */
function deActBtn() {
  jQuery("#btnInit").removeClass("on");
}

// 선택 완료시 실행되는 함수
function confirmData() {
  // 여기에 데이터 확인 시 처리해야 할 내용을 작성
  alert("confirm");
}

var oSelect = {
  openWindow: function (selector) {
    jQuery(selector).css("z-index", "99999");
    var modalOpt = {
      keyboard: false,
    };
    jQuery(selector).modal(modalOpt);
  },
};
