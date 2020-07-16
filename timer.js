"use strict";
const audio = new Audio("./st.mp3");
audio.volume = 0.32;
const $timer = document.getElementById("timer");
let time_remaining = 1600;

$timer.addEventListener("click", function _linster () 
{
	timer();
	backgroundColorAnimation();
	$timer.removeEventListener("click", _linster);
});

function timer ()
{
	time_remaining--;
	if (time_remaining <= 0) {
		$timer.innerHTML = "Time to Take a Break";
		audio.play();
		return;
	}

	$timer.innerHTML = time_remaining;
	setTimeout(timer, 1000);
	
}
