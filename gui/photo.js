//photo.js

 $(document).ready(function(){
	$(".imgbox img").click(function(){
		$(".olbg").show();
		i=$(this).attr("src")
		$(".olbg .chgimg").attr("src",i);
	});

	$(".olbg .chgimg").click(function(){
		$(".olbg").hide();
	});
})//doc



