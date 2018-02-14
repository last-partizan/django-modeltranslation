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
        for (let language of languages) {
            let fieldsets = document.querySelectorAll('div[class*="_' + language + '"]');
            for (let fieldset of fieldsets) {
                fieldset.classList.add('non-active-language');
            }
        }
    }

    deactivate_all_tabs() {
        let tabs = document.querySelectorAll('.tabs__tab');
        for(let tab of tabs) {
            tab.classList.remove('active');
        }
    }

    activate_tab() {
        this.tab.classList.add('active');
        let fieldsets = document.querySelectorAll('div[class*="_' + this.tab.dataset.lang + '"]');
        for (let fieldset of fieldsets) {
            fieldset.classList.remove('non-active-language');
        }
    }
};



document.addEventListener("DOMContentLoaded",function(){
    let tabs = document.querySelectorAll('.tabs__tab');
    tabs.forEach((tab, index) => {
        new Tab(tab, first=(index === 0));
    });
});
