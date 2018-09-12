//guide.js



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function(){
	$(".column .container img").click(function(){
		var i=$(this).attr("src");

		$(".bb").css("display","block");
		$(".bb .mdbox img").attr("src",i);
	});

	$(".bb").click(function(){
		$(this).css("display","none");
	});

	$(".bb .mdbox p a").click(function(){
		var j=$(".bb .mdbox img").attr("src")
		$(this).attr("href",j)
	})
})//doc



