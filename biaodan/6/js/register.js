
function checkName() {  //校验姓名  
	   var msg = document.getElementById('userMsg');
	   msg.innerHTML = "";  
	   var name = document.getElementById('loginId').value;  
	   if(name == "") {  
		  msg.innerHTML = "<font color = 'red'>姓名不能为空</font>";  
		  return false;  
	   }  
	  /*   
	   var pattern = /^[a-zA-Z0-9]{1}[a-zA-Z0-9_]{5,19}$/
	   if(!pattern.test(name)){
		   $("userMsg").innerHTML = "<font color = 'red'>用户名呢称错误</font>"; 
		   return false;
		   }*/
	 return true;	   			   
}  
      
function checkpwd() {  //校验密码  
	  var msg = document.getElementById('psdMsg');
	  msg.innerHTML = "";  
	  var pwd = document.getElementById('pwd').value;  
	  if(pwd == "") {  
		  msg.innerHTML = "<font color = 'red'>密码不能为空</font>";  
		  return false;  
	  }  
	 
	 if(pwd.length < 6) {  
		 msg.innerHTML = "<font color = 'red'>密码长度必须大于6</font>";  
		 return false;  
	  }  
	 return true; 
}  
     
function checkpwd2() { //校验重新输入的密码  
	  var msg = document.getElementById('psd2Msg');
	  msg.innerHTML = "";
	  var pwd = document.getElementById('pwd').value;  
	  var psd2 = document.getElementById('psd2').value;  
	  if(psd2 != pwd) {  
		   msg.innerHTML = "<font color = 'red'>两次输入的密码不一致</font>";  
		   return false;  
	   } 
	　 return true;	    
}  
    
function checkIdCard(){  //校验身份证
	   var msg = document.getElementById('idMsg');
	   	   msg.innerHTML = "";  
	   var idCard = document.getElementById('idCard').value;  
	   if(idCard == "") {  
		  msg.innerHTML = "<font color = 'red'>身份证不能为空</font>";  
		  return false;  
	   }  
	   /*if(isNaN(idCard)) {  
		  msg.innerHTML = "<font color = 'red'>输入的不是数字</font>";  
		  return false;  
	   }  */ 
	   var len = idCard.length, re; 
	　　 if (len == 15) {
	　　 	re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
	　　 	}else if (len == 18) {
	　　 		re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
	　　 	}else {
				msg.innerHTML = "<font color = 'red'>输出的位数不对</font>";
				return false;
			} 
	　/*　 var a = idCard.match(re); 
	　　 if (a != null) { 
		　　 if (len==15) { 
		　　 var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
		　　 var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
		　　 } else { 
		　　 var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
		　　 var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
		　　 } 
	　　 	if (!B) {
				alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); 
				return false;
			} 
	　　 } 
	　　 if(!re.test(idCard)){
			alert("身份证最后一位只能是数字和字母。");
			return false;
		 }
		*/ 
	　　 return true;
}
		 
function checkMobile (){ //校验手机
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
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	if(!myreg.test(mobile )) { 
		msg.innerHTML = "<font color = 'red'>请输入有效的手机号码!</font>"; 
		return false; 
		}
		
	return true;	 
}


function check() { 
	   var name = document.getElementById("loginId").value;    
       var pwd = document.getElementById("pwd").value;  
       var psd2 = document.getElementById("psd2").value;  
	   var mobile  = document.getElementById("mobile").value; 
           
       var userMsg = document.getElementById("userMsg");
	   	   userMsg.innerHTML = ""; 
		    
       var psdMsg = document.getElementById("psdMsg");
	   	   psdMsg.innerHTML = "";  
		   
       var psd2Msg = document.getElementById("psd2Msg");
	   	   psd2Msg.innerHTML = "";  
		   
       var mobileMsg = document.getElementById("mobileMsg");
	   	   mobileMsg.innerHTML = "";  
       
	   if(name == "") {  
          userMsg.innerHTML = "<font color = 'red'>姓名不能为空</font>";  
           return false;  
       }  
       
	 /*  //正则验证 
       var pattern = /^[a-zA-Z0-9]{1}[a-zA-Z0-9_]{5,19}$/
	   if(!pattern.test(name)){
		   $("userMsg").innerHTML = "<font color = 'red'>用户名呢称错误</font>"; 
		   return false;
		   }*/
	   
	   if(pwd == "") {  
           psdMsg.innerHTML = "<font color = 'red'>密码不能为空</font>";  
           return false;  
       }  
         
       if(pwd.length < 6) {  
           psdMsg.innerHTML = "<font color = 'red'>密码长度必须大于或者等于6</font>";  
           return false;  
       }  
         
       if(psd2 != pwd) {  
           psd2Msg.innerHTML = "<font color = 'red'>两次输入的密码不一致</font>";  
           return false;  
       }   
	   
      if (mobile == "") { 
		   mobileMsg.innerHTML = "<font color = 'red'>手机号不能为空</font>";
		   return false;
	  }
            
}  

//验证码输入框失去焦点，去除清除按钮;获取焦点时，若有值则显示清除按钮
/*$('#auth_code').blur(function() {
    setTimeout(function() {  //进行延时处理，时间单位为千分之一秒
        $('#auth_code').parent().find('.icon-clear').hide();
    }, 100)
}).focus(function(){
    if($(this).val() != ''){
        $(this).parent().find('.icon-clear').css('display', 'table-cell');
    }
});*/