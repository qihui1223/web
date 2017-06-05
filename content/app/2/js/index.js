// JavaScript Document
$(function(){

/*搜索*/
    $("input").focus(function() {
        if($("input").val()=="请输入...."){
           $(this).val('');
        }
    }).blur(function() {
        if($("input").val()==''){
          $(this).val('请输入....');
        }
    });

});