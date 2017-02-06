/**
 * Created by daugh on 2016/11/3.
 */
(function(){


    var reg = $("#reg");
    var user_name = $("#user_name");
    var user_name_hint =$("#user_name_hint");
    var user_password = $("#user_password");
    var user_password_hint =$("#user_password_hint");
    var certify_password = $("#certify_password");
    var certify_password_hint = $("#certify_password_hint");
    var email = $("#email");
    var email_hint = $("#email_hint");
    var pass_test_one,pass_test_two,pass_test_three,pass_test_four;
    var btn_submit_reg =$("#btn_submit_reg");
// -----------------------------------------点击注册出现注册框，时刻控制着她在中间----------------------------------------------------
    $("#btn_reg").click(function(){
        reg.fadeIn("slow");
        center(reg,500,350);
    });
    $(window).resize(function(){
        center(reg,500,350);
    });
    center(reg,500,350);

    reg.find("h2 img").on("click",function(){
       reg.fadeOut("slow");
    });

    // 登陆框居中的功能
    function center (obj,width,height) {
        if ($(window).width() > width && $(window).height() > height) {
            obj.css("top", ($(window).height() - height) / 2 + "px");
            obj.css("left", ($(window).width() - width) / 2 + "px");
        } else if($(window).width()<width && $(window).height()>height){
            obj.css("top", ($(window).height() - height) / 2 + "px");
            obj.css("left", "0");
        }else if($(window).width()>width && $(window).height()<height){
            obj.css("left", ($(window).width() - width) / 2 + "px");
            obj.css("top", "0");
        }else{
            obj.css("top", "0");
            obj.css("left", "0");
        }
    }

// --------------------------------------------------------注册验证------------------------------------------------------------

    // 用户名验证
    user_name.focus(function(){
        user_name_hint.html("请输入2-20位用户名");
        user_name_hint.css("color","#999");
        pass_test_one = false;
    }).blur(function(){
        if($(this).val() == ""){
            user_name_hint.html("必须填写用户名");
            user_name_hint.css("color","red");
        }else if(/[0-9a-zA-Z]{2,20}/.test($(this).val())){
            user_name_hint.html("用户名可用");
            user_name_hint.css("color","green");
            pass_test_one = true;
        }else{
            user_name_hint.html("用户名不合法");
            user_name_hint.css("color","red");
        }
    });

    // 密码验证
    user_password.focus(function(){
        pass_test_two = false;
        user_password_hint.html("请输入6-16位密码");
        user_password_hint.css("color","#999");
    }).blur(function(){
        if($(this).val() == ""){
            user_password_hint.html("必须填写密码");
            user_password_hint.css("color","red");
        }else if(/\w{6,16}/.test($(this).val())){
            user_password_hint.css("color","green");
            pass_test_two = true;
            switch(test_password_strength($(this).val())){
                case 4:
                    user_password_hint.html("安全级别  ●●●  高");
                    break;
                case 3:
                    user_password_hint.html("安全级别  ●●○  中");
                    break;
                case 2:
                    user_password_hint.html("安全级别  ●●○  中");
                    break;
                case 1:
                    user_password_hint.html("安全级别  ●○○  低");
                    break;
            }
        }else{
            user_password_hint.html("密码不满足规则");
            user_password_hint.css("color","red");
        }
    });

    // 验证密码强度的功能
    function test_password_strength (string){
        var difficulty = 0;
        if(/[0-9]/.test(string)){
            difficulty++;
        }
        if(/[a-z]/.test(string)){
            difficulty++;
        }
        if(/[A-Z]/.test(string)){
            difficulty++;
        }
        if(/[^0-9a-zA-Z]/.test(string)){
            difficulty++;
        }
        return difficulty;
    }

    // 密码确认
    certify_password.focus(function() {
        pass_test_three = false;
        certify_password_hint.html("请再次确认密码");
        certify_password_hint.css("color","#999");
    }).blur(function() {
        if($(this).val() == user_password.val() && $(this).val()){
            certify_password_hint.html("通过验证");
            certify_password_hint.css("color","green");
            pass_test_three = true;
        }else{
            certify_password_hint.html("请再次确认密码");
            certify_password_hint.css("color","red");
        }
    });


    // 邮箱认证
    email.focus(function(){
        pass_test_four = false;
        email_hint.html("请输入您的常用邮箱");
        email_hint.css("color","#999");
    }).blur(function() {
        if(!$(this).val()){
            email_hint.html("必须填写邮箱");
            email_hint.css("color","red");
        }else if(/\w+@\w+\.\w+/.test($(this).val())){
            email_hint.html("邮箱可用");
            email_hint.css("color","green");
            pass_test_four = true;
        }else{
            email_hint.html("请正确输入邮箱");
            email_hint.css("color","red");
        }
    });

// ----------------------------------------------------提交注册---------------------------------------------------------------------
    var cookie_user_name = "cookie_user_name";
    var cookie_user_password ="cookie_user_password";

    btn_submit_reg.click(function(e) {
        e.preventDefault();
        if(pass_test_one && pass_test_two && pass_test_three && pass_test_four) {
            var new_user_name,new_user_password;
            if(checkCookie(cookie_user_name)){
                deleteCookie(cookie_user_name);
                deleteCookie(cookie_user_password);
            }
            new_user_name = user_name.val();
            new_user_password = user_password.val();
            addCookie(cookie_user_name,new_user_name,1);
            addCookie(cookie_user_password,new_user_password,1);
            reg.hide();
            alert("注册成功，请登录")
        }
    });

// ----------------------------------------------------登陆功能----------------------------------------------------------------------
    var btn_login = $("#btn_login");
    var login_user_name =$("#login_user_name");
    var login_user_password = $("#login_user_password");


    btn_login.click(function() {
        // if(!checkCookie(cookie_user_name)){
        //     alert("请先注册");
        // }
        if(login_user_name.val() && login_user_name.val() == getCookie(cookie_user_name) && login_user_password.val() == getCookie(cookie_user_password)){
            addCookie("is_login",true,7);
            if(confirm("登陆成功,是否跳转")){
                // window.open("../index.html","_self");
                window.location.href = "../html/index.html"
            }else{
                alert("登陆失败，请确保用户名和密码");
                return;
            }
        }else{
            alert("登陆失败")
        }
    })

})();