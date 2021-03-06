const fbq = (any) => {};

const menuLinks = {
    home: '#home',
    lite: '#lite',
    avan: '#avan'
}
    
const picsUrls = {
    home: [
        './assets/1.png',
        './assets/2.png',
        './assets/3.png',
        './assets/4.png',
        './assets/5.png',
        './assets/6.png',
    ],
    lite: [
        './assets/1.png',
        './assets/2.png',
        './assets/3.png',
        './assets/4.png',
        './assets/5.png',
        './assets/6.png',
    ],
    avan: [
        './assets/1.png',
        './assets/2.png',
        './assets/3.png',
        './assets/4.png',
        './assets/5.png',
        './assets/6.png',
    ],
};
const picUrls = {
    home: {
        three: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3]
            ]
        ],
        four: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2]
            ]
        ],
        five: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5]
            ]
        ],
        six: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5],
                picsUrls.home[0]
            ]
        ]
    },
    lite: {
        three: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3]
            ]
        ],
        five: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5]
            ]
        ]
    },
    avan: {
        three: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3]
            ]
        ],
        four: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2]
            ]
        ],
        five: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5]
            ]
        ],
        six: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5],
                picsUrls.home[0]
            ]
        ]
    }
};