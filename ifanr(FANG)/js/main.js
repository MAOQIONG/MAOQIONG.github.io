(function(){
// -----------------------------------------------轮播图-------------------------------------------------------------------------
	var timer;
	$("#pic_container img").css("display","none");
	$("#pic_list li div").css("display","none");
	$("#pic_container img").eq(0).css("display","block");
	$("#pic_list li div").eq(0).css("display","block");
	var is_on_show =1;

	// 开启轮播
	startTimer();

	// 暂停轮播
	$("#pic_list").mouseenter(function(){
		endTimer();
	}).mouseleave(function() {
		startTimer();
	});

	// 确定
	$("#pic_list li").click(function(){
		var parent = this.parentNode;
		var children = $(parent).children();
		var is_to_show;
		for(var j=0; j<children.length; j++){
			if(children[j] == this){
				is_to_show = j;
				break;
			}
		}
		if(is_to_show > (is_on_show)){
			$("#pic_container img").css("display","none");
			$("#pic_list li div").css("display","none");

			$("#pic_list li div").eq(is_to_show).css("display","block");
			$("#pic_container img").eq(is_on_show).show().animate({"margin-left":"-730px"});
			$("#pic_container img").eq(is_to_show).css({display:"block",marginLeft:"730px"}).animate({"margin-left":"0"});
			is_on_show = is_to_show;
		}else if(is_to_show < (is_on_show)){
			$("#pic_container img").css("display","none");
			$("#pic_list li div").css("display","none");

			$("#pic_list li div").eq(is_to_show).css("display","block");
			$("#pic_container img").eq(is_on_show).show().animate({"margin-left":"730px"});
			$("#pic_container img").eq(is_to_show).css({display:"block",marginLeft:"-730px"}).animate({"margin-left":"0"});
			is_on_show = is_to_show;
		}else if(is_to_show == (is_on_show)){
			return;
		}

	});

	// 改变图像的函数
	function changeView (num) {
		var pre = num <=0 ? $("#pic_container img").length-1 : num-1;
		$("#pic_container img").css("display","none");
		$("#pic_list li div").css("display","none");

		$("#pic_list li div").eq(num).css("display","block");
		$("#pic_container img").eq(pre).css("display","block").animate({"margin-left":"-730px"});
		$("#pic_container img").eq(num).css({display:"block",marginLeft:"730px"}).animate({"margin-left":"0"});
	}
	//设置定时器的函数
	function startTimer(){
		timer = setInterval(function() {
			if(is_on_show>=$("#pic_container img").length-1){
				is_on_show = -1;
			}
			is_on_show++;
			changeView (is_on_show);

		},2000)
	};
	// 取消定时器的函数
	function endTimer(){
		if(timer){
			clearInterval(timer);
		}
	}



// --------------------------------------------nav的那个小三角--------------------------------------------------------------------------
	var is_nav_botton_clicked = false;
	$("#nav_bottom button").click(function() {
		if(!is_nav_botton_clicked){
			$("#nav_bottom_ul_container ul").animate({"marginLeft":"-280px"},"slow");
			$("#nav_bottom button").html("<");
			is_nav_botton_clicked = !is_nav_botton_clicked;
		}else{
			$("#nav_bottom_ul_container ul").animate({"marginLeft":"0"},"slow");
			$("#nav_bottom button").html(">");
			is_nav_botton_clicked = !is_nav_botton_clicked;
		}
	})


	// 没实现
	/*
	var icon1 = $("#icon1");
	icon1.mouseenter(function() {
		icon1.css("background","#50e3c2 url(images/bottom_icon_01.gif) no-repeat center");
	}).mouseleave(function () {
		icon1.css("background","#787878 url(images/bottom_icon_01.gif) no-repeat center")
		console.log("离开了")
	})
	*/

})();