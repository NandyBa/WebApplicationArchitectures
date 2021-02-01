
// Select elements

$borderColor		=	document.getElementById("borderColor");

$bgColor			=	document.getElementById("bgColor");

$boderEndColor		=	document.getElementById("boderEndColor");	

$bgEndColor			=	document.getElementById("bgEndColor");

$startButton		=	document.getElementById("start");

// Animation

$startButton.onclick = function(){
	// Get animation colors

	border_start_color	=	$borderColor.value;

	bg_start_color		=	$bgColor.value;

	border_end_color	=	$boderEndColor.value;

	bg_end_color		=	$bgEndColor.value;

}