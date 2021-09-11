const tags = {
    home: [
        document.querySelector('[data-elem-id="1626102653055"]'),
        document.querySelector('[data-elem-id="1626102869130"]'),
        document.querySelector('[data-elem-id="1626103018863"]'),
    ],
    lite: [
        document.querySelector('[data-elem-id="1626102765294"]'),
        document.querySelector('[data-elem-id="1626102910901"]'),
        document.querySelector('[data-elem-id="1626103086725"]'),
    ]
};
const tagTexts = {
    home: [
        document.querySelector('[data-elem-id="1626102705492"]'),
        document.querySelector('[data-elem-id="1626102869134"]'),
        document.querySelector('[data-elem-id="1626103018866"]'),
    ],
    lite: [
        document.querySelector('[data-elem-id="1626102765298"]'),
        document.querySelector('[data-elem-id="1626102910905"]'),
        document.querySelector('[data-elem-id="1626103086728"]'),
    ]
};
const tabs = {
    home: {
        desktop: document.querySelector('#rec353792674'),
        mobile: document.querySelector('#rec353949026'),
    },
    lite: {
        desktop: document.querySelector('#rec354533115'),
        mobile: document.querySelector('#rec354540269'),
    }
};


const tooltipData = {
    home: [
        {
            name: 'Омлет с сыром',
            weight: 200,
            ing: 'Яйцо, молоко, сыр'
        },
        {
            name: 'Овощной микс',
            weight: 120,
            ing: 'Салат, перец, огурец, томат, редис'
        }, 
        {
            name: 'Чашушули с печеным картофелем',
            weight: 280,
            ing: 'Свинина, томат, специи, перец, лук, картофель, сливочное масло'
        },
        {
            name: 'Плов',
            weight: 280,
            ing: 'Рис, морковь, лук, бедро куриное, специи, чеснок'
        }, 
        {
            name: 'Фузилли с домашней котлетой и овощным конфитюром',
            weight: 280,
            ing: 'Фузилли, говядина, свинина, лук, кабачок, морковь, специи'
        },
    ],
    lite: [
        {
            name: 'Тунец унаги с рисом',
            weight: 250,
            ing: 'Тунец филе, соус "унаги", кунжут, рис'
        },
        {
            name: 'Салат с кус-кусом и медово-горчичной заправкой',
            weight: 120,
            ing: 'Томат, салат, филе куриное, огурец, кус-кус, мед, горчица зернистая'
        },
        {
            name: 'Греческий салат',
            weight: 120,
            ing: 'Салат, огурец, томат, перец, лук порей, оливки, маслины, сыр, кунжут'
        },
        {
            name: 'Куриный шашлычок с размарином и пряным картофелем',
            weight: 250,
            ing: 'Филе куриное, специи, картофель, пряности'
        },
        {
            name: 'Домашний фондю с фруктами',
            weight: 200,
            ing: 'Шоколад, какао, молоко, фрукты'
        }
    ]
};