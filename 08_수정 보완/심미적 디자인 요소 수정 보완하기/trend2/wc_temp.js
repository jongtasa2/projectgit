//wc_temp.js

$(document).ready(function(){
	$(".sub, .bc").hide();
	$("#last").mouseenter(function(){
		$(".sub, .bc").stop().slideDown(300);
	});//ME
	$("#last").mouseleave(function(){
		$(".sub, .bc").stop().slideUp(300);
	});//ML
	$(".top_menu a:last").click(function(){
		alert("준비 중");
	});//
	$(".bt").click(function(){
		$(".pop").fadeOut(300);
	});//
});