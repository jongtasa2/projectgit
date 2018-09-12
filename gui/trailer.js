//trailer.js

 $(document).ready(function(){
	$(".slider img").click(function(){
		i=$(this).attr("data-src")
		$(".vibox iframe").attr("src",i)
	})

	$(".imgbox img").click(function(){
		$(".contol").show();
		j=$(this).attr("data-msrc")
		$(".contol .mif").attr("src",j)
	})

	$(".contol").click(function(){
		$(".contol").hide();
	})
})//doc

