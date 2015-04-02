/**
 *      Project: FED
 *     FileName: buildMenu
 *         Desc: 创建左侧导航
 *       Author: guofan
 *        Email: hiafanti@gmail.com
 *      Version: 1.0.0
 *         Date: 9:57
 */
define(['jquery'], function(jQuery) {
    /**
     * 创建左侧菜单
     * @param  {string} iframeId iframe的id
     * @param  {string} menuId 菜单的id
     * @param  {object} menuData 菜单原始数据，由webConfig.js中menuList配置
     * @return {array}      返回处理后的数组
     */
    function buildMenu(iframeId, menuId, menuData) {
        var menuArray = [],
            menuItem,
            linkList,
            iframe = jQuery(iframeId),
            menu = jQuery(menuId);
        jQuery.each(menuData, function(index, itme) {
            menuArray.push("<li><a href='javascript:;' data-src='"+itme.html+"' class='link'>"+itme.name+"</a></li>");
        });
        menu.append(menuArray.join(''));
        menuItem = menu.find("li");
        menuItem.eq(0).addClass("active");
        linkList=jQuery(".link");
        linkList.on("click", function(){
            var src = jQuery(this).data("src")+".html";
            menuItem.removeClass("active");
            jQuery(this).parent().addClass("active");
            iframe.attr({src:src});
        });
    }
    return {
        buildMenu: buildMenu
    }
});