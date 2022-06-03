window.onload = function(){
    userId = document.getElementById("id");
    userPw = document.getElementById("pw");
}
var userId="";
var userPw="";

function login(){
    var id = userId.value;
    var pw = userPw.value;
    if(id == "catdrip" || pw == "catdrip"){
       alert("로그인성공!!" + id + "님 어서오세요!");
       location.href ='TopMenu.html';
    }else{
        alert("로그인실패!! 다시 한번 확인하세요!");
    }
   }
   