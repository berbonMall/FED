/**
 *      Project: FED
 *     FileName: autoIframeHeight
 *         Desc: iframe高度自适应
 *       Author: guofan
 *        Email: hiafanti@gmail.com
 *      Version: 1.0.0
 *         Date: 9:25
 */
define(['jquery'], function(jQuery) {
    /**
     * 设置iframe高度
     * @param  {string} id iframe的id
     */
    function setIframeScrollHeight(id) {
        var iframe = jQuery(id),
            scrollHeight;
            try{
                scrollHeight = iframe[0].contentWindow.document.body.scrollHeight;
                iframe.css({
                    height : scrollHeight
                });
            }catch(err) {
                console.log('获取iframe的scrollHeight异常！');
            }

    }
    return {
        setHeight : setIframeScrollHeight
    }
});