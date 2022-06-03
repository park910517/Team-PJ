var ipId;
var ipPw;
var ipRe_pw;
var ipUserName;
var ipEmail;

var id;
var pw;
var re_pw;
var userName;
var email;

window.onload = function(){
    ipId=document.getElementById("id");
    ipPw=document.getElementById("pw");
    ipRe_pw=document.getElementById("re_pw");
    ipUserName=document.getElementById("userName");
    ipEmail=document.getElementById("email");
}

function check(){  
    id=ipId.value;
    pw=ipPw.value;
    re_pw=ipRe_pw.value;
    userName=ipUserName.value;
    email=ipEmail.value;

    var userInfo = 
        "아이디 : "+id+"\n"
        +"비밀번호 : "+pw+"\n"
        +"이름 : "+userName+"\n"
        +"이메일 : "+email+"\n";

        alert(userInfo);

        if(checkId() && checkPw() && checkRe_pw() && checkPwAndRe_pw() && checkName() && checkEmail()){
            alert(id+"님 환영합니다!!회원가입 완료되었습니다!");
        } else {
            alert("회원가입 실패!!다시 한번 확인하시길 바랍니다!");
        }
    }

    function checkId(){
        if(id.length>=6 && id.length<=12){
            console.log("id 일치");
             return true;
        } else {
            console.log("id 미일치");
             return false;
        }
    }

    function checkPw(){
        if(pw.length>=4 && pw.length<=12){
            console.log("pw 일치");
            return true;
        } else {
            console.log("pw 미일치");
            return false;
        }
    }
    
    function checkRe_pw(){
        if(re_pw.length>=4 && re_pw.length<=12){
            console.log("re_pw 일치");
            return true;
        } else {
            console.log("re_pw 미일치");
            return false;
        }
    }

    function checkName(){
        if(userName.length>=2 && userName.length<=12){
            console.log("name 일치");
            return true;
        } else {
            console.log("name 미일치");
            return false;
        }
    }

    function checkEmail(){
        if(email.length>=10 && email.length<=20){
            console.log("email 일치");
            return true;
        } else {
            console.log("email 미일치");
            return false;
        }
    }

    function checkPwAndRe_pw(){
        if(pw == re_pw){
            console.log("pw, re_pw 일치");
            return true;
        } else {
            console.log("pw, re_pw 미일치");
            return false;
        }
    }
    
    function showPopup(){
    window.open("clause.html", "clause", "width=400, height=450, left=750, top=200");
    
}
    function showPopup_1(){
    window.open("Private_Data.html", "private_data", "width=400, height=450, left=750, top=200");
}