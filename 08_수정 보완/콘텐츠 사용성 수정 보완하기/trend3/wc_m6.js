//wc_m6.js

//cou_banner
$(document).ready(function(){
	$(".banner .center .r_ul li").mouseenter(function(){
		i=$(this).attr("data-b");
		$("img.bn_img").attr("src",i);
	});//mouseenter
});


//tab
$(document).ready(function(){
	$(".tab .center .tab_b:not(:first)").hide();
	$(".tab .center .tab_h ul li:first").prepend("<div class='tri'></div>")
	
	$(".tab .center .tab_h ul li").mouseenter(function(){
		$(".tri").remove();

		cl=$(this).css("border-bottom-color")
		$(this).prepend("<div class='tri'></div>").find(".tri").css("border-bottom-color" ,cl)

		var tt=$(this).attr("data-t");
		//console.log(tt)
		$(".tab .center .tab_b").hide();
		$("#t"+tt).show();
	});//mouse enter leave
});



//aco
$(document).ready(function(){
	$(".aco .center dl dd:not(:first)").hide();
	$(".aco .center dl dt .ne:not(:first)").text("+");
	$(".aco .center dl dt .ne:first").text("-");

	$(".aco .center dl dt").click(function(){
		if ($("+",this).css("display")=="none")
		{
			$(".aco .center dl dd").stop().slideUp(250);
			$("+",this).stop().slideDown(250);
			$(".ne").text("+")
			$(this).find(".ne").text("-")
		} else {
			$("+",this).stop().slideUp(250);
			$(this).find(".ne").text("+")
		}//if	
	});//click
});