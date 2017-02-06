'use strict';


module.exports = {
    url: '/user',
    handler: function* (req, res) {
        yield res.sendFile('./user.html', code => {
            return code.replace(/User/g, 'Hello User!');
        });
    }
};
