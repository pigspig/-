$(function () {
    // 获取当前所有item
    var items = $('.carousel-inner .item');
   // 监听屏幕大小改变
    $(window).on('resize',function () {
        // 1.获取当前屏幕的宽度
        var width = $(window).width();
        // 2.判断屏幕的宽度
        if (width>=768) {
            // 说明非移动端
            // 为每一个item添加子元素
            $(items).each(function (index,value) {
                var item = $(this);
                // 获取当前自定义属性中 存储的图片路径
                var imgSrc = item.data('largeImage');
                // 添加非移动端的子元素
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("background-image", "url('" + imgSrc + "')"));
            });
        }
        else {
            $(items).each(function (index,value) {
                var item = $(this);
                var imgSrc = item.data('smallImage');
                item.html($('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>'))
            });
}}).trigger('resize');
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });
    $('[data-toggle="tooltip"]').tooltip();
    // 添加移动端的滑动操作
    var startX, endX;
    var carousel_inner = $(".carousel-inner")[0];
    // 获取当前轮播图
    var carousel = $(".carousel");
    carousel_inner.addEventListener("touchstart",function (e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function (e) {
        endX = e.changedTouches[0].clientX;
        if (endX-startX > 0) {
            carousel.carousel('prev');
        }
        else if (endX - startX < 0) {
            carousel.carousel('next');
        }
    });

    // 计算产品块导航项的原始宽度
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find('li');
    var totalWidth = 0;
    lis.each(function (index,value) {
        totalWidth = totalWidth + $(value).innerWidth();

    });
    ul.width(totalWidth);
    // 使用插件
    var myScroll = new IScroll('.tabs_parent',{
        scrollX:true,scrollY:false,
    });
});
