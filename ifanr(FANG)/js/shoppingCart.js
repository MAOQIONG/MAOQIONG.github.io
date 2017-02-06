/**
 * Created by daugh on 2016/11/6.
 */
(function() {
    if(checkCookie("product_list")){
        var product_list_string = getCookie("product_list");
    }

    // 确定cookie 里面有几个id
    function certify_number (list,string) {
        var number = 0;
        for(var key in list){
            if(string.indexOf(list[key]) !== -1){
                number++;
            }
        }
        return number;
    }
    var tr_number = certify_number(["TREKZ_Titanuim_001","TREKZ_Titanuim_002","TREKZ_Titanuim_003"],product_list_string)
    switch(tr_number){
        case 1:
           $( ".lineTwo").show();
            break;
        case 2:
            $(".lineTwo").show();
            $(".lineThree").show();
            break;
        case 3:
            $(".lineTwo").show();
            $(".lineThree").show();
            $(".lineFour").show();
            break;
        default:
            $(".lineTwo").hide();
            $(".lineThree").hide();
            $(".lineFour").hide();
            break;
    }
    // 商品的数组，每个商品以id和各种属性组成一个长字符串的形式存在
    var product_array = product_list_string.split("&");
    // 得到一个购物车表格的数组
    var trs = $("#cart table .line_style_02");
    // 得到一个带有商品属性的数组
    var product_array_with_property = [];

    for(var k=0; k<Number(tr_number); k++){
        var product_property;
        product_property = product_array[k].split("|");
        product_property[0] = product_property[0].substring(product_property[0].indexOf("=")+1,product_property[0].length);
        product_array_with_property.push(product_property);
    }
    switch(tr_number){
        case 1:
            $(".lineTwo img").attr("src",(product_array_with_property[0][1]));
            $(".lineTwo").find($(".width_02")).html((product_array_with_property[0][0]));
            $(".lineTwo").find($(".width_03")).html((product_array_with_property[0][2]));
            $(".lineTwo").find($(".width_04")).html((product_array_with_property[0][3])+"*" + (product_array_with_property[0][4]));
            $(".lineTwo").find($(".width_05")).html(Number(product_array_with_property[0][3])*Number(product_array_with_property[0][4]));
            break;
        case 2:
            $(".lineTwo img").attr("src",(product_array_with_property[0][1]));
            $(".lineTwo").find($(".width_02")).html((product_array_with_property[0][0]));
            $(".lineTwo").find($(".width_03")).html((product_array_with_property[0][2]));
            $(".lineTwo").find($(".width_04")).html((product_array_with_property[0][3])+"*" + (product_array_with_property[0][4]));
            $(".lineTwo").find($(".width_05")).html(Number(product_array_with_property[0][3])*Number(product_array_with_property[0][4]));
            $(".lineThree img").attr("src",(product_array_with_property[1][1]));
            $(".lineThree").find($(".width_02")).html((product_array_with_property[1][0]));
            $(".lineThree").find($(".width_03")).html((product_array_with_property[1][2]));
            $(".lineThree").find($(".width_04")).html((product_array_with_property[1][3])+"*" + (product_array_with_property[0][4]));
            $(".lineThree").find($(".width_05")).html(Number(product_array_with_property[1][3])*Number(product_array_with_property[0][4]));
            break;
        case 3:
            $(".lineTwo img").attr("src",(product_array_with_property[0][1]));
            $(".lineTwo").find($(".width_02")).html((product_array_with_property[0][0]));
            $(".lineTwo").find($(".width_03")).html((product_array_with_property[0][2]));
            $(".lineTwo").find($(".width_04")).html((product_array_with_property[0][3])+"*" + (product_array_with_property[0][4]));
            $(".lineTwo").find($(".width_05")).html(Number(product_array_with_property[0][3])*Number(product_array_with_property[0][4]));
            $(".lineThree img").attr("src",(product_array_with_property[1][1]));
            $(".lineThree").find($(".width_02")).html((product_array_with_property[1][0]));
            $(".lineThree").find($(".width_03")).html((product_array_with_property[1][2]));
            $(".lineThree").find($(".width_04")).html((product_array_with_property[1][3])+"*" + (product_array_with_property[0][4]));
            $(".lineThree").find($(".width_05")).html(Number(product_array_with_property[1][3])*Number(product_array_with_property[0][4]));
            $(".lineFour img").attr("src",(product_array_with_property[1][1]));
            $(".lineFour").find($(".width_02")).html((product_array_with_property[2][0]));
            $(".lineFour").find($(".width_03")).html((product_array_with_property[2][2]));
            $(".lineFour").find($(".width_04")).html((product_array_with_property[2][3])+"*" + (product_array_with_property[0][4]));
            $(".lineFour").find($(".width_05")).html(Number(product_array_with_property[2][3])*Number(product_array_with_property[0][4]));
            break;
    }
})();