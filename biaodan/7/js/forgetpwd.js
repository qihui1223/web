// JavaScript Document
function checkMobile(){ //校验手机
  	  var msg = document.getElementById("mobileMsg");
	  msg.innerHTML = "";
	  var mobile = document.getElementById("mobile").value;
	  
	  if(mobile.length==0) { 
		msg.innerHTML = "<font color = 'red'>手机号码不能为空!</font>"; 
		return false; 
		} 
	if(mobile.length!=11) { 
		msg.innerHTML = "<font color = 'red'>请输入有效的手机号码，需是11位!</font>"; 
		return false; 
		} 
	/*var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	if(!myreg.test(mobile )) { 
		msg.innerHTML = "<font color = 'red'>请输入有效的手机号码!</font>"; 
		return false; 
		}*/
		
	return true;	 
}

function checkVerify(){ //校验图片验证码	
	var msg = document.getElementById('verifyMsg');
		msg.innerHTML = "";  
	var verify = document.getElementById('verify').value;  
	if(verify == "") {  
	   msg.innerHTML = "<font color = 'red'>图片验证码不能为空</font>";  
	   return false;  
	}
	/*$.ajax({  
		url:'',  
		type:'GET',  
		cache:false,   
		dataType: 'json',
		success: function(data) {
			if(data){
				
			}
		}
	});*/
	return true;  	
}

$(function(){
	/*短信验证码*/
	var wait=60;
	function time(t){
		if(wait==0){
			 t.removeAttribute("disabled");
			 t.value="免费获取验证码";
			 wait=60;
		}else{
			 t.setAttribute("disabled",true);
			 t.value="重新发送("+wait+"s)";
			 wait--;
			 setTimeout(function(){
				 time(t)
			 },1000);
		}
	}
	var btn = document.getElementById("getSms");
	btn.onclick = function(){
		if(checkMobile() && checkVerify()){
			time(this);	
		}
	}
		
	/*下一步*/
	$("#wizard").scrollable({
		onSeek: function(event,i){
			$("#status li a").removeClass("On").eq(i).addClass("On");
		},
		onBeforeSeek:function(event,i){//正则验证
			if(i===1){
				var pass = $("#pass").val();
				if(checkMobile() === false){
					alert("请输入正确的手机号")
					return false;
				}
				if(checkVerify() === false){
					alert("你的验证码输入不正确")
					return false;	
				}
				/*if(checkMessage() === false){ //短信验证码判断
					alert('短信验证码不正确')
					return false	
				}*/
			}
			if(i===2){
				var newPass = $("#newPass").val();
				var newPass2 = $("#newPass2").val();
				if(newPass==""){
				    alert("请输入密码！");
					return false;
				}
				if(newPass.length < 6){
					alert('密码长度必须大于6位');
					return false;
				}
				if(newPass2 !== newPass){
				    alert('两次密码不一致');
					return false;	
				}
			}
		}
	});
	$("#sub").click(function(){
		$.ajxa({//保存新密码跳转页面
			
			})
	});
});




