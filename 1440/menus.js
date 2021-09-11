class Menus {
    constructor(tags, tagTexts, tabs) {
        this.tags = {...tags};
        this.tagTexts = {...tagTexts};
        this.tabs = {...tabs};
        this.screenTabs = {
            home: this.isMobile() ? this.tabs.home.mobile : this.tabs.home.desktop,
            lite: this.isMobile() ? this.tabs.lite.mobile : this.tabs.lite.desktop,
        };
        this.tab = 'home';
        this.tag = 0;
        this.colors = {
            home: '#f08d46',
            lite: '#b0cb6c',
            std: 'white'
        };
        this.showCurrentTab = this.showCurrentTab.bind(this);
        this.showCurrentTag = this.showCurrentTag.bind(this);
        this.changeScreenTabs = this.changeScreenTabs.bind(this);
        this.setCurrentTab = this.setCurrentTab.bind(this);

        this.tagTexts.home.forEach(tag => {
            tag.style.pointerEvents = 'none';
            tag.firstElementChild.style.transition = 'color .25s';
        });
        this.tagTexts.lite.forEach(tag => {
            tag.style.pointerEvents = 'none';
            tag.firstElementChild.style.transition = 'color .25s';
        });

        this.tags.home.forEach((tag, i) => {
            tag.style.cursor = 'pointer';
            tag.firstElementChild.style.transition = 'backgroundColor .25s';
            tag.addEventListener('click', () => {
                this.setCurrentTab('home');
                this.setCurrentTag(i);
            });
        });
        this.tags.lite.forEach((tag, i) => {
            tag.style.cursor = 'pointer';
            tag.firstElementChild.style.transition = 'backgroundColor .25s';
            tag.addEventListener('click', () => {
                this.setCurrentTab('lite');
                this.setCurrentTag(i);
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            this.showCurrentTab();
            this.showCurrentTag();
        });

        window.addEventListener('resize', () => this.changeScreenTabs());

        this.changeScreenTabs();
    }

    changeScreenTabs = function() {
        if (this.isMobile()) {
            this.tabs.home.desktop.classList.add('hidden-menu');
            this.tabs.lite.desktop.classList.add('hidden-menu');
            this.screenTabs.home = this.tabs.home.mobile;
            this.screenTabs.lite = this.tabs.lite.mobile;
        } else {
            this.tabs.home.mobile.classList.add('hidden-menu');
            this.tabs.lite.mobile.classList.add('hidden-menu');
            this.screenTabs.home = this.tabs.home.desktop;
            this.screenTabs.lite = this.tabs.lite.desktop;
        }
        this.showCurrentTab();
    }

    isMobile = function() {
        return $(window).width() < 980;
    }

    setCurrentTab = function(newTab) {
        this.tab = newTab;
        this.showCurrentTab();
    }

    setCurrentTag = function(index) {
        this.tag = index;
        this.showCurrentTag();
    }

    showCurrentTag = function() {
        this.tagTexts.home.forEach((tag, i) => {
            const isColored = this.tab === 'home' && this.tag === i;
            tag.firstElementChild.style.color = isColored ? this.colors.std : this.colors.home;
        });
        this.tagTexts.lite.forEach((tag, i) => {
            const isColored = this.tab === 'lite' && this.tag === i;
            tag.firstElementChild.style.color = isColored ? this.colors.std : this.colors.lite;
        });
        this.tags.home.forEach((tag, i) => {
            const isColored = this.tab === 'home' && this.tag === i;
            tag.firstElementChild.style.backgroundColor = isColored ? this.colors.home : this.colors.std;
        });
        this.tags.lite.forEach((tag, i) => {
            const isColored = this.tab === 'lite' && this.tag === i;
            tag.firstElementChild.style.backgroundColor = isColored ? this.colors.lite : this.colors.std;
        });
    }

    showCurrentTab = function() {
        if (this.tab === 'home') {
            this.screenTabs.home.classList.remove('hidden-menu');
            this.screenTabs.lite.classList.add('hidden-menu');
        } else {
            this.screenTabs.home.classList.add('hidden-menu');
            this.screenTabs.lite.classList.remove('hidden-menu');
        }
    }
}

const menus = new Menus(tags, tagTexts, tabs);