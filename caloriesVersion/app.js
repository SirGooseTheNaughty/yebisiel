const app = new Vue({
    el: '#app',
    data: {
        tab: 'body',
        ccal: 'ccal-1200',
        duration: 'dur-0',
        delivery: 'morning',
        payment: 'card',
        promocode: '',
        phone: '',
        price: 13000,
        pics: picsRelations,
        promoResult: 'ready'
    },
    computed: {
        picsUrls: function () {
            return this.pics[this.tab];
        },
        promocodeButtonPic: function () {
            return promoResults[this.promoResult];
        }
    },
    methods: {
        setProperty: function (property, value) {
            this[property] = value;
            if (property === 'tab') {
                this.setPossibleCcal();
            }
        },
        setPossibleCcal: function () {
            if (!possibleCcals[this.tab].includes(this.ccal)) {
                this.ccal = possibleCcals[this.tab][0];
            }
        },
        getIsActive: function (classList) {
            if (classList.includes('tab')) {
                return classList.includes(this.tab);
            }
            if (classList.includes('ccal')) {
                return classList.includes(this.ccal);
            }
            if (classList.includes('duration')) {
                return classList.includes(this.duration);
            }
            if (classList.includes('delivery')) {
                return classList.includes(this.delivery);
            }
            if (classList.includes('payment')) {
                return classList.includes(this.payment);
            }
        },
        getIsDisabled: function (ccal) {
            return !possibleCcals[this.tab].includes(ccal);
        },
        inputValue: function (property) {
            this[property] = this.value;
        }
    }
});