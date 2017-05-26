layui.use(['element', 'utilFetch'], function(exports) {
    var element = layui.element(); //导航的hover效果、二级菜单等功能，需要依赖element模块
    layer.msg(layui.utilFetch());
    //监听导航点击
    element.on('nav(demo)', function(elem) {
        layer.msg(elem.text());
    });

});
