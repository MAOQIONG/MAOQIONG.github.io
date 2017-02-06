/**
 * Created by daugh on 2016/11/15.
 */

var mySwiper = new Swiper ('.swiper-container', {
    direction:'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});


// 播放和暂停音乐的功能
var btn_music = document.getElementById("music_player");
var playing_audio = document.getElementById("playing_audio");
var isPlaying = true;
btn_music.onclick = function() {
    if(isPlaying){
        playing_audio.pause();
        btn_music.style.backgroundImage = "url(images/musicBtnOff.png)";
        isPlaying = !isPlaying
    }else{
        playing_audio.play();
        btn_music.style.backgroundImage = "url(images/musicBtn.png)";
        isPlaying = !isPlaying
    }
}
console.log("hello kitty")


// 那个特殊的一页
var toClick = $("#toClick");
var page4_scene1 = $("#page4_scene1")
var page4_scene2 = $("#page4_scene2")

toClick.click(function() {
    toClick.css("display","none");
    page4_scene1.hide();
    page4_scene2.show();
    page4_scene2.find("img").eq(1).css({
        "animation-name":"myFadeIn",
        "animation-duration":"1s",
        "animation-delay":"1s",
    }).on("webkitAnimationEnd",function() {
        $(this).css("visibility","visible")
    })

    page4_scene2.find("img").eq(2).css({
        "animation-name":"myFadeIn",
        "animation-duration":"1s",
        "animation-delay":"2s"
    }).on("webkitAnimationEnd",function() {
        $(this).css("visibility","visible")
    })
})

// 最后一页的那个飞机的动画
var endAvatar = $("#endAvatar");
var endAvatar_img = $("#endAvatar img");

endAvatar_img.on("webkitAnimationEnd",function(){
    endAvatar.css("animation","my_endavatar 2s infinite")
})

// 最后一页隐藏小三角
$(window).scroll(function(){
    console.log(scrollTop());
})



