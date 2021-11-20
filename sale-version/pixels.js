// пиксели
// FACEBOOK
const FBpixel = {
    isMenuTracked: false,
    trackContact: () => {
        if (window.location.toString().includes('5500')) {
            return;
        }
        console.log('FB pixel traked contact');
        fbq('track', 'Contact');
    },
    trackMenu: function () {
        if (window.location.toString().includes('5500')) {
            return;
        }
        if (!this.isMenuTracked) {
            console.log('FB pixel traked menu');
            fbq('track', 'menu');
            this.isMenuTracked = true;
        }
    },
    trackPurchase: () => {
        if (window.location.toString().includes('5500')) {
            return;
        }
        console.log('FB pixel traked purchase');
        const menu = orderDict.menus[state.tab];
        fbq('track', 'purchase', {
            value: state.price,
            currency: 'RUB',
            content_ids: [menu],
            content_type: 'product'
        }); 
    }
}

// VK
const VKpixel = {
    isMenuTracked: false,
    isContactTracked: false,
    trackContact: function () {
        if (window.location.toString().includes('5500')) {
            return;
        }
        if (!this.isContactTracked) {
            console.log('VK pixel traked contact');
            VK.Goal('contact');
            this.isContactTracked = true;
        }
    },
    trackCheckout: function () {
        if (window.location.toString().includes('5500')) {
            return;
        }
        if (!this.isMenuTracked) {
            console.log('VK pixel traked checkout');
            VK.Goal('initiate_checkout');
            this.isMenuTracked = true;
        }
    },
    trackPurchase: () => {
        if (window.location.toString().includes('5500')) {
            return;
        }
        // не используется
        console.log('VK pixel traked purchase');
        const menu = orderDict.menus[state.tab];
        VK.Goal('purchase', {
            value: state.price,
            currency: 'RUB',
            content_ids: [menu],
            content_type: 'product'
        });
    },
};