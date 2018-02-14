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
            [].forEach.call(languages, function (language) {
                var fieldsets = document.querySelectorAll('div[class*="_' + language + '"]');
                [].forEach.call(fieldsets, function (fieldset) {
                    fieldset.classList.add('non-active-language');
                });
            });
        }
    }, {
        key: 'deactivate_all_tabs',
        value: function deactivate_all_tabs() {
            var tabs = document.querySelectorAll('.tabs__tab');
            [].forEach.call(tabs, function (tab) {
                tab.classList.remove('active');
            });
        }
    }, {
        key: 'activate_tab',
        value: function activate_tab() {
            this.tab.classList.add('active');
            var fieldsets = document.querySelectorAll('div[class*="_' + this.tab.dataset.lang + '"]');
            [].forEach.call(fieldsets, function (fieldset) {
                fieldset.classList.remove('non-active-language');
            });
        }
    }]);
    return Tab;
}();



document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll('.tabs__tab');
    [].forEach.call(tabs, function (tab, index) {
        new Tab(tab, first = index === 0);
    });
});
