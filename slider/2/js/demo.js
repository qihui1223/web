// JavaScript Document
$(function(){
	
	$("#top .topright li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		});
	$("#btn_right").click(function(){
		/*nextscroll();*/
		var con = $("#content");
			var offset = ($("#content li").width()*-1);
			con.stop().animate({marginLeft:offset},"slow",function(){
				var firstItem = $("#content ul li").first();
				con.find(".flder").append(firstItem);
				$(this).css("margin-left","0px");
				});
		});
		/*function nextscroll(){
			
			}	*/
	$("#btn_left").click(function(){
		var vcon = $("#content");
		var offset = ($("#content li").width()*-1);
			var lastItem = $("#content ul li").last();
			vcon.find(".flder").prepend(lastItem);
			vcon.css("margin-left",offset);
			vcon.animate({marginLeft:"0px"},"slow");
		/*var vcon = $(".v_cont");
		var offset = ($(".v_cont li").width()*-1);
		var lastItem = $(".v_cont ul li").last();
		vcon.find(".flder").prepend(lastItem);
		vcon.css("margin-left",offset);
		vcon.animate({marginLeft:"0px"},"slow")*/
		});
	});


