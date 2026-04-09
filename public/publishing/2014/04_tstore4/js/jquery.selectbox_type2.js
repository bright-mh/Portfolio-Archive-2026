/*!
 * jQuery Selectbox plugin 0.2
 *
 * Copyright 2011-2012, Dimitar Ivanov (http://www.bulgaria-web-developers.com/projects/javascript/selectbox/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * Date: Tue Jul 17 19:58:36 2012 +0300
 */
(function ($, undefined) {
  var PROP_NAME = "selectbox",
    FALSE = false,
    TRUE = true;
  /**
   * Selectbox manager.
   * Use the singleton instance of this class, $.selectbox2, to interact with the select box.
   * Settings for (groups of) select boxes are maintained in an instance object,
   * allowing multiple different settings on the same page
   */
  function Selectbox(n) {
    var n = n;
    this._state = [];
    this._defaults = {
      // Global defaults for all the select box instances
      classHolder: "sbHolder2",
      classHolderDisabled: "sbHolderDisabled",
      classSelector: "sbSelector2",
      classOptions: "sbOptions2",
      classGroup: "sbGroup",
      classSub: "sbSub",
      classDisabled: "sbDisabled",
      classToggleOpen: "sbToggleOpen",
      classToggle: "sbToggle",
      classFocus: "sbFocus",
      speed: 200,
      type: n,
      effect: "slide", // "slide" or "fade"
      onChange: null, //Define a callback function when the selectbox is changed
      onOpen: null, //Define a callback function when the selectbox is open
      onClose: null, //Define a callback function when the selectbox is closed
    };
  }

  $.extend(Selectbox.prototype, {
    /**
     * Is the first field in a jQuery collection open as a selectbox
     *
     * @param {Object} target
     * @return {Boolean}
     */
    _isOpenSelectbox: function (target) {
      if (!target) {
        return FALSE;
      }
      var inst = this._getInst(target);
      return inst.isOpen;
    },
    /**
     * Is the first field in a jQuery collection disabled as a selectbox
     *
     * @param {HTMLElement} target
     * @return {Boolean}
     */
    _isDisabledSelectbox: function (target) {
      if (!target) {
        return FALSE;
      }
      var inst = this._getInst(target);
      return inst.isDisabled;
    },
    /**
     * Attach the select box to a jQuery selection.
     *
     * @param {HTMLElement} target
     * @param {Object} settings
     */
    _attachSelectbox: function (target, settings, n) {
      if (this._getInst(target)) {
        return FALSE;
      }
      var $target = $(target),
        self = this,
        inst = self._newInst($target),
        d,
        subD,
        sbHolder,
        sbSelector,
        sbToggle,
        sbOptions,
        s = FALSE,
        optGroup = $target.find("optgroup"),
        opts = $target.find("option"),
        olen = opts.length,
        type = n;

      $target.attr("sb", inst.uid);

      $.extend(inst.settings, self._defaults, settings);
      self._state[inst.uid] = FALSE;
      $target.hide();

      function closeOthers() {
        var key,
          sel,
          uid = this.attr("id").split("_")[1];
        for (key in self._state) {
          if (key !== uid) {
            if (self._state.hasOwnProperty(key)) {
              sel = $("select[sb='" + key + "']")[0];
              if (sel) {
                self._closeSelectbox(sel);
              }
            }
          }
        }
      }

      sbHolder = $("<div>", {
        id: "sbHolder" + type + "_" + inst.uid,
        class: inst.settings.classHolder,
        tabindex: $target.attr("tabindex"),
        mouseover: function (e) {
          if (inst.isOpen == FALSE) {
            sbSelector.css({ color: "#333", "text-indent": "11px" });
            $(this).css({
              background: 'url("../img/common/select_bg02.png") no-repeat left top',
              "z-index": "1",
              width: "59px",
              "margin-left": "-1px",
            });
          }
        },
        mouseleave: function (e) {
          if (inst.isOpen == FALSE) {
            sbSelector.css({ color: "#aaa", "text-indent": "10px" });
            $(this).css({
              background: 'url("../img/common/select_bg02_off.png") no-repeat left top',
              "z-index": "0",
              width: "58px",
              "margin-left": "0px",
            });
          } else {
            sbSelector.css({ color: "#333", "text-indent": "11px" });
            $(this).css({
              background: 'url("../img/common/select_bg02.png") no-repeat left top',
              "z-index": "1",
              width: "59px",
              "margin-left": "-1px",
            });
          }
        },
      });

      sbSelector = $("<a>", {
        id: "sbSelector" + type + "_" + inst.uid,
        href: "#",
        class: inst.settings.classSelector,
        click: function (e) {
          if ($("#yearSelect").length > 0) {
            $("#yearSelect").selectbox("close");
          }
          if ($("#monthSelect").length > 0) {
            $("#monthSelect").selectbox2("close");
          }
          if ($("#daySelect").length > 0) {
            $("#daySelect").selectbox3("close");
          }
          if ($("#weekSelect").length > 0) {
            $("#weekSelect").selectbox4("close");
          }

          closeOthers.apply($(this), []);
          var uid = $(this).attr("id").split("_")[1];
          if (self._state[uid]) {
            self._closeSelectbox(target);
          } else {
            self._openSelectbox(target);
          }
          e.preventDefault();
        },
      });

      sbToggle = $("<a>", {
        id: "sbToggle" + type + "_" + inst.uid,
        href: "#",
        class: inst.settings.classToggle,
        click: function (e) {
          if ($("#yearSelect").length > 0) {
            $("#yearSelect").selectbox("close");
          }
          if ($("#monthSelect").length > 0) {
            $("#monthSelect").selectbox2("close");
          }
          if ($("#daySelect").length > 0) {
            $("#daySelect").selectbox3("close");
          }
          if ($("#weekSelect").length > 0) {
            $("#weekSelect").selectbox4("close");
          }

          e.preventDefault();
          closeOthers.apply($(this), []);
          var uid = $(this).attr("id").split("_")[1];
          if (self._state[uid]) {
            self._closeSelectbox(target);
          } else {
            self._openSelectbox(target);
          }
        },
      });
      sbToggle.appendTo(sbHolder);

      if (type != 4) {
        sbOptions = $("<ul>", {
          id: "sbOptions" + type + "_" + inst.uid,
          class: inst.settings.classOptions,
          css: {
            display: "none",
          },
        });
      } else {
        sbOptions = $("<ul>", {
          id: "sbOptions" + type + "_" + inst.uid,
          class: inst.settings.classOptions + " noScroll", //style �б�
          css: {
            display: "none",
          },
        });
      }

      d = $("<div>", {
        class: "scrollCon",
        css: {
          background: "#fff",
          border: "1px solid #aaa",
          position: "absolute",
          top: "29px",
          left: "0px",
          height: "179px",
          width: "57px",
          margin: "-1000px 0 0 0",
          overflow: "hidden",
          "z-index": "100",
          padding: "0",
        },
      });
      subD = $("<div>", {
        css: {
          //	"height": "336px"
        },
      });

      $target.children().each(function (i) {
        var that = $(this),
          li,
          config = {};
        if (that.is("option")) {
          getOptions(that);
        } else if (that.is("optgroup")) {
          li = $("<li>");
          $("<span>", {
            text: that.attr("label"),
          })
            .addClass(inst.settings.classGroup)
            .appendTo(li);
          li.appendTo(sbOptions);
          if (that.is(":disabled")) {
            config.disabled = true;
          }
          config.sub = true;
          getOptions(that.find("option"), config);
        }
      });

      function getOptions() {
        var sub = arguments[1] && arguments[1].sub ? true : false,
          disabled = arguments[1] && arguments[1].disabled ? true : false;
        arguments[0].each(function (i) {
          var that = $(this),
            li = $("<li>"),
            child;
          if (that.is(":selected")) {
            sbSelector.text(that.text());
            s = TRUE;
          }
          if ($(this).index() == olen - 1) {
            li.addClass("last");
          }
          if (i === olen - 1) {
            li.addClass("last");
          }
          if (!that.is(":disabled") && !disabled) {
            child = $("<a>", {
              href: "#" + that.val(),
              rel: that.val(),
            })
              .text(that.text())
              .bind("click.sb", function (e) {
                if (e && e.preventDefault) {
                  e.preventDefault();
                }
                var t = sbToggle,
                  $this = $(this),
                  uid = t.attr("id").split("_")[1];
                self._changeSelectbox(target, $this.attr("rel"), $this.text());
                self._closeSelectbox(target);
              })
              .bind("mouseover.sb", function () {
                var $this = $(this);
                $this.parent().siblings().find("a").removeClass(inst.settings.classFocus);
                $this.addClass(inst.settings.classFocus);
              })
              .bind("mouseout.sb", function () {
                $(this).removeClass(inst.settings.classFocus);
              });
            if (sub) {
              child.addClass(inst.settings.classSub);
            }
            if (that.is(":selected")) {
              child.addClass(inst.settings.classFocus);
            }
            child.appendTo(li);
          } else {
            child = $("<span>", {
              text: that.text(),
            }).addClass(inst.settings.classDisabled);
            if (sub) {
              child.addClass(inst.settings.classSub);
            }
            child.appendTo(li);
          }
          li.appendTo(sbOptions);
        });
      }

      if (!s) {
        sbSelector.text(opts.first().text());
      }

      $.data(target, PROP_NAME, inst);

      sbHolder
        .data("uid", inst.uid)
        .bind("keydown.sb", function (e) {
          var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0,
            $this = $(this),
            uid = $this.data("uid"),
            inst = $this.siblings("select[sb='" + uid + "']").data(PROP_NAME),
            trgt = $this.siblings(["select[sb='", uid, "']"].join("")).get(0),
            $f = $this.find("ul").find("a." + inst.settings.classFocus);
          switch (key) {
            case 37: //Arrow Left
            case 38: //Arrow Up
              if ($f.length > 0) {
                var $next;
                $("a", $this).removeClass(inst.settings.classFocus);
                $next = $f.parent().prevAll("li:has(a)").eq(0).find("a");
                if ($next.length > 0) {
                  $next.addClass(inst.settings.classFocus).focus();
                  $("#sbSelector" + type + "_" + uid).text($next.text());
                }
              }
              break;
            case 39: //Arrow Right
            case 40: //Arrow Down
              var $next;
              $("a", $this).removeClass(inst.settings.classFocus);
              if ($f.length > 0) {
                $next = $f.parent().nextAll("li:has(a)").eq(0).find("a");
              } else {
                $next = $this.find("ul").find("a").eq(0);
              }
              if ($next.length > 0) {
                $next.addClass(inst.settings.classFocus).focus();
                $("#sbSelector" + type + "_" + uid).text($next.text());
              }
              break;
            case 13: //Enter
              if ($f.length > 0) {
                self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
              }
              self._closeSelectbox(trgt);
              break;
            case 9: //Tab
              if (trgt) {
                var inst = self._getInst(trgt);
                if (inst /* && inst.isOpen*/) {
                  if ($f.length > 0) {
                    self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
                  }
                  self._closeSelectbox(trgt);
                }
              }
              var i = parseInt($this.attr("tabindex"), 10);
              if (!e.shiftKey) {
                i++;
              } else {
                i--;
              }
              $("*[tabindex='" + i + "']").focus();
              break;
            case 27: //Escape
              self._closeSelectbox(trgt);
              break;
          }
          e.stopPropagation();
          return false;
        })
        .delegate("a", "mouseover", function (e) {
          $(this).addClass(inst.settings.classFocus);
        })
        .delegate("a", "mouseout", function (e) {
          $(this).removeClass(inst.settings.classFocus);
        });

      sbSelector.appendTo(sbHolder);
      sbOptions.appendTo(subD);
      subD.appendTo(d);
      d.appendTo(sbHolder);
      sbHolder.insertAfter($target);

      $([".", inst.settings.classHolder, ", .", inst.settings.classSelector].join("")).mousedown(function (e) {
        e.stopPropagation();
      });
    },
    /**
     * Remove the selectbox functionality completely. This will return the element back to its pre-init state.
     *
     * @param {HTMLElement} target
     */
    _detachSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst) {
        return FALSE;
      }
      var type = inst.settings.type;
      $("#sbHolder" + type + "_" + inst.uid).remove();
      $.data(target, PROP_NAME, null);
      $(target).show();
    },
    /**
     * Change selected attribute of the selectbox.
     *
     * @param {HTMLElement} target
     * @param {String} value
     * @param {String} text
     */
    _changeSelectbox: function (target, value, text) {
      var onChange,
        inst = this._getInst(target);
      if (inst) {
        var type = inst.settings.type;
        onChange = this._get(inst, "onChange");
        $("#sbSelector" + type + "_" + inst.uid).text(text);
      }
      value = value.replace(/\'/g, "\\'");
      $(target)
        .find("option[value='" + value + "']")
        .attr("selected", TRUE);
      if (inst && onChange) {
        onChange.apply(inst.input ? inst.input[0] : null, [value, inst]);
      } else if (inst && inst.input) {
        inst.input.trigger("change");
      }
    },
    /**
     * Enable the selectbox.
     *
     * @param {HTMLElement} target
     */
    _enableSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst || !inst.isDisabled) {
        return FALSE;
      }
      var type = inst.settings.type;
      $("#sbHolder" + type + "_" + inst.uid).removeClass(inst.settings.classHolderDisabled);
      inst.isDisabled = FALSE;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Disable the selectbox.
     *
     * @param {HTMLElement} target
     */
    _disableSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst || inst.isDisabled) {
        return FALSE;
      }
      var type = inst.settings.type;
      $("#sbHolder" + type + "_" + inst.uid).addClass(inst.settings.classHolderDisabled);
      inst.isDisabled = TRUE;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Get or set any selectbox option. If no value is specified, will act as a getter.
     *
     * @param {HTMLElement} target
     * @param {String} name
     * @param {Object} value
     */
    _optionSelectbox: function (target, name, value) {
      var inst = this._getInst(target);
      if (!inst) {
        return FALSE;
      }
      //TODO check name
      inst[name] = value;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Call up attached selectbox
     *
     * @param {HTMLElement} target
     */
    _openSelectbox: function (target) {
      var inst = this._getInst(target);
      //if (!inst || this._state[inst.uid] || inst.isDisabled) {
      if (!inst || inst.isOpen || inst.isDisabled) {
        return;
      }
      var type = inst.settings.type;
      var el = $("#sbOptions" + type + "_" + inst.uid),
        //el = $("#sbOptions2_" + inst.uid),
        viewportHeight = parseInt($(window).height(), 10),
        offset = $("#sbHolder" + type + "_" + inst.uid).offset(),
        scrollTop = $(window).scrollTop(),
        height = el.prev().height(),
        diff = viewportHeight - (offset.top - scrollTop) - height / 2,
        onOpen = this._get(inst, "onOpen");
      el.css({
        //"top": (height-1) + "px",
        top: "0px",
        //	"maxHeight": "150px"
      });

      $("#sbHolder" + type + "_" + inst.uid)
        .find(".scrollCon")
        .slideDown(inst.settings.speed);
      inst.settings.effect === "fade" ? el.fadeIn(inst.settings.speed) : el.slideDown(inst.settings.speed);
      $("#sbToggle" + type + "_" + inst.uid).addClass(inst.settings.classToggleOpen);
      this._state[inst.uid] = TRUE;
      inst.isOpen = TRUE;
      if (onOpen) {
        onOpen.apply(inst.input ? inst.input[0] : null, [inst]);
      }
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Close opened selectbox
     *
     * @param {HTMLElement} target
     */
    _closeSelectbox: function (target) {
      var inst = this._getInst(target);
      //if (!inst || !this._state[inst.uid]) {
      if (!inst || !inst.isOpen) {
        return;
      }
      var type = inst.settings.type;
      var onClose = this._get(inst, "onClose");
      $("#sbHolder" + type + "_" + inst.uid)
        .find(".scrollCon")
        .slideUp(inst.settings.speed, function () {
          $("#sbSelector" + type + "_" + inst.uid).css({ color: "#aaa", "text-indent": "10px" });
          $("#sbHolder" + type + "_" + inst.uid).css({
            background: 'url("../img/common/select_bg02_off.png") no-repeat left top',
            width: "58px",
            "margin-left": "0px",
          });
        });
      inst.settings.effect === "fade"
        ? $("#sbOptions" + type + "_" + inst.uid).fadeOut(inst.settings.speed)
        : $("#sbOptions" + type + "_" + inst.uid).slideUp(inst.settings.speed);
      $("#sbToggle" + type + "_" + inst.uid).removeClass(inst.settings.classToggleOpen);
      this._state[inst.uid] = FALSE;
      inst.isOpen = FALSE;

      if (onClose) {
        onClose.apply(inst.input ? inst.input[0] : null, [inst]);
      }
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Create a new instance object
     *
     * @param {HTMLElement} target
     * @return {Object}
     */
    _newInst: function (target) {
      var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
      return {
        id: id,
        input: target,
        uid: Math.floor(Math.random() * 99999999),
        isOpen: FALSE,
        isDisabled: FALSE,
        settings: {},
      };
    },
    /**
     * Retrieve the instance data for the target control.
     *
     * @param {HTMLElement} target
     * @return {Object} - the associated instance data
     * @throws error if a jQuery problem getting data
     */
    _getInst: function (target) {
      try {
        return $.data(target, PROP_NAME);
      } catch (err) {
        throw "Missing instance data for this selectbox";
      }
    },
    /**
     * Get a setting value, defaulting if necessary
     *
     * @param {Object} inst
     * @param {String} name
     * @return {Mixed}
     */
    _get: function (inst, name) {
      return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
    },
  });

  /**
   * Invoke the selectbox functionality.
   *
   * @param {Object|String} options
   * @return {Object}
   */
  $.fn.selectbox2 = function (options) {
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options == "string" && options == "isDisabled") {
      return $.selectbox2["_" + options + "Selectbox"].apply($.selectbox2, [this[0]].concat(otherArgs));
    }

    if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
      return $.selectbox2["_" + options + "Selectbox"].apply($.selectbox2, [this[0]].concat(otherArgs));
    }

    return this.each(function () {
      typeof options == "string"
        ? $.selectbox2["_" + options + "Selectbox"].apply($.selectbox2, [this].concat(otherArgs))
        : $.selectbox2._attachSelectbox(this, options, 2);
    });
  };
  $.fn.selectbox3 = function (options) {
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options == "string" && options == "isDisabled") {
      return $.selectbox3["_" + options + "Selectbox"].apply($.selectbox3, [this[0]].concat(otherArgs));
    }

    if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
      return $.selectbox3["_" + options + "Selectbox"].apply($.selectbox3, [this[0]].concat(otherArgs));
    }

    return this.each(function () {
      typeof options == "string"
        ? $.selectbox3["_" + options + "Selectbox"].apply($.selectbox3, [this].concat(otherArgs))
        : $.selectbox3._attachSelectbox(this, options, 3);
    });
  };
  $.fn.selectbox4 = function (options) {
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options == "string" && options == "isDisabled") {
      return $.selectbox4["_" + options + "Selectbox"].apply($.selectbox4, [this[0]].concat(otherArgs));
    }

    if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
      return $.selectbox4["_" + options + "Selectbox"].apply($.selectbox4, [this[0]].concat(otherArgs));
    }

    return this.each(function () {
      typeof options == "string"
        ? $.selectbox4["_" + options + "Selectbox"].apply($.selectbox4, [this].concat(otherArgs))
        : $.selectbox4._attachSelectbox(this, options, 4);
    });
  };

  $.selectbox2 = new Selectbox(2); // ID �б�
  $.selectbox3 = new Selectbox(3); // ID �б�
  $.selectbox4 = new Selectbox(4); // ID �б�
  //	$.selectbox2.version = "0.2";
})(jQuery);
