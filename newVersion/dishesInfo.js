const dishesInfo = {
    home: [
        [
            {
                name: 'Омлет с сыром',
                weight: 200,
                ing: 'Яйцо, молоко, сыр',
                pic: ''
            },
            {
                name: 'Овощной микс',
                weight: 120,
                ing: 'Салат, перец, огурец, томат, редис',
                pic: ''
            }, 
            {
                name: 'Чашушули с печеным картофелем',
                weight: 280,
                ing: 'Свинина, томат, специи, перец, лук, картофель, сливочное масло',
                pic: ''
            },
            {
                name: 'Плов',
                weight: 280,
                ing: 'Рис, морковь, лук, бедро куриное, специи, чеснок',
                pic: ''
            },
            {
                name: 'Куриный суп',
                weight: 280,
                ing: 'Курица, картофель, морковь, макарошки',
                pic: ''
            },
            {
                name: 'Пирожное орехово-карамельное',
                weight: 50,
                ing: 'Сливки, сахар, сгущеное молоко, паста ореховая, масло, шоколад, мука, молоко, арахис',
                pic: ''
            }
        ],
        [
            {
                name: 'Запеканка творожная с вишневым вареньем',
                weight: 230,
                ing: 'Творог, сметана, сахар, яйцо, вишня, мука',
                pic: ''
            },
            {
                name: 'Селедка под шубой',
                weight: 120,
                ing: 'Сельдь филе, картофель, яйцо, морковь, свекла, майонез',
                pic: ''
            }, 
            {
                name: 'Фузилли с домашней котлетой и овощным конфитюром',
                weight: 280,
                ing: 'Фузилли, говядина, свинина, лук, кабачок, морковь, специи',
                pic: ''
            },
            {
                name: 'Чахохбили с гречей',
                weight: 280,
                ing: 'Бедро куриное, томат, лук, морковь, специи, греча',
                pic: ''
            },
            {
                name: 'Харчо',
                weight: 280,
                ing: 'Говядина, рис, томат, соус ткемали',
                pic: ''
            },
            {
                name: 'Эклер шоколадный',
                weight: 50,
                ing: 'Мука, яйцо, сахар, шоколад, заварной крем',
                pic: ''
            }
        ],
        [
            {
                name: 'Маффин с молоком',
                weight: 280,
                ing: 'Молоко, мука, вода, масло сливочное, сахар, молоко, ванилин',
                pic: ''
            },
            {
                name: 'Салат с соусом "Ранч"',
                weight: 120,
                ing: 'Фасоль, яйцо, салат патисон, зеленый горошек, соус "ранч"',
                pic: ''
            }, 
            {
                name: 'Куриная отбивная с рисом',
                weight: 280,
                ing: 'Филе куриное, томат, майонез, сыр, рис',
                pic: ''
            },
            {
                name: 'Шницель куриный с булгуром',
                weight: 280,
                ing: 'Филе куриное, сухари панировочные, булгур',
                pic: ''
            },
            {
                name: 'Грибной суп',
                weight: 280,
                ing: 'Грибы, картофель, морковь, перловая крупа',
                pic: ''
            },
            {
                name: 'Чиз-кейк клубничный',
                weight: 100,
                ing: 'Бисквит, ваниль, сливочный сыр, сливки, яйцо, клубника',
                pic: ''
            }
            
        ],
        [
            {
                name: 'Блинчики со сгущенкой',
                weight: 170,
                ing: 'Мука, молоко, яйцо, сахар, сгущеное молоко',
                pic: ''
            },
            {
                name: 'Салат Цезарь',
                weight: 120,
                ing: 'Салат, томат, филе куриное, соус "цезарь", гренки',
                pic: ''
            }, 
            {
                name: 'Картофельная лазанья с мясом',
                weight: 250,
                ing: 'Картофель, яйцо, фарш мясной, кабачки, сливочный соус, сыр',
                pic: ''
            },
            {
                name: 'Удон с курицей',
                weight: 280,
                ing: 'Пшеничная лапша, филе куриное, морковь, кунжут, перец, соус "удон"',
                pic: ''
            },
            {
                name: 'Солянка со сметаной',
                weight: 280,
                ing: 'Огурец, лук, картофель, томат, курица, оливки, колбаски',
                pic: ''
            },
            {
                name: 'Сметанник',
                weight: 60,
                ing: 'Сметана, сгущеное молоко, яйцо, мука, сахар, сливки, масло, какао',
                pic: ''
            }
            
        ],
        [
            {
                name: 'Чиабатта с ветчиной и сыром',
                weight: 200,
                ing: 'Чиабатта, ветчина, сыр, салат, томат, соус',
                pic: ''
            },
            {
                name: 'Салат Акапулько',
                weight: 120,
                ing: 'Салат, томат, ветчина, макароны, перец, пряный соус',
                pic: ''
            }, 
            {
                name: 'Тори чилли с рисом',
                weight: 280,
                ing: 'Филе куриное, соус "свит чили", лук порей, перец, рис',
                pic: ''
            },
            {
                name: 'Бифштекс с яйцом макароны',
                weight: 280,
                ing: 'Макароны, фарш из говядины, яйцо',
                pic: ''
            },
            {
                name: 'Борщ со сметаной',
                weight: 280,
                ing: 'Свекла, картофель, капуста, морковь, курица, томат, сметана',
                pic: ''
            },
            {
                name: 'Баркетта с вишней и творожным кремом',
                weight: 80,
                ing: 'Тесто слоеное, вишня, сахар, творог, сливки',
                pic: ''
            }
            
        ],
        [
            {
                name: 'Сырники с ягодным муссом',
                weight: 200,
                ing: 'Творог, сахар, хлопья овсяные, ягодное варенье',
                pic: ''
            },
            {
                name: 'Салат Орзо',
                weight: 120,
                ing: 'Паста орзо, салат, томат, огурец, куриное филе, медово-горчичная заправка',
                pic: ''
            }, 
            {
                name: 'Медальоны из свинины с гречей',
                weight: 270,
                ing: 'Вырезка свиная, специи, розмарин, греча',
                pic: ''
            },
            {
                name: 'Тельное из рыбы с пюре',
                weight: 280,
                ing: 'Рыбный фарш, картофель, молоко, масло сливочное, соус тар-тар',
                pic: ''
            },
            {
                name: 'Гороховый суп',
                weight: 280,
                ing: 'Горох, картофель, копчености, куриное филе, морковь',
                pic: ''
            },
            {
                name: 'Медовик',
                weight: 60,
                ing: 'Мука, молоко, молоко сгущеное, мед, яйцо, масло, сироп "крем брюле"',
                pic: ''
            }
            
        ],
        [
            {
                name: 'Кесадилья',
                weight: 200,
                ing: 'Тортилья, салат, томат, огурец, перец, соус, кура',
                pic: ''
            },
            {
                name: 'Салат деревенский',
                weight: 120,
                ing: 'Картофель, салат, горошек, филе куриное, лук красный, патисон маринованный, соус',
                pic: ''
            }, 
            {
                name: 'Спагетти болоньезе',
                weight: 280,
                ing: 'Спагетти, мясной фарш, томат, лук, морковь, сыр',
                pic: ''
            },
            {
                name: 'Блинчики с мясом',
                weight: 250,
                ing: 'Молоко, яйцо, мука, фарш мясной, сметана, зелень',
                pic: ''
            },
            {
                name: 'Картофельный крем суп с гренками',
                weight: 280,
                ing: 'Картофель, лук, пшеничный хлеб',
                pic: ''
            },
            {
                name: 'Морковное пирожное',
                weight: 60,
                ing: 'Морковь, сыр творожный, сахар, мука, масло, яйцо, грецкий орех, ананас',
                pic: ''
            }
            
        ]
    ],
    lite: [
        [
            {
                name: 'Глазунья со стручковой фасолью и томатами',
                weight: 200,
                ing: 'Яйцо, томат, фасоль стручковая',
                pic: ''
            },
            {
                name: 'Мясной рулет с молодыми овощами',
                weight: 250,
                ing: 'Фарш домашний, специи, шпинат, морковь, цветная капуста, кукуруза, брокколи, соус',
                pic: ''
            },
            {
                name: 'Салат с кус-кусом и медово-горчичной заправкой',
                weight: 120,
                ing: 'Томат, салат, филе куриное, огурец, кус-кус, мед, горчица зернистая',
                pic: ''
            },
            {
                name: 'Тунец унаги с рисом',
                weight: 250,
                ing: 'Тунец филе, соус "унаги", кунжут, рис',
                pic: ''
            },
            {
                name: 'Минестроне',
                weight: 280,
                ing: 'Брокколи, горошек, фасоль стручковая, цветная капуста, томат',
                pic: ''
            },

        ],
        [
            {
                name: 'Салат коул-слоу',
                weight: 120,
                ing: 'Капуста, капуста красная, морковь, клюква, соус',
                pic: ''
            },
            {
                name: 'Пшеничка с крекером',
                weight: 250,
                ing: 'Пшеничка, крекер, молоко, фруктоза, масло сливочное',
                pic: ''
            },
            {
                name: 'Спагетти с томленой курочкой',
                weight: 250,
                ing: 'Спагетти, специи, филе куры, морковь, лук, тимьян',
                pic: ''
            },
            {
                name: 'Куриная котлета с овощами',
                weight: 250,
                ing: 'Куриный фарш, сухари панировочные, картофель стоун, морковь, цветная капуста, фасоль стручковая',
                pic: ''
            },
            {
                name: 'Гаспачо',
                weight: 280,
                ing: 'Томат, базилик, огурец, красный лук',
                pic: ''
            },

        ],
        [
            {
                name: 'Индейка наполи с печеными кабачками',
                weight: 250,
                ing: 'Филе индейки, томат сс, специи, кабачки',
                pic: ''
            },
            {
                name: 'Салат Бордо',
                weight: 120,
                ing: 'Свекла, яблоко, сыр фета, заправка',
                pic: ''
            },
            {
                name: 'Сырники в кокосе',
                weight: 200,
                ing: 'Творог, фруктоза, кокосовая стружка, сметана',
                pic: ''
            },
            {
                name: 'Полба с грибным соусом и мясными шариками',
                weight: 250,
                ing: 'Мясной фарш, лук, шампиньоны, сливочный соус, полба',
                pic: ''
            },
            {
                name: 'Крем суп из молодого горошка',
                weight: 280,
                ing: 'Горошек молодой, специи, лук, картофель, сливки',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Овощной микс',
                weight: 120,
                ing: 'Салат, огурец, томат, перец, редис',
                pic: ''
            },
            {
                name: 'Яйцо по Бельгийски с овощами',
                weight: 200,
                ing: 'Яйцо, горошек, брокколи',
                pic: ''
            },
            {
                name: 'Митболлы с грибным соусом',
                weight: 250,
                ing: 'Мясной фарш, греча, грибы, сливки, молоко',
                pic: ''
            },
            {
                name: 'Овощное рагу',
                weight: 250,
                ing: 'Картофель стоун, морковь, кабачки, перец, грибы',
                pic: ''
            },
            {
                name: 'Куриный бульон с яйцом',
                weight: 280,
                ing: 'Курица, макарошки, яйцо',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Греческий салат',
                weight: 120,
                ing: 'Салат, огурец, томат, перец, лук порей, оливки, маслины, сыр, кунжут',
                pic: ''
            },
            {
                name: 'Татаки из тунца с печеным картофелем',
                weight: 220,
                ing: 'Тунец филе, кунжут, соевый соус, картофель стоун, специи, зелень',
                pic: ''
            },
            {
                name: 'Домашний фондю с фруктами',
                weight: 200,
                ing: 'Шоколад, какао, молоко, фрукты',
                pic: ''
            },
            {
                name: 'Фунчоза Ло-мейн',
                weight: 250,
                ing: 'Фунчеза, соус "ло-мейн", морковь, лук, куриное филе',
                pic: ''
            },
            {
                name: 'Уха по Фински',
                weight: 280,
                ing: 'Филе трески, филе тунца, томат, лук порей, сливки',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Блинчики с ветчиной и сыром',
                weight: 200,
                ing: 'молоко, яйцо, ветчина индейки, сыр, соус, мука рисовая',
                pic: ''
            },
            {
                name: 'Куриный шашлычок с размарином и пряным картофелем',
                weight: 250,
                ing: 'Филе куриное, специи, картофель, пряности',
                pic: ''
            },
            {
                name: 'Салат с тунцом',
                weight: 120,
                ing: 'Салат, огурец, тунец филе, яйцо, соус',
                pic: ''
            },
            {
                name: 'Манты "а-ля"',
                weight: 250,
                ing: 'Куриный фарш, мука, яйцо, вода, соус сметанный',
                pic: ''
            },
            {
                name: 'Морковно-сельдереевый суп',
                weight: 280,
                ing: 'Морковь, сельдерей, молоко, лук',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Брошет из овощей',
                weight: 250,
                ing: 'Филе куриное, перец, шампиньон, лук красный, кабачки, томат',
                pic: ''
            },
            {
                name: 'Капрезе',
                weight: 120,
                ing: 'Томат, песто, фрилисс, моцарелла',
                pic: ''
            },
            {
                name: 'Фруктовый салат',
                weight: 200,
                ing: 'Фрукты, ягодный мусс, зефир',
                pic: ''
            },
            {
                name: 'Лобио',
                weight: 250,
                ing: 'Фасоль, томат, морковь, грецкий орех, тортилья',
                pic: ''
            },
            {
                name: 'Куриный суп',
                weight: 280,
                ing: 'Курица, картофель, морковь, макарошки',
                pic: ''
            },
            
        ]
    ],
    avan: [
        [
            {
                name: 'Блинчики крем-чиз с персиками и черничным муссом',
                weight: 250,
                ing: 'Сливки, черника, яйцо, молоко, мука, персики, сахар, сыр',
                pic: ''
            },
            {
                name: 'Салат с тунцом и кремом бальзамик',
                weight: 150,
                ing: 'Салат, тунец, картофель, имбирь маслины, черри, яйцо, кунжут',
                pic: ''
            },
            {
                name: 'Бургер ЯБС',
                weight: 280,
                ing: 'Булка, мясной фарш, сыр чеддер, огурец, томат, соус',
                pic: ''
            },
            {
                name: 'Жульен Дон-Пепе',
                weight: 150,
                ing: 'Коризиночка, грибы, филе куриное, сливочный соус "Бешамель", сыр',
                pic: ''
            },
            {
                name: 'Утиная грудка унаги с гречневой лапшой',
                weight: 280,
                ing: 'Филе утки, гречневая лапша, морковь, перец, соус "унаги", кунжут, зелень',
                pic: ''
            },
            {
                name: 'Тарталетка лимонная с меренгой',
                weight: 110,
                ing: 'Сахар, яйцо, мука пшеничная, лимон, вода, масло, сахарная пудра',
                pic: ''
            },
        ],
        [
            {
                name: 'Картофельный хашбраун с яйцом в беконе',
                weight: 300,
                ing: 'Картофельный хашбраун, яйцо, бекон, лук фри, соус "свит чили"',
                pic: ''
            },
            {
                name: 'Салат чикен пеппер',
                weight: 150,
                ing: 'Филе куриное, листья салата, черри, соус, карри',
                pic: ''
            },
            {
                name: 'Спагетти карбонара',
                weight: 280,
                ing: 'Спагетти, бекон, соус "песто", сливочный соус, сыр пармезан',
                pic: ''
            },
            {
                name: 'Чикен-карри с рисом жасмин',
                weight: 280,
                ing: 'Курица, сливочный соус, карри, рис жасмин',
                pic: ''
            },
            {
                name: 'Сицилийский суп с треской и голубой мидией',
                weight: 280,
                ing: 'Лук, чеснок, томаты, мидия, треска',
                pic: ''
            },
            {
                name: 'Пирожное "Шу" с карамельным кремом',
                weight: 120,
                ing: 'Заварное тесто, карамель, соленая карамель, миндаль',
                pic: ''
            },

        ],
        [
            {
                name: 'Рулетики прошуто',
                weight: 230,
                ing: 'Тортилья, ветчина, сыр, черри, соус',
                pic: ''
            },
            {
                name: 'Салат с говяжьим языком',
                weight: 150,
                ing: 'Язык, огурец, томат, салат, соус "сливочный хрен", картофель стоун',
                pic: ''
            },
            {
                name: 'Медальоны с овощами на пару',
                weight: 280,
                ing: 'Вырезка свиная, горчица зернистая, розмарин, морковь, брокколи, цветная капуста, горошек',
                pic: ''
            },
            {
                name: 'Мясной штрудель',
                weight: 280,
                ing: 'Мясной фарш, слоёное тесто, сметана',
                pic: ''
            },
            {
                name: 'Ким-чи суп',
                weight: 280,
                ing: 'Рыбный бульон, водоросли, тофу, яйцо',
                pic: ''
            },
            {
                name: 'Чиз-кейк шоколадный',
                weight: 100,
                ing: 'Бисквит, ваниль, шоколад, какао, сливочный сыр, сливки, яйцо',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Панкейки с творогом и вишневым конфитюром',
                weight: 250,
                ing: 'Творог, сахар, вишня, мука, молоко, яйцо',
                pic: ''
            },
            {
                name: 'Салат Цезарь',
                weight: 150,
                ing: 'Филе куриное, салат, соус "цезарь", томат, гренки, сыр',
                pic: ''
            },
            {
                name: 'Лапша Том-Ям',
                weight: 280,
                ing: 'Яичная лапша, филе куиное, перец, морковь, лук порей, салат, соус том-ям, кокосовое молоко',
                pic: ''
            },
            {
                name: 'Брускета',
                weight: 180,
                ing: 'Хлебцы, сливочный сыр, кукуруза, салат, лук красный, сельдерей, перец, виноград',
                pic: ''
            },
            {
                name: 'Филе тунца с печеным овощами под соусом унаги',
                weight: 230,
                ing: 'Тунец филе, кунжут, унаги соус, картофель стоун, болгарский перец, цукини, специи, зелень',
                pic: ''
            },
            {
                name: 'Смузи черничный на овсяном молоке',
                weight: 300,
                ing: 'Немолоко, банан, черника, мед, орехи',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Цезарь ролл',
                weight: 200,
                ing: 'Тортилья, куриное филе, соус цезарь, салат, томаты',
                pic: ''
            },
            {
                name: 'Овощной микс',
                weight: 180,
                ing: 'Салат, томат, редис, огурец, перец, заправка',
                pic: ''
            },
            {
                name: 'Мясо по-бургундски с картофелем',
                weight: 280,
                ing: 'Вырезка свиная, лук красный, картофель стоун, соус "Деми-гласс", соевый соус, лук',
                pic: ''
            },
            {
                name: 'Fish Bolls Crab с кус-кусом',
                weight: 280,
                ing: 'Филе трески, мясо краба, морковь, кус-кус, перец, лук красный, сельдерей, сливочный соус, соус "ким-чи"',
                pic: ''
            },
            {
                name: 'Том-ям по домашнему',
                weight: 280,
                ing: 'Курица, шампиньон, креветка, черри, молоко кокосовое, паста том-ям',
                pic: ''
            },
            {
                name: 'Шоколадное суфле',
                weight: 100,
                ing: 'Яйца, пшеничная мука, сахар, масло сливочное, какао крем, темный шоколад',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Фриттата Палермо',
                weight: 230,
                ing: 'Яйцо, молоко, сливки, куриное филе, перец, черри, сыр',
                pic: ''
            },
            {
                name: 'Салат с красной рыбой и каперсами',
                weight: 150,
                ing: 'Форель шеф посола, салат, каперсы, огурец, томат, оливки',
                pic: ''
            },
            {
                name: 'Паэлья по домашнему с цыпленком и чилли перцем',
                weight: 280,
                ing: 'Рис, филе куриное, креветка, кукуруза, горошек, перец, пармезан, соус свит-чили',
                pic: ''
            },
            {
                name: 'Овощной покемикс',
                weight: 180,
                ing: 'Рис, салат "чукка", бобы эдэмамэ, огурец, морковь, ореховый соус, кунжут',
                pic: ''
            },
            {
                name: 'Удон с говядиной и кунжутным маслом',
                weight: 280,
                ing: 'Говядина, красный лук, кабачки, пшеничная лапша, перец, кунжут',
                pic: ''
            },
            {
                name: 'Чиз-кейк классический',
                weight: 100,
                ing: 'Бисквит, ваниль, сливочный сыр, сливки, яйцо',
                pic: ''
            },
            
        ],
        [
            {
                name: 'Геркулес холодного варения с фруктами и чипсами из апельсина',
                weight: 300,
                ing: 'Фрукты? хлопья овсяные, йогурт',
                pic: ''
            },
            {
                name: 'Овощи ким-чи',
                weight: 150,
                ing: 'Салат, морковь, свекла, огурец, спаржа, кунжут',
                pic: ''
            },
            {
                name: 'Стейк из индейки с рисом и машем',
                weight: 280,
                ing: 'Филе индейки, рис, маш, соус "вишневый деми глас"',
                pic: ''
            },
            {
                name: 'Медальоны из свиной вырезки в ежевичном соусе с шато из яблок и цукини',
                weight: 280,
                ing: 'Вырезка свиная, кабачки, яблоко, ежевика, розмарин, специи',
                pic: ''
            },
            {
                name: 'Сливочный суп с крабом',
                weight: 280,
                ing: 'Сливки, молоко, плавленный сыр, вакаме, картофель, крабовое мясо, лук порей, тарталетка мини, икра, специи',
                pic: ''
            },
            {
                name: 'Смузи шоколадный',
                weight: 300,
                ing: 'Немолоко, какао, шоколадная паста, банан, миндаль',
                pic: ''
            },
            
        ]
    ],
}