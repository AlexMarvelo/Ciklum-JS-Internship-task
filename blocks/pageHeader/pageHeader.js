module.exports = {

init: function() {
    $('.pageHeader').each(function() {
        var header = $(this),
            mainMenu = header.find('.pageHeader__mainMenu'),
            mainMenuItems = mainMenu.find('.pageHeader__mainMenuItem');
        mainMenuItems.each(function(currentItemIndex) {
            var mainMenuItem = $(this),
                mainMenuLink = mainMenuItem.find('.pageHeader__mainMenuLink'),
                mainMenuSubmenuContainer = mainMenuItem.find('.pageHeader__mainMenuSubmenuContainer'),
                mainMenuSubmenu = mainMenuItem.find('.pageHeader__mainMenuSubmenu'),
                mainMenuSubmenuItems = mainMenuItem.find('.pageHeader__mainMenuSubmenuItem');

            mainMenuLink.click(function() {
                mainMenuItems.filter(function(index){
                    var item = $(this);
                    if (index != currentItemIndex) closeMainMenuSubmenu(item);;
                });
                if (mainMenuItem.hasClass('pageHeader__mainMenuItem_opened')){
                    closeMainMenuSubmenu(mainMenuItem);
                } else {
                    openMainMenuSubmenu(mainMenuItem);
                }
            });

            mainMenuSubmenuItems.each(function(){
                var mainMenuSubmenuItem = $(this),
                    mainMenuSubmenuLink = mainMenuSubmenuItem.find('.pageHeader__mainMenuSubmenuLink');
                mainMenuSubmenuItem.hover(function(){
                    mainMenuSubmenuItem.addClass('pageHeader__mainMenuSubmenuItem_opened');
                }, function(){
                    mainMenuSubmenuItem.removeClass('pageHeader__mainMenuSubmenuItem_opened');
                });
            });
        });
    });

    function closeMainMenuSubmenu(mainMenuItem){
        var mainMenuSubmenuContainer = mainMenuItem.find('.pageHeader__mainMenuSubmenuContainer'),
            mainMenuSubmenu = mainMenuItem.find('.pageHeader__mainMenuSubmenu');
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
}

}
