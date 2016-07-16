var $ = require('jquery');
var config = require('../../scripts/modules/config.js');

module.exports = {
    init: function() {
        $('.pageHeader').each(function() {
            var header = $(this),
                mainMenu = header.find('.pageHeader__mainMenu'),
                mainMenuContainer = header.find('.pageHeader__mainMenuContainer'),
                mainMenuItems = mainMenu.find('.pageHeader__mainMenuItem'),
                mainMenuToggle = header.find('.pageHeader__mainMenuToggle'),
                mobileBreackpoint = 799;

            mainMenuToggle.click(function(){
                if (config.currentWindowWidth > mobileBreackpoint) return;
                mainMenuContainer.toggleClass('pageHeader__mainMenuContainer_opened');
                mainMenuContainer.height(config.currentWindowHeight);
                $('body').toggleClass('body_fixed');
            });

            mainMenuItems.each(function(currentItemIndex) {
                var mainMenuItem = $(this),
                    mainMenuLink = mainMenuItem.find('.pageHeader__mainMenuLink'),
                    mainMenuSubmenuItems = mainMenuItem.find('.pageHeader__mainMenuSubmenuItem');

                mainMenuLink.click(function(event) {
                    if (mainMenuLink.attr('href') != 'javascript:void(0)') return;
                    event.preventDefault();

                    mainMenuItems.filter(function(index){
                        var item = $(this);
                        if (index != currentItemIndex) closeMainMenuSubmenu(item);
                    });
                    if (mainMenuItem.hasClass('pageHeader__mainMenuItem_opened')){
                        closeMainMenuSubmenu(mainMenuItem);
                    } else {
                        openMainMenuSubmenu(mainMenuItem);
                    }
                });

                mainMenuSubmenuItems.each(function(currentItemIndex){
                    var mainMenuSubmenuItem = $(this),
                        mainMenuSubmenuLink = mainMenuSubmenuItem.find('.pageHeader__mainMenuSubmenuLink');

                    mainMenuSubmenuItem.hover(function(){
                        if (config.currentWindowWidth() <= mobileBreackpoint) return;
                        mainMenuSubmenuItem.addClass('pageHeader__mainMenuSubmenuItem_opened');
                    }, function(){
                        if (config.currentWindowWidth() <= mobileBreackpoint) return;
                        mainMenuSubmenuItem.removeClass('pageHeader__mainMenuSubmenuItem_opened');
                    });

                    mainMenuSubmenuLink.click(function(event){
                        if (config.currentWindowWidth() > mobileBreackpoint || mainMenuSubmenuLink.attr('href') != 'javascript:void(0)') return;
                        event.preventDefault();

                        mainMenuSubmenuItems.filter(function(index){
                            var item = $(this);
                            if (index != currentItemIndex) closeMainMenuSubmenuItem(item);
                        });
                        if (mainMenuSubmenuItem.hasClass('pageHeader__mainMenuSubmenuItem_opened')){
                            closeMainMenuSubmenuItem(mainMenuSubmenuItem);
                        } else {
                            openMainMenuSubmenuItem(mainMenuSubmenuItem);
                        }
                    });
                });
            });
        });

        function closeMainMenuSubmenu(mainMenuItem){
            var mainMenuSubmenuContainer = mainMenuItem.find('.pageHeader__mainMenuSubmenuContainer');
            mainMenuSubmenuContainer.height(0);
            setTimeout(function(){
                mainMenuItem.removeClass('pageHeader__mainMenuItem_opened');
            }, 300);
        }
        function openMainMenuSubmenu(mainMenuItem){
            var mainMenuSubmenuContainer = mainMenuItem.find('.pageHeader__mainMenuSubmenuContainer'),
                mainMenuSubmenu = mainMenuItem.find('.pageHeader__mainMenuSubmenu');
            mainMenuItem.addClass('pageHeader__mainMenuItem_opened');
            setTimeout(function(){
                mainMenuSubmenuContainer.height(mainMenuSubmenu.height() + 10);
            }, 300);
        }
        function closeMainMenuSubmenuItem(mainMenuSubmenuItem){
            var mainMenuSubmenu = mainMenuSubmenuItem.find('.pageHeader__mainMenuSubSubmenu'),
                mainMenuSubmenuLinkHeight = mainMenuSubmenu.find('.pageHeader__mainMenuSubSubmenuLink').height();
            mainMenuSubmenuItem.height(mainMenuSubmenuLinkHeight);
            setTimeout(function(){
                mainMenuSubmenuItem.removeClass('pageHeader__mainMenuSubmenuItem_opened');
            }, 300);
        }
        function openMainMenuSubmenuItem(mainMenuSubmenuItem){
            var mainMenuSubmenu = mainMenuSubmenuItem.find('.pageHeader__mainMenuSubSubmenu'),
                mainMenuSubmenuLinkHeight = mainMenuSubmenu.find('.pageHeader__mainMenuSubSubmenuLink').height();
            mainMenuSubmenuItem.addClass('pageHeader__mainMenuSubmenuItem_opened');
            setTimeout(function(){
                mainMenuSubmenuItem.height(mainMenuSubmenu.height() + mainMenuSubmenuLinkHeight);
            }, 300);
        }
    }
};
