$(function() {
	jQuery.focus = function(slid) {
		var sWidth = 960 //$(slid).width(); //获取焦点图的宽度（显示面积）
		var len = $(slid).find("ul li").length; //获取焦点图个数
		var index = 0;
		var picTimer;
		
		//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
		var btn = "<div class='flex-control-nav flex-control-paging'>";
		for(var i=0; i < len/3; i++) {
			var ii = i+1;
			btn += "<li><a>"+ii+"</a></li>";
		}
		btn += "</div></div>";
		$(slid).append(btn);
	
		//为小按钮添加鼠标滑入事件，以显示相应的内容
		$(slid+" .flex-control-nav li a").click(function() {
			index = $(slid+" .flex-control-nav li a").index(this);
			showPics(index);
		}).eq(0).trigger("click");
	
	
		//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
		$(slid+" ul").css("width",sWidth * (len));
		
		//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
		$(slid).hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if(index == len/3) {index = 0;}
			},4000); //此4000代表自动播放的间隔，单位：毫秒
		}).trigger("mouseleave");
		
		//显示图片函数，根据接收的index值显示相应的内容
		function showPics(index) { //普通切换
			var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
			$(slid+" ul").stop(true,false).animate({"left":nowLeft},500); //通过animate()调整ul元素滚动到计算出的position
			$(slid+" .flex-control-nav li a").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
			$(slid+" .flex-control-nav li a").stop(true,false).animate({"opacity":"0.4"},500).eq(index).stop(true,false).animate({"opacity":"1"},500); //为当前的按钮切换到选中的效果
		}
	
	};
	
});