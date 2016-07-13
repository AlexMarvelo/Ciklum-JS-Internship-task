class App {
    constructor(){
        this.pageHeader = require('../blocks/pageHeader/pageHeader.js');
        this.pageFooter = require('../blocks/pageFooter/pageFooter.js');
        this.subscribe = require('../blocks/subscribe/subscribe.js');
    }

    init(){
        this.pageHeader.init();
        this.pageFooter.init();
        this.subscribe.init();
    }
}

const myApp = new App();
myApp.init();
