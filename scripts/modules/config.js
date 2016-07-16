var $ = require('jquery');

module.exports = {
    currentWindowWidth: function(){
        return $(window).width();
    },

    currentWindowHeight: function(){
        return $(window).height();
    }
};
