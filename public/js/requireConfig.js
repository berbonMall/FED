;(function(){
    require.config({
        baseUrl : './../',
        paths : {
            'jquery' : './public/js/jquery.min',
            'dialog' : './jsScaffold/dialog/js/dialog',
            'dialog-plus' : './jsScaffold/dialog/js/dialog-plus',
            'artTemplate' : './jsScaffold/artTemplate/js/template',
            'autoIframeHeight' : './public/js/autoIframeHeight',
            'buildMenu' : './public/js/buildMenu',
            'amd-cmd' : './public/js/amd-cmd',
        },
        shim: {
            'dialog': {
                exports: 'dialog'
            },
            'dialog-plus': {
                exports: 'dialog-plus'
            }
        }
    });
})();