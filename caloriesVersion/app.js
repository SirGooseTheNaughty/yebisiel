Vue.component('tab', {
    props: ['text', 'tabname'],
    template: `
        <div
            :class="{ 'tab': true, 'active': this.getIsActive(tabname) }"
            v-on:click="setTab(tabname)"
        >
            <p class="tab__upper">Баланс</p>
            <p class="tab__lower">{{ text }}</p>
        </div>
    `,
    methods: {
        getIsActive: function(value) {
            return this.$root.getIsActive('tab', value);
        },
        setTab: function(value) {
            return this.$root.setProperty('tab', value);
        }
    }
});
Vue.component('ccal', {
    props: ['text', 'tabname'],
    template: `
        <div
            :class="{ 'ccal': true, 'active': this.getIsActive(tabname), 'disabled': this.getIsDisabled(tabname) }"
            v-on:click="setTab(tabname)"
        >{{ text }}</div>
    `,
    methods: {
        getIsActive: function(value) {
            return this.$root.getIsActive('ccal', value);
        },
        setTab: function(value) {
            return this.$root.setProperty('ccal', value);
        },
        getIsDisabled: function(value) {
            return this.$root.getIsDisabled(value);
        }
    }
});
Vue.component('duration', {
    props: ['text', 'tabname'],
    template: `
        <div
            :class="{ 'duration__tab': true, 'active': this.getIsActive(tabname) }"
            v-on:click="setTab(tabname)"
        >{{ text }}
        </div>
    `,
    methods: {
        getIsActive: function(value) {
            return this.$root.getIsActive('duration', value);
        },
        setTab: function(value) {
            return this.$root.setProperty('duration', value);
        }
    }
});
Vue.component('control-button', {
    props: ['text', 'type', 'value'],
    template: `
        <div
            :class="{ 'controls__button': true, 'active': this.getIsActive(type, value) }"
            v-on:click="setTab(type, value)">{{ text }}
        </div>
    `,
    methods: {
        getIsActive: function(type, value) {
            return this.$root.getIsActive(type, value);
        },
        setTab: function(type, value) {
            return this.$root.setProperty(type, value);
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        tab: 'body',
        ccal: 'ccal-1200',
        duration: 'dur-1',
        delivery: 'morning',
        payment: 'card',
        phone: '',
        promocode: '',
        promoStatus: 'ready',
        discountType: '',
        discount: 0
    },
    computed: {
        picsUrls: function () {
            return picsRelations[this.ccal];
        },
        promocodeButtonPic: function () {
            return promoResults[this.promoStatus];
        },
        ccalText: function () {
            return ccalTexts[this.ccal];
        },
        price: function () {
            if (this.discount) {
                if (this.discountType === 'percent') {
                    return totalPrice = Math.floor(prices[this.ccal][this.duration].price * (1 - this.discount / 100));
                } else {
                    return prices[this.ccal][this.duration].price - this.discount;
                }
            }
            return prices[this.ccal][this.duration].price;
        },
        weekly: function () {
            return prices[this.ccal][this.duration].weekly;
        },
        profit: function () {
            if (prices[this.ccal][this.duration].profit) {
                return `Ваша выгода: ${prices[this.ccal][this.duration].profit} Р`;
            }
            return;
        },
        orderLink: function () {
            const price = prices[this.ccal][this.duration].price;
            return  `#order:${orderDict.calories[this.ccal]} ${orderDict.duration[this.duration]} ${orderDict.delivery[this.delivery]}=${price}`;
        }
    },
    methods: {
        setProperty: function (property, value) {
            this[property] = value;
            if (property === 'tab') {
                this.setPossibleCcal();
            } else if (property === 'ccal') {
                this.setCorrespondingTab(value);
            }
        },
        setPossibleCcal: function () {
            if (!possibleCcals[this.tab].includes(this.ccal)) {
                this.ccal = possibleCcals[this.tab][0];
            }
        },
        setCorrespondingTab: function (value) {
            this.setProperty('tab', correspondingTabs[value]);
        },
        getIsActive: function (selector, value) {
            return value === this[selector];
        },
        getIsDisabled: function (ccal) {
            return !possibleCcals[this.tab].includes(ccal);
        },
        inputPromocode: function (e) {
            this.promocode = e.target.value.toLowerCase();
            this.discount = 0;
            this.promoStatus = 'ready';
        },
        promocodeKeydown: function (e) {
            if (e.key === 'Enter') {
                this.enterPromocode();
            }
        },
        enterPromocode: async function () {
            const isValid = checkPromocodeInternally(this);
            if (isValid) {
                const res = await fetchPromocode (this.promocode);
                if (res.message === 'OK') {
                    this.promoStatus = 'ok';
                    if (res.discountpercent) {
                        this.discountType = 'percent';
                        this.discount = res.discountpercent;
                    } else {
                        this.discountType = 'sum';
                        this.discount = res.discountsum;
                    }
                    return;
                }
            }
            this.discount = 0;
            this.promoStatus = 'bad';
        },
        initiateCHeckout: function () {
            fillBasket(this);
        }
    }
});

async function fetchPromocode (code) {
    const res = await fetch("https://forms.tildacdn.com/payment/promocode/", {
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        "body": `promocode=${code}&projectid=${projectId}`,
        "method": "POST"
    });
    return res.json();
}

function checkPromocodeInternally (app) {
    const isPromocodeStricted = promoValues.findIndex(code => code.codes.includes(app.promocode)) !== -1;
    if (!isPromocodeStricted) {
        return true;
    }
    const validPromocodes = promoValues.filter(value => {
        if (value.ccal && value.ccal !== app.ccal) {
            return false;
        }
        if (value.duration && value.duration !== app.duration) {
            return false;
        }
        return true;
    });
    if (validPromocodes.length) {
        return true;
    }
    return false;
}

$('.phone').inputmask("+7 (999) 999-99-99", {
    "oncomplete": function () {
        $('.order').removeClass('disabled');
        $('.orderInfo').removeClass('disabled');
    },
    "onincomplete": function () {
        $('.order').addClass('disabled');
        $('.orderInfo').addClass('disabled');
    }
});
$('.phone').on('input', function() {
    app.phone = this.value;
    if (app.phone.split('').indexOf('_') !== -1) {
        $('.order').addClass('disabled');
        $('.orderInfo').addClass('disabled');
    }
});