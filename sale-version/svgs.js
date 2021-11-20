const arrow = ``;

const svgPics = {
    home:  `<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.54962 17.9913H4.64966V28.4989C4.64966 28.897 4.81296 29.2788 5.10365 29.5603C5.39433 29.8419 5.78859 30 6.19968 30H24.7999C25.211 30 25.6053 29.8419 25.896 29.5603C26.1867 29.2788 26.35 28.897 26.35 28.4989V17.9913H29.45C29.7496 17.9915 30.0427 17.9076 30.294 17.7496C30.5452 17.5915 30.7436 17.3663 30.8652 17.1011C30.9876 16.8361 31.0278 16.5424 30.981 16.2557C30.9343 15.9689 30.8025 15.7015 30.6017 15.486L16.6515 0.475094C16.064 -0.158365 14.9356 -0.158365 14.3481 0.475094L0.39795 15.486C0.197518 15.7016 0.0659162 15.9689 0.0190682 16.2555C-0.0277798 16.5421 0.0121339 16.8356 0.13398 17.1007C0.255826 17.3658 0.454382 17.5909 0.705621 17.749C0.956861 17.9071 1.25002 17.9912 1.54962 17.9913ZM10.3119 14.4502C10.9571 13.8334 11.8272 13.4875 12.7338 13.4875C13.6404 13.4875 14.5105 13.8334 15.1557 14.4502L15.5029 14.7805L15.8486 14.4502C16.494 13.8333 17.3644 13.4874 18.2712 13.4874C19.1781 13.4874 20.0485 13.8333 20.6939 14.4502C21.0141 14.7485 21.2689 15.1064 21.4429 15.5023C21.6169 15.8982 21.7065 16.3241 21.7065 16.7544C21.7065 17.1847 21.6169 17.6106 21.4429 18.0065C21.2689 18.4024 21.0141 18.7603 20.6939 19.0586L15.5029 23.9956L10.3119 19.0586C9.99168 18.7603 9.73695 18.4024 9.56296 18.0065C9.38896 17.6106 9.29927 17.1847 9.29927 16.7544C9.29927 16.3241 9.38896 15.8982 9.56296 15.5023C9.73695 15.1064 9.99168 14.7485 10.3119 14.4502Z" fill="#F08D46"/>
    </svg>`,
    lite: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M29.1211 17.1094H0.878911C0.601059 17.1094 0.339614 17.2407 0.173794 17.4636C0.00791479 17.6866 -0.0427688 17.9747 0.0370945 18.2409L0.667446 20.3421C1.05053 21.6189 1.81829 22.7145 2.8878 23.5102C3.95731 24.3059 5.22727 24.7266 6.56034 24.7266H23.4397C24.7727 24.7266 26.0427 24.3059 27.1122 23.5102C28.1817 22.7145 28.9495 21.6189 29.3326 20.3421L29.963 18.2409C30.0428 17.9747 29.9922 17.6866 29.8263 17.4636C29.6604 17.2407 29.3989 17.1094 29.1211 17.1094Z" fill="#B0CB6C"/>
            <path d="M5.91797 26.4844V27.6562C5.91797 28.1416 6.31148 28.5352 6.79688 28.5352H23.2031C23.6885 28.5352 24.082 28.1416 24.082 27.6562V26.4844H5.91797Z" fill="#B0CB6C"/>
            <path d="M16.8112 15.3516C16.9282 14.9419 16.9922 14.5097 16.9922 14.0625C16.9922 11.4737 14.8936 9.375 12.3047 9.375C11.0608 9.375 9.93074 9.8601 9.09186 10.651L13.7924 15.3516H16.8112Z" fill="#B0CB6C"/>
            <path d="M5.85402 15.3515V12.8998L3.40228 15.3515H5.85402Z" fill="#B0CB6C"/>
            <path d="M4.61104 11.6569H0.00012207C0.150767 12.8169 0.600884 13.9453 1.35041 14.9174L4.61104 11.6569Z" fill="#B0CB6C"/>
            <path d="M5.85404 9.89906L2.59904 6.64407C2.2173 6.26233 1.5876 6.3139 1.26674 6.74807C0.566953 7.69495 0.144902 8.78245 0 9.89906H5.85404Z" fill="#B0CB6C"/>
            <path d="M7.61182 11.6569V15.3515H11.3065L7.61182 11.6569Z" fill="#B0CB6C"/>
            <path d="M30 9.375C30 7.22678 28.4505 5.43357 26.4105 5.05436C26.0313 3.01436 24.238 1.46484 22.0898 1.46484C19.9416 1.46484 18.1484 3.01436 17.7692 5.05436C16.1954 5.34691 14.9143 6.48141 14.4106 7.97086C16.9335 8.84549 18.75 11.2457 18.75 14.0625C18.75 14.4954 18.7055 14.9271 18.6188 15.3516H21.2109V12.1891L18.8179 10.5938C18.4141 10.3245 18.305 9.77883 18.5742 9.37494C18.8434 8.97105 19.3891 8.86195 19.793 9.13119L21.2109 10.0765V6.47016C21.2109 5.99689 21.5746 5.58967 22.0473 5.5674C22.5521 5.54361 22.9687 5.9458 22.9687 6.44531V10.0765L24.3866 9.13125C24.7905 8.86201 25.3362 8.97111 25.6054 9.375C25.8747 9.77889 25.7656 10.3246 25.3617 10.5938L22.9687 12.1891V15.3516H28.6037C28.7525 14.9397 28.8281 14.5078 28.8281 14.0625C28.8281 13.5693 28.7328 13.087 28.5487 12.6358C29.4692 11.8113 30 10.6414 30 9.375Z" fill="#B0CB6C"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>`,
    avan: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M19.1097 21.7634H20.714C20.3707 20.7908 19.6443 20.0945 18.6445 19.768C18.877 20.4078 19.0335 21.0767 19.1097 21.7634Z" fill="#8D839C"/>
            <path d="M22.4217 21.7634H24.3618C24.1523 20.2344 23.4472 18.8235 22.3297 17.7245C21.0089 16.4257 19.2611 15.7104 17.4084 15.7104C16.8011 15.7104 16.2774 15.7602 15.7891 15.8701C16.0626 16.0815 16.3252 16.3103 16.5753 16.5562C17.0067 16.9804 17.3877 17.4426 17.7164 17.9349C18.9285 18.0188 20.0025 18.4324 20.8439 19.1453C21.6375 19.8177 22.1747 20.7131 22.4217 21.7634Z" fill="#8D839C"/>
            <path d="M0.827332 5.01851H16.7939C17.1765 6.94198 18.8769 8.39645 20.9111 8.39645H21.3339V15.0072C21.9161 15.3038 22.4663 15.6678 22.9746 16.0954V8.39639H24.4136V17.6361C25.2981 18.8479 25.8489 20.263 26.0148 21.7634H26.0542V8.39639H27.1727C27.6257 8.39639 27.993 8.02911 27.993 7.57608C27.993 7.12305 27.6257 6.75577 27.1727 6.75577H26.0542V5.01851H27.0352C27.4882 5.01851 27.8555 4.65123 27.8555 4.1982C27.8555 3.74516 27.4882 3.37788 27.0352 3.37788H22.9745V1.64062H27.111C27.564 1.64062 27.9313 1.27334 27.9313 0.820312C27.9313 0.367281 27.564 0 27.111 0H20.911C18.8768 0 17.1765 1.45441 16.7938 3.37788H0.827332C0.3743 3.37788 0.00701904 3.74516 0.00701904 4.1982C0.00701904 4.65123 0.3743 5.01851 0.827332 5.01851ZM22.9745 5.01851H24.4135V6.75582H22.9745V5.01851Z" fill="#8D839C"/>
            <path d="M13.9438 14.78C15.0025 14.2851 16.063 14.0698 17.4083 14.0698C17.4436 14.0698 17.4788 14.0707 17.514 14.0711C16.6114 12.5806 14.9844 11.6939 13.0628 11.6939C10.8709 11.6939 9.39875 12.822 8.51483 14.3006C9.15954 14.1496 9.82585 14.0714 10.5037 14.0714C11.7055 14.0714 12.8713 14.3157 13.9438 14.78Z" fill="#8D839C"/>
            <path d="M27.1677 23.404H26.8281H1.1862H0.846374C0.393343 23.404 0.026062 23.7713 0.026062 24.2243C0.026062 24.6774 0.393343 25.0446 0.846374 25.0446H1.85503C2.25326 25.708 2.77624 26.2917 3.40898 26.7691C4.47609 27.5744 5.7467 28 7.08354 28H20.9331C22.2692 28 23.5393 27.5748 24.6061 26.7703C25.2395 26.2927 25.763 25.7087 26.1616 25.0447H27.1676C27.6207 25.0447 27.9879 24.6774 27.9879 24.2244C27.9879 23.7713 27.6207 23.404 27.1677 23.404Z" fill="#8D839C"/>
            <path d="M15.6824 21.7634H17.4563C17.3303 20.8463 17.0266 19.9717 16.5621 19.1815C16.5504 19.1633 16.539 19.145 16.5287 19.1258C16.2251 18.6203 15.8559 18.1499 15.4249 17.726C14.8874 17.1975 14.2792 16.7656 13.6219 16.4392C13.6021 16.4304 13.5825 16.4213 13.5634 16.411C12.6209 15.9539 11.5801 15.7119 10.5037 15.7119C8.65151 15.7119 6.90413 16.4269 5.58343 17.7251C4.46573 18.8237 3.76042 20.2345 3.55048 21.7634H5.32361C5.89045 19.366 8.04448 17.5758 10.5037 17.5758C12.9606 17.5758 15.1131 19.3656 15.6824 21.7634Z" fill="#8D839C"/>
            <path d="M7.02893 21.7634H13.9764C13.4611 20.2819 12.0714 19.2164 10.5037 19.2164C8.93375 19.2164 7.54256 20.2822 7.02893 21.7634Z" fill="#8D839C"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="28" height="28" fill="white"/>
            </clipPath>
        </defs>
    </svg>`
};

const popupIcon = `
    <svg class="dishPopup__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#FFF7EC" fill-opacity="0.6"/>
        <path d="M7.51053 9.672C7.43053 9.672 7.36253 9.644 7.30653 9.588C7.25053 9.532 7.22253 9.464 7.22253 9.384V3.888C7.22253 3.808 7.25053 3.74 7.30653 3.684C7.36253 3.628 7.43053 3.6 7.51053 3.6H8.48253C8.57053 3.6 8.63853 3.628 8.68653 3.684C8.74253 3.732 8.77053 3.8 8.77053 3.888V9.384C8.77053 9.464 8.74253 9.532 8.68653 9.588C8.63853 9.644 8.57053 9.672 8.48253 9.672H7.51053ZM7.43853 12C7.35853 12 7.29053 11.972 7.23453 11.916C7.17853 11.86 7.15053 11.792 7.15053 11.712V10.596C7.15053 10.508 7.17853 10.436 7.23453 10.38C7.29053 10.324 7.35853 10.296 7.43853 10.296H8.55453C8.64253 10.296 8.71453 10.324 8.77053 10.38C8.82653 10.436 8.85453 10.508 8.85453 10.596V11.712C8.85453 11.792 8.82653 11.86 8.77053 11.916C8.71453 11.972 8.64253 12 8.55453 12H7.43853Z" fill="white"/>
    </svg>
`;

const promocodePics = {
    arrow: `<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.44289e-07 8.00004C-3.57331e-07 7.70167 0.118526 7.41553 0.329505 7.20455C0.540483 6.99357 0.826631 6.87504 1.125 6.87504L14.1592 6.87504L9.3285 2.04654C9.2239 1.94195 9.14093 1.81777 9.08432 1.68111C9.02771 1.54444 8.99858 1.39797 8.99858 1.25004C8.99858 1.10212 9.02771 0.955643 9.08432 0.81898C9.14093 0.682316 9.2239 0.55814 9.3285 0.453542C9.4331 0.348945 9.55727 0.265973 9.69394 0.209365C9.8306 0.152757 9.97708 0.123622 10.125 0.123622C10.2729 0.123622 10.4194 0.152757 10.5561 0.209365C10.6927 0.265973 10.8169 0.348945 10.9215 0.453542L17.6715 7.20354C17.7763 7.30804 17.8594 7.43219 17.9161 7.56887C17.9728 7.70554 18.002 7.85207 18.002 8.00004C18.002 8.14802 17.9728 8.29454 17.9161 8.43122C17.8594 8.5679 17.7763 8.69204 17.6715 8.79654L10.9215 15.5465C10.8169 15.6511 10.6927 15.7341 10.5561 15.7907C10.4194 15.8473 10.2729 15.8765 10.125 15.8765C9.97708 15.8765 9.8306 15.8473 9.69394 15.7907C9.55727 15.7341 9.4331 15.6511 9.3285 15.5465C9.11726 15.3353 8.99858 15.0488 8.99858 14.75C8.99858 14.6021 9.02771 14.4556 9.08432 14.319C9.14093 14.1823 9.2239 14.0581 9.3285 13.9535L14.1592 9.12504L1.125 9.12504C0.826631 9.12504 0.540483 9.00652 0.329505 8.79554C0.118526 8.58456 -3.31247e-07 8.29841 -3.44289e-07 8.00004Z" fill="#F2F2F2"/>
    </svg>`,
    ok: `<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 6L9 13.5L21 1.5" stroke="#F2F2F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    bad: `<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="2" r="2" fill="#F2F2F2"/>
        <circle cx="14" cy="2" r="2" fill="#F2F2F2"/>
        <path d="M1 14C1 14 2.88889 8 9.31111 8C15.7333 8 18 14 18 14" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    loading: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5263 6.49991C24.5639 11.7611 22.7613 18.4886 17.5 21.5262C12.2388 24.5638 5.51132 22.7611 2.47375 17.4999C-0.563811 12.2387 1.23882 5.5112 6.50003 2.47363C11.7613 -0.563933 18.4887 1.23869 21.5263 6.49991ZM5.23488 15.9058C7.39203 19.6421 12.1696 20.9222 15.9059 18.7651C19.6422 16.6079 20.9223 11.8303 18.7652 8.09405C16.608 4.35776 11.8305 3.07761 8.09417 5.23476C4.35788 7.39191 3.07774 12.1695 5.23488 15.9058Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="2.5" y1="5" x2="21" y2="19.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.219223" stop-color="#F08D46"/>
                <stop offset="1" stop-color="#F08D46" stop-opacity="0"/>
            </linearGradient>
        </defs>
    </svg>`
};