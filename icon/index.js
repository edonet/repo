'use strict';

const
    fs = require('fs'),
    Transfer = require('../utils/transfer'),
    icons = require('./src/config'),
    originStream = new Transfer('./src/index.html');

// for (let icon of icons) {
//     originStream
//         .pipe(code => code.replace(/\$\{(\w+)\}/g, (patt, $1) => icon[$1] || ''))
//         .pipe(`./dist/${icon.name}.html`);
// }

for (let icon of icons) {
    originStream
        .pipe(function* (code) {
            yield new Promise(resolve => setTimeout(() => { console.log(1); resolve(); }, 1000));
            console.log(2);
            return code.replace(/\$\{(\w+)\}/g, (patt, $1) => icon[$1] || '');
        })
        .pipe(`./dist/${icon.name}.html`);
}
