<script>
function checkpassword(){
var pwd="1234567";//你和朋友约定的密码，写死的
var inpwd=document.getElementById("password").value;//获取输入的代码
if(pwd == inpwd){ //判断一下是否一样
window.location.href="你的url地址，也就是你想让别让你跳到的页面";
}
}
</script>
