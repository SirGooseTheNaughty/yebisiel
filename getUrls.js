const picsUrls = {
    home: [],
    lite: [],
    avan: []
};
for (category in picsElems) {
    picsElems[category].forEach(elem => {
        picsUrls[category].push(elem.querySelector('img').src);
    });
};