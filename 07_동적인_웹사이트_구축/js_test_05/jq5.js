//jq5.js

$(document).ready(function(){
	$(".sub, .bc").hide();

	$(".gnb li, .bc").mouseenter(function(){
		$(".sub, .bc").stop().slideDown(300);
	})//me

	$(".gnb, .bc").mouseleave(function(){
		$(".sub, .bc").stop().slideUp(300);
	})//ml
});