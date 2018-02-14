var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Tab = function () {
    function Tab(node) {
        var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        classCallCheck(this, Tab);

        this.tab = node;

        this.add_event();
        if (first) {
            this.hide_all_fields();
            this.deactivate_all_tabs();
            this.activate_tab();
        }
    }

    createClass(Tab, [{
        key: 'add_event',
        value: function add_event() {
            var _this = this;

            this.tab.addEventListener('click', function (event) {
                _this.hide_all_fields();
                _this.deactivate_all_tabs();
                _this.activate_tab();
            });
        }
    }, {
        key: 'hide_all_fields',
        value: function hide_all_fields() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = languages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var language = _step.value;

                    var fieldsets = document.querySelectorAll('div[class*="_' + language + '"]');
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = fieldsets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var fieldset = _step2.value;

                            fieldset.classList.add('non-active-language');
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'deactivate_all_tabs',
        value: function deactivate_all_tabs() {
            var tabs = document.querySelectorAll('.tabs__tab');
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var tab = _step3.value;

                    tab.classList.remove('active');
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: 'activate_tab',
        value: function activate_tab() {
            this.tab.classList.add('active');
            var fieldsets = document.querySelectorAll('div[class*="_' + this.tab.dataset.lang + '"]');
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = fieldsets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var fieldset = _step4.value;

                    fieldset.classList.remove('non-active-language');
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }]);
    return Tab;
}();



document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll('.tabs__tab');
    tabs.forEach(function (tab, index) {
        new Tab(tab, first = index === 0);
    });
});
