/**
 * Created by daugh on 2016/11/6.
 */

// -------------------------------------------- 设置变量 ------------------------------------------------------------------------
    var color_buttons = $("#color_buttons button");
    var btn_cart = $("#btn_cart");
    var minus = $(".minus_sign");
    var plus = $(".plus_sign");
    var put_into_cart = $("#put_into_cart");
    var shopping_src = "../images/detail_02.jpg";
    var shopping_name = $("#product_detail h1").html();
    var colorString;
    var shopping_amount = $("#amount").html();
    var shopping_price = $("#product_detail h2 span").html();
    var product_id;
    var product_list;
    var total_amount = 0;


// -------------------------------------------- 选择颜色 ------------------------------------------------------------------------
    color_buttons.click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        colorString = $(".selected").html();
    });

// -------------------------------------------- 选择数量 ------------------------------------------------------------------------
    plus.click(function () {
        shopping_amount=Number(shopping_amount);
        shopping_amount++;
        $("#amount").html(shopping_amount);
    });
    minus.click(function() {
        if(shopping_amount ==1){
            return;
        }
        shopping_amount=Number(shopping_amount);
        shopping_amount--;
        $("#amount").html(shopping_amount);
    });

// -------------------------------------------- 点击加入购物车 ------------------------------------------------------------------------

    put_into_cart.click(function () {
        // 判断是否登陆，没登陆让他去登陆
        if(!checkCookie("is_login")){
            if(confirm("请先登录，是否直接跳转到登陆界面")){
                window.location.href = "../html/login.html"
                return;
            }else{
                return;
            }
        }
        // 判断是否选择了颜色
        if(colorString == undefined){
            alert("请选择颜色");
            return;
        }
        // 判断商品id
        switch(colorString){
            case "页岩灰":
                product_id = "TREKZ_Titanuim_001";
                break;
            case "深海蓝":
                product_id = "TREKZ_Titanuim_002";
                break;
            case "青藤绿":
                product_id = "TREKZ_Titanuim_003";
                break;
        }
        // 判断一下是不是已经在购物车中添加商品了
        if(checkCookie("product_list")){
            product_list = getCookie("product_list");
        }

        if(product_list){
            if(product_list.indexOf(product_id) != -1){
                var pre_amount = product_list[(product_list.indexOf(colorString)+4)];
                var new_amount = Number(pre_amount) + Number(shopping_amount);
                // 这个是不应该存在的
                if(Number(new_amount) >9){
                    alert("技术不支持，每件商品最多购买9件");
                    return;
                }
                product_list = product_list.substring(0,(product_list.indexOf(colorString)+4))+new_amount+product_list.substring((product_list.indexOf(colorString)+5),product_list.length);
                // 现在的问题是，商品不能加到超过两位数
            }else{
                product_list += "&"+product_id+"="+shopping_name+"|"+shopping_src+"|"+colorString+"|"+shopping_amount+"|"+shopping_price+"";
            }
        }else{
            product_list = ""+product_id+"="+shopping_name+"|"+shopping_src+"|"+colorString+"|"+shopping_amount+"|"+shopping_price+"";
        }
        addCookie("product_list",product_list,7);

        // 每次添加商品改变左上角购物车图标；
        total_amount = Number(btn_cart.find("span").html()) + Number(shopping_amount);
        console.log(btn_cart.find("span").html());
        console.log(shopping_amount);
        if(total_amount !== 0){
            addCookie("total_amount",total_amount,7);
        }
        btn_cart.addClass("has_goods");
        btn_cart.find("span").html(total_amount);
        // 将购物数量重新变成1
        shopping_amount = 1;
        $("#amount").html(1);
    });