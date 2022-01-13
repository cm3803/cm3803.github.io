$(document).ready(function(){

	console.log("hello");

	var myFavoriteBook = "A Raisin in the Sun";
	console.log("My favorite book is " +myFavoriteBook)

	/* call this function when clicked*/

	window.onclick = changeBG;

	function changeBG(){
		document.getElementsByTagName("Body")[0].style.backgroundColor = "#C1E3B0";
		document.getElementsByTagName("Body")[0].style.color="pink";
	}



});
