function changeBgTimer() {
	// Get current hour
	var currentTime = new Date().getHours();
	
	// Change bg of Header Nav Footer
	var list = document.querySelectorAll('.background_t');
	for (var i=0; i<list.length; i++) {
		if (7 <= currentTime && currentTime < 20) {
			list[i].style.backgroundColor = "#1a2329;";
		}
		else {
			list[i].style.backgroundColor = "#10171c";
		}
	}
	// Change bg of Sub Nav
	var sublist = document.querySelectorAll('.sub-menu');
	for (var i=0; i<sublist.length; i++) {
		if (7 <= currentTime && currentTime < 20) {
			sublist[i].style.backgroundColor = "#1a2329;";
		}
		else {
			sublist[i].style.backgroundColor = "#10171c";
		}
	}
}