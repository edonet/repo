'use strict';


module.exports = {
    url: '/user',
    handler: function* (req, res) {
        yield res.sendFile('./user.html', code => {
            return code.replace(/User/g, 'Hello User!');
        });
    },
    routes: [
        './list',
        {
            url: '/user/about',
            handler: function (req, res) {
                res.sendData({ name: 'about' });
            }
        },
        {
            url: '/user/contact',
            handler: function (req, res) {
                res.sendData({ name: 'contact' });
            }
        }
    ]
};
