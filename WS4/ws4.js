
// Select elements

$borderColor		=	document.getElementById("borderColor");

$bgColor			=	document.getElementById("bgColor");

$boderEndColor		=	document.getElementById("boderEndColor");	

$bgEndColor			=	document.getElementById("bgEndColor");

$startButton		=	document.getElementById("start");

$zoomButton			=	document.getElementById("zoom");

// Animation
// get div to must be animate
$tobeanimated		=	document.getElementById("tobeanimated");

$startButton.onclick = function(){
	// Get animation colors

	border_start_color	=	$borderColor.value;

	bg_start_color		=	$bgColor.value;

	border_end_color	=	$boderEndColor.value;

	bg_end_color		=	$bgEndColor.value;

	

	// Animate the div
	// Information: we cannot write it directly in the css file because animation depends to user input and must be change without form submition

	var style = document.createElement('style');
	style.type = 'text/css';
	var keyFrames = '\
	@-webkit-keyframes animateColor {\
		0%, 100% {\
			background-color: '+bg_start_color+';\
			border-color: '+border_start_color+'\
		}\
		50% {\
		background-color: '+bg_end_color+';\
		border-color: '+border_end_color+'\
		}\
	}';
	style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
	document.getElementsByTagName('head')[0].appendChild(style);
	$tobeanimated.style.setProperty("animation", getComputedStyle($tobeanimated).animation+', animateColor 5s linear');
	setInterval(function(){ style.remove(); }, 5000); //renome added style to be able to reuse the function
	
}

$zoomButton.onclick = function(){
	$tobeanimated.style.setProperty("animation", getComputedStyle($tobeanimated).animation+', scaleAnimation 5s linear');
}
