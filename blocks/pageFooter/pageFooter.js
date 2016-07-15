var $ = require('jquery');

module.exports = {
    init: function() {
        $('.pageFooter').each(function(){
            var footer = $(this),
                menu = footer.find('.pageFooter__lists'),
                menuItems = menu.find('.pageFooter__menuBlock');
            menuItems.each(function(){
                var item = $(this),
                    title = item.find('.pageFooter__colTitle');
                title.click(function(){
                    item.toggleClass('pageFooter__menuBlock_opened');
                });
            });
        });
    }
};
