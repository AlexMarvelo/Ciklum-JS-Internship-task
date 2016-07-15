class App {
    constructor(){
        this.pageHeader = require('../blocks/pageHeader/pageHeader.js');
        this.subscribe = require('../blocks/subscribe/subscribe.js');
        this.pageFooter = require('../blocks/pageFooter/pageFooter.js');
    }

    init(){
        this.pageHeader.init();
        this.subscribe.init();
        this.pageFooter.init();
    }
}

const myApp = new App();
myApp.init();
