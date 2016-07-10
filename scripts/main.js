requirejs.config({
    baseUrl: 'js',
    paths: {
        pageHeader: 'modules/pageHeader',
        pageFooter: 'modules/pageFooter'
    }
});

requirejs([
    'pageHeader',
    'pageFooter'
], function(pageHeader, pageFooter) {
    pageHeader.init();
    pageFooter.init();
});
