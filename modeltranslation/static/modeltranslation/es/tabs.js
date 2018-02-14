const BLOCK_TABS = 'tabs';


class Tab {
    constructor(node, first=false) {
        this.tab = node;

        this.add_event();
        if(first) {
            this.hide_all_fields();
            this.deactivate_all_tabs();
            this.activate_tab();
        }
    }

    add_event() {
        this.tab.addEventListener('click', (event) => {
            this.hide_all_fields();
            this.deactivate_all_tabs();
            this.activate_tab();
        });
    }

    hide_all_fields() {
        [].forEach.call(languages, (language) => {
            let fieldsets = document.querySelectorAll('div[class*="_' + language + '"]');
            [].forEach.call(fieldsets, (fieldset) => {
                fieldset.classList.add('non-active-language');
            });
        });
    }

    deactivate_all_tabs() {
        let tabs = document.querySelectorAll('.tabs__tab');
        [].forEach.call(tabs, (tab) => {
            tab.classList.remove('active');
        });
    }

    activate_tab() {
        this.tab.classList.add('active');
        let fieldsets = document.querySelectorAll('div[class*="_' + this.tab.dataset.lang + '"]');
        [].forEach.call(fieldsets, (fieldset) => {
            fieldset.classList.remove('non-active-language');
        });
    }
};



document.addEventListener("DOMContentLoaded",function(){
    let tabs = document.querySelectorAll('.tabs__tab');
    [].forEach.call(tabs, (tab, index) => {
        new Tab(tab, first=(index === 0));
    });
});
