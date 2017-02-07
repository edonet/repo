'use strict';

module.exports = {
    url: '/user/list',
    handler: function* (req, res) {
        yield res.sendFile('./list.json');
    }
};
