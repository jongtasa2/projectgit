//main.js


//main banner
$(document).ready(function(){
	bh=$(".item").height();
	bc=$(".item").length;
	pg=0;

	function bnop(){
		pg++;
		if (pg==5)
		{
			pg=1
			$(".slider").css("top","0px")
		}//if
		$(".slider").animate({"top":-bh*pg});
	}//func
	
	setInterval(function(){bnop()},3000)
})//doc



$(document).ready(function(){

})//doc



