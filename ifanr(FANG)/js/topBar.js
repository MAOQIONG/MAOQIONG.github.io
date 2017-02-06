/**
 * Created by daugh on 2016/11/6.
 */
(function() {
    var header = $("header");
    var logo_name_p = $("#logo_name_p");
    var logo_name_h1 = $("#logo_name_h1");
    var search_container = $("#search_container");
    var btn_cart = $("#btn_cart");
    var changable_login = $("#changable_login");
    var is_login = "is_login";
    var btn_cart = $("#btn_cart");

    $(window).scroll(function(){
        if($(document).scrollTop()>0){
            header.addClass("fixed");
            logo_name_p.addClass("hide");
            logo_name_h1.addClass("show");
            search_container.addClass("select_search");
            $("#nav_items li a").addClass("items_selected");
            btn_cart.addClass("cart_selected");
            changable_login.addClass("stretched");

        }else if(($(document).scrollTop()<=0)){
            header.removeClass("fixed");
            logo_name_p.removeClass("hide");
            logo_name_h1.removeClass("show");
            search_container.removeClass("select_search");
            $("#nav_items li a").removeClass("items_selected");
            btn_cart.removeClass("cart_selected");
            changable_login.removeClass("stretched");
        }
    });

    // 看看是不是有已经登陆了cookie；
    if(checkCookie(is_login)){
        changable_login.html("");
        changable_login.addClass("logged");
    }else{
        changable_login.removeClass("logged");
    }

    // 查看购物车里边是不是已经有商品了，这个不好，有机会改
    if(checkCookie("total_amount")){
        var c_string = getCookie("product_list");
        btn_cart.addClass("has_goods");
        btn_cart.find("span").html(getCookie("total_amount"));


    }else{
        btn_cart.removeClass("has_goods");
    }
    console.log(checkCookie("total_amount"));


})();