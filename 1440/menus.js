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
        })

        this.changeScreenTabs();
    }

    changeScreenTabs = function() {
        if (this.isMobile()) {
            this.tabs.home.desktop.style.display = 'none';
            this.tabs.lite.desktop.style.display = 'none';
            this.screenTabs.home = this.tabs.home.mobile;
            this.screenTabs.lite = this.tabs.lite.mobile;
        } else {
            this.tabs.home.mobile.style.display = 'none';
            this.tabs.lite.mobile.style.display = 'none';
            this.screenTabs.home = this.tabs.home.desktop;
            this.screenTabs.lite = this.tabs.lite.desktop;
        }
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
        this.screenTabs.home.style.display = this.tab === 'home' ? 'block' : 'none';
        this.screenTabs.lite.style.display = this.tab === 'home' ? 'none' : 'block';
    }
}

const menus = new Menus(tags, tagTexts, tabs);