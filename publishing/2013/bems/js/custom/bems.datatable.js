// JavaScript Document	// Set the classes that TableTools uses to something suitable for Bootstrap
$.extend(true, $.fn.DataTable.TableTools.classes, {
  container: "btn-group",
  buttons: {
    normal: "btn",
    disabled: "btn disabled",
  },
  collection: {
    container: "DTTT_dropdown dropdown-menu",
    buttons: {
      normal: "",
      disabled: "disabled",
    },
  },
});

// Have the collection use a bootstrap compatible dropdown
$.extend(true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
  collection: {
    container: "ul",
    button: "li",
    liner: "a",
  },
});

/* Default class modification */
$.extend($.fn.dataTableExt.oStdClasses, {
  sWrapper: "dataTables_wrapper form-inline",
});

/* API method to get paging information 
	페이징 표시 관련
	*/
$.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
  return {
    iStart: oSettings._iDisplayStart,
    iEnd: oSettings.fnDisplayEnd(),
    iLength: oSettings._iDisplayLength,
    iTotal: oSettings.fnRecordsTotal(),
    iFilteredTotal: oSettings.fnRecordsDisplay(),
    iPage: oSettings._iDisplayLength === -1 ? 0 : Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
    iTotalPages:
      oSettings._iDisplayLength === -1 ? 0 : Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength),
  };
};

/* Bootstrap style pagination control */
$.extend($.fn.dataTableExt.oPagination, {
  bootstrap: {
    fnInit: function (oSettings, nPaging, fnDraw) {
      var oLang = oSettings.oLanguage.oPaginate;
      var fnClickHandler = function (e) {
        e.preventDefault();
        if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
          fnDraw(oSettings);
        }
      };

      $(nPaging)
        .addClass("pagination")
        .append(
          "<ul>" +
            '<li class="prev disabled"><a href="#">이전</a></li>' +
            '<li class="next disabled"><a href="#">다음</a></li>' +
            "</ul>",
        );
      var els = $("a", nPaging);
      $(els[0]).bind("click.DT", { action: "previous" }, fnClickHandler);
      $(els[1]).bind("click.DT", { action: "next" }, fnClickHandler);
    },

    fnUpdate: function (oSettings, fnDraw) {
      var iListLength = 5;
      var oPaging = oSettings.oInstance.fnPagingInfo();
      var an = oSettings.aanFeatures.p;
      var i,
        ien,
        j,
        sClass,
        iStart,
        iEnd,
        iHalf = Math.floor(iListLength / 2);

      if (oPaging.iTotalPages < iListLength) {
        iStart = 1;
        iEnd = oPaging.iTotalPages;
      } else if (oPaging.iPage <= iHalf) {
        iStart = 1;
        iEnd = iListLength;
      } else if (oPaging.iPage >= oPaging.iTotalPages - iHalf) {
        iStart = oPaging.iTotalPages - iListLength + 1;
        iEnd = oPaging.iTotalPages;
      } else {
        iStart = oPaging.iPage - iHalf + 1;
        iEnd = iStart + iListLength - 1;
      }

      for (i = 0, ien = an.length; i < ien; i++) {
        // Remove the middle elements
        $("li:gt(0)", an[i]).filter(":not(:last)").remove();

        // Add the new list items and their event handlers
        for (j = iStart; j <= iEnd; j++) {
          sClass = j == oPaging.iPage + 1 ? 'class="active"' : "";
          $("<li " + sClass + '><a href="#">' + j + "</a></li>")
            .insertBefore($("li:last", an[i])[0])
            .bind("click", function (e) {
              e.preventDefault();
              oSettings._iDisplayStart = (parseInt($("a", this).text(), 10) - 1) * oPaging.iLength;
              fnDraw(oSettings);
            });
        }

        // Add / remove disabled classes from the static elements
        if (oPaging.iPage === 0) {
          $("li:first", an[i]).addClass("disabled");
        } else {
          $("li:first", an[i]).removeClass("disabled");
        }

        if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
          $("li:last", an[i]).addClass("disabled");
        } else {
          $("li:last", an[i]).removeClass("disabled");
        }
      }
    },
  },
});

/* Table initialisation 
	lfrtip
	l : records per page, 
	f : search
	r : 
	t : 테이블 내용 
	i : showing 1 to 10 of 48 entries
	p : paging
	*/
$(document).ready(function () {
  $(".table_id_4").dataTable({
    sDom: '<"clear">fTtip',
    sPaginationType: "bootstrap",
    oLanguage: {
      sLengthMenu: "_MENU_ records per page",
    },
    iDisplayLength: 10, // 한 페이지에 보여질 레코드갯수
    oTableTools: {
      sSwfPath: "/swf/copy_csv_xls_pdf.swf",
      aButtons: [
        {
          sExtends: "copy",
          sButtonText: "복사",
        },
        {
          sExtends: "print",
          sButtonText: "인쇄",
        },
        {
          sExtends: "collection",
          sButtonText: "저장",
          aButtons: ["csv", "xls", "pdf"],
        },
      ],
    },
  });
  jQuery(".table_id_4_filter").find("input").attr("placeholder", "검색");

  $(".table_id_1").dataTable({
    sDom: '<"clear">tip',
    sPaginationType: "bootstrap",
    oLanguage: {
      sLengthMenu: "_MENU_ records per page",
    },
    iDisplayLength: 10, // 한 페이지에 보여질 레코드갯수
    oTableTools: {
      sSwfPath: "/swf/copy_csv_xls_pdf.swf",
      aButtons: [
        {
          sExtends: "copy",
          sButtonText: "복사",
        },
        {
          sExtends: "print",
          sButtonText: "인쇄",
        },
        {
          sExtends: "collection",
          sButtonText: "저장",
          aButtons: ["csv", "xls", "pdf"],
        },
      ],
    },
  });

  $(".dataTables_wrapper").addClass("clear02"); //float clear
  $(".dataTable").attr("style", "width:100%;");

  // 2014-02-14 데이터테이블 내 칼럼이 늘어날 경우 스크롤 생김
  var oTable = $(".table_id_5").dataTable({
    sDom: '<"clear">fTtip',
    sPaginationType: "bootstrap",
    oLanguage: {
      sLengthMenu: "_MENU_ records per page",
    },
    iDisplayLength: 10, // 한 페이지에 보여질 레코드갯수
    oTableTools: {
      sSwfPath: "/swf/copy_csv_xls_pdf.swf",
      aButtons: [
        {
          sExtends: "copy",
          sButtonText: "복사",
        },
        {
          sExtends: "print",
          sButtonText: "인쇄",
        },
        {
          sExtends: "collection",
          sButtonText: "저장",
          aButtons: ["csv", "xls", "pdf"],
        },
      ],
    },
    fnDrawCallback: function (oSettings) {
      jQuery(".dataTable").wrap("<div style='width:100%; position:relative; overflow-x:scroll;' />");
    },
  });
  jQuery(".table_id_5_filter").find("input").attr("placeholder", "검색");
});
