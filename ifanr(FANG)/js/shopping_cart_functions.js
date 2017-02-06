/**
 * Created by daugh on 2016/11/12.
 */
// 确定商品的数量
//  product_list = ""+product_id+"="+shopping_name+"|"+shopping_src+"|"+colorString+"|"+shopping_amount+"|"+shopping_price+"";
var product_list = "";

function addProductList(product_id,product_name,product_img_src,product_color_string,product_amount,product_price){
    if(checkCookie("product_list")){
        console.log("已经存在product_list了");
        product_list = getCookie("product_list");
        if(product_list.indexOf(product_id)!==-1){
            console.log("已经存在该商品");
            var one_product = getOneProduct (product_id);
            var pre_amount = getProductProperty(product_id,"amount");
            product_amount = Number(pre_amount) + Number(product_amount);
            product_list = product_list.replace(one_product,"");
        }
        product_list += "product_id="+product_id+",product_name="+product_name+",product_img_src="+product_img_src+",product_color_string="+product_color_string+",product_amount="+product_amount+",product_price="+product_price+";";
        addCookie("product_list",product_list,3);

    }else{                                                  // 购物车中没有商品
        console.log("不存在，添加一个");
        if(product_id || product_name || product_img_src || product_color_string || product_amount || product_price){
            product_list = "product_id="+product_id+",product_name="+product_name+",product_img_src="+product_img_src+",product_color_string="+product_color_string+",product_amount="+product_amount+",product_price="+product_price+";";
            addCookie("product_list",product_list,3);
        }
    }
}

// 获得一个已知id的商品，传入的是一个字符串
function getOneProduct (product_id) {
    if(checkCookie("product_list") && getCookie("product_list").indexOf(product_id !==-1)) {
        var product_list = getCookie("product_list");
        var one_product_start =  product_list.indexOf("product_id="+product_id+"");
        var one_product_end = product_list.indexOf(";",one_product_start);
        var one_product = product_list.substring(one_product_start,Number(one_product_end)+1);
    }else{
        alert("无此商品");
        return;
    }
    return one_product;
}

// 获得一个一直id的某个属性
// 第二个参数传入属性名，包括
//product_id,product_name,product_img_src,product_color_string,product_amount,product_price
function getProductProperty(product_id,property_name){
    if(getOneProduct (product_id)){
        var one_product = getOneProduct (product_id);
        var one_product_properties  = one_product.split(",");
        switch(property_name){
            case "id":
                return one_product_properties[0].replace(/\w*=/,"");
                break;
            case "name":
                return one_product_properties[1].replace(/\w*=/,"");
                break;
            case "img_src":
                return one_product_properties[2].replace(/\w*=/,"");
                break;
            case "color":
                return one_product_properties[3].replace(/\w*=/,"");
                break;
            case "amount":
                return one_product_properties[4].replace(/\w*=/,"");
                break;
            case "price":
                return one_product_properties[5].replace(/\w*=/,"").pop();
                break;
        }
    }else{
        alert("无此商品");
    }
}

// 从product_list中删除一件已知id的商品
function removeOneProduct(product_id){
    var to_delete = getOneProduct (product_id);
    var product_list = getCookie("product_list");
    product_list = product_list.replace(to_delete,"");
    addCookie("product_list",product_list,7);
}

// 更新一种商品的数量


addProductList("PD001","iPhone 7","#","red",8,999);
addProductList("PD001","iPhone 7","#","red",2,999);
addProductList("PD002","iPhone 7","#","green",2,999);

console.log(getCookie("product_list"));
// console.log(getOneProduct ("PD001"));
// removeOneProduct("PD001");
// console.log(getCookie("product_list"));



// var pattern = /product_amount=(\d+?),/;
// var str = "product_amount=10,product_name=ljw,product_price=299;";
// pattern.test(str);
// var a = 1000;
// console.log(str.replace(pattern,"product_amount="+a+","));







// function SetOrderForm(item_no,item_name,item_amount,item_price)
// {
//     var cookieString=document.cookie;
//     if (cookieString.length>=4000)
//     {
//         alert("您的订单已满\n请结束此次订单操作后添加新订单！");
//     }
//     else if(item_amount<1||item_amount.indexOf('.')!=-1)
//     {
//         alert("数量输入错误！");
//     }
//     else
//     {
//         var mer_list=ReadOrderForm('24_OrderForm');
//         var Then = new Date();
//         Then.setTime(Then.getTime()+30*60*1000);
//         var item_detail="|"+item_no+"&"+item_name+"&"+item_price+"&"+item_amount;
//         if(mer_list==false)
//         {
//             document.cookie="24_OrderForm="+escape(item_detail)+";expires=" + Then.toGMTString();
//             alert("“"+item_name+"”\n"+"已经加入您的订单！");
//         }
//         else
//         {
//             if (mer_list.indexOf(escape(item_no))!=-1)
//             {
//                 alert('此商品您已添加\n请进入订单修改数量！')
//             }
//             else
//             {
//                 document.cookie="24_OrderForm="+mer_list+escape(item_detail)+";expires=" + Then.toGMTString();
//                 alert("“"+item_name+"”\n"+"已经加入您的订单！");
//             }
//         }
//     }
// }
