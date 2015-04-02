;(function(win){
    //常用路径配置
    var root = {
        jsScaffold : './../jsScaffold/',
        cssScaffold : './../cssScaffold/',
        htmlScaffold : './../htmlScaffold/',
        product : './../product/',
        public : './'
    };
    //常用菜单配置
    var menuList = {
        //js组件菜单
        jsScaffoldMenu : [
            {
                name : "弹出层",
                html : "dialog",
                resource : root.jsScaffold + "dialog.html"
            },
            {
                name : "HTML模板",
                html : "artTemplate",
                resource : root.jsScaffold + "artTemplate.html"
            },
            {
                name : "提示组件",
                html : "tip",
                resource : root.jsScaffold + "tip.html"
            }
        ],
        //css组件菜单
        cssScaffoldMenu : [
            {
                name : "按钮",
                html : "button",
                resource : root.cssScaffold + "dialog.html"
            },
            {
                name : "表单",
                html : "form",
                resource : root.cssScaffold + "form.html"
            }
        ],
        //html组件菜单
        htmlScaffoldMenu : [
            {
                name : "常用页面布局",
                html : "layout",
                resource : root.htmlScaffold + "layout.html"
            },
            {
                name : "列表",
                html : "list",
                resource : root.htmlScaffold + "list.html"
            }
        ],
        //产品组件菜单
        productMenu : [
            {
                name : "搜索框",
                html : "search",
                resource : root.product + "search.html"
            },
            {
                name : "购物车",
                html : "cart",
                resource : root.product + "cart.html"
            }
        ],
    };
    win.menuList = menuList;
    win.root = root;
})(window);