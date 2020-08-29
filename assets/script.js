let i = 0;
document.querySelectorAll(".elem").forEach(e => {
	e.setAttribute("onclick", "focusDestination("+(i++)+")")
})

window.onload = function() {
	document.querySelector(".loading").remove()
	focusDestination(2)
}

function focusDestination(arg) {
	let elems = document.querySelectorAll(".elem")
	for (var i = 0; i < elems.length; i++) {
		elems[i].classList.remove("focus")
		if(i<arg) {
			elems[i].style.left = "-100%"
			if( i+1 == arg ) {
				elems[i].style.left = "-20%"
			}
		} else if(i>arg) {
			elems[i].style.left = "150%"
			if( i-1 == arg ) {
				elems[i].style.left = "120%"
			}
		} else {
			elems[i].style.left = "50%"
			elems[i].classList.add("focus")
		}
	}
}
