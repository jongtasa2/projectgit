//actor.js

 $(document).ready(function(){
	$("dt #opbt").click(function(){
		//$(this).hide();
		//$(this).next().show();
		//$(this).parents("dt").next().show();
		if ($(this).parents("dt").next().css("display")==("none"))
		{
			$(this).html("Close <span>∧</span>")
			$(this).parents("dt").next().show();
		} else {
			$(this).html("Open <span>∨</span>")
			$(this).parents("dt").next().hide();
		}
		
	})

/*
	$("dt #clbt").click(function(){
		//$(this).hide();
		//$(this).prev().show();
		$(this).parents("dt").next().hide();
		
	})*/
})//doc




