$(document).ready(function(){

	console.log("hello");

	var myFavoriteBook = "A Raisin in the Sun";
	console.log("My favorite book is " +myFavoriteBook)

	$("body p").highlight("Barnard (class of 2025)", { className: 'highlight' });
	$("body p").highlight("Architecture", { className: 'highlight' });
	// specify class name (case sensitive)
	// $("body p").highlight("Barnard", { className: 'youtube', caseSensitive: true });

	$(document).ready(function() {
   // unnecessary if you load all your scripts at the bottom of your page
	});
	/* call this function when clicked

	window.onclick = changeBG;

	function changeBG(){
		document.getElementsByTagName("Body")[0].style.backgroundColor = "#C1E3B0";
		document.getElementsByTagName("Body")[0].style.color="pink";
	}

	*/



});
