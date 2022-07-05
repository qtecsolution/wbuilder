// INITIALIZING TOGGLE BUTTON
const toggleButton = document.querySelector("#btn-toggle");

// TOGGLE BUTTON TRIGGERED
toggleButton.addEventListener("click", () => {
	// INITIALIZING SIDEBAR, MAIN SECTION AND TOGGLE ICON
	const sidebar = document.querySelector("#desktopsidebar");
	const main = document.querySelector("#main");
  const icon = document.querySelector("#btn-toggle svg");
	const footer = document.querySelector(".footer");
	
	// ADD AND REMOVE ACTIVE CLASS IN TOGGLE ICON
	if(icon.classList.contains('active')) {
		icon.classList.remove('active');
	} else {
		icon.classList.add('active');
	}
	
	// ADD AND REMOVE COLLAPSED CLASS WITH SIDEBAR
	if(sidebar.classList.contains('sidecollapsed')) {
		sidebar.classList.remove('sidecollapsed');
	} else {
		sidebar.classList.add('sidecollapsed');
	}
	
	// ADD AND REMOVE COLLAPSED CLASS WITH MAIN
	if(main.classList.contains('maincollapsed')) {
		main.classList.remove('maincollapsed');
	} else {
		main.classList.add('maincollapsed');
	}
	
	// ADD AND REMOVE COLLAPSED CLASS WITH FOOTER
	if(footer.classList.contains('footercollapsed')) {
		footer.classList.remove('footercollapsed');
	} else {
		footer.classList.add('footercollapsed');
	}
});
