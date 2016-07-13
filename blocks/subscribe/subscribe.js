var $ = require('jquery');

module.exports = {
    init: function() {
        $('.subscribe').each(function(){
            var subscribeBlock = $(this),
                form = subscribeBlock.find('.subscribe__form'),
                inpBlocks = form.find('.subscribe__inpWrapper');

            inpBlocks.each(function(){
                var inpBlock = $(this),
                    label = inpBlock.find('.subscribe__inpLabel'),
                    input = inpBlock.find('.subscribe__inp');
                input.focusin(function(){
                    label.addClass('subscribe__inpLabel_onFocus');
                });
                input.focusout(function(){
                    label.removeClass('subscribe__inpLabel_onFocus');
                });
                if (!input[0]) return;
                input[0].oninput = function(){
                    var input = $(this)[0];
                    if (input.value.length > 0){
                        label.addClass('subscribe__inpLabel_onTextValue');
                    } else {
                        label.removeClass('subscribe__inpLabel_onTextValue');
                    }
                };
            });
        });
    }
};
