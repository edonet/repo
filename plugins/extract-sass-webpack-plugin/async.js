'use strict';



class Async {
    constructor(callback) {
        this.state = 'pending';
        this.counter = 0;
        this.callback = callback;
    }

    wait(callback) {
        this.callback = callback;
    }

    mark() {
        return this.counter ++;
    }

    resolve(...args) {
        if (this.state === 'pending') {
            this.counter --;
            this.timeout && clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                if (this.counter <= 0) {
                    this.state = 'resolved';
                    this.callback(...args);
                }
            }, 100);
        }
    }
}

module.exports = Async;
