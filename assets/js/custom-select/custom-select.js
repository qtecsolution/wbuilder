// selector for select-dropdown list
const selectOne = document.querySelector('#selectdropdown-1'); 

document.addEventListener( 'click', function(e) {
	if (e.target.matches('.select-option')) {
		selectOne.querySelector('#selected-item-1').innerHTML = e.target.innerHTML;
	}
});

// remove all active classes on the other select-dropdowns
selectOne.addEventListener('click', function(e) {
	if (selectOne !== e.target) {
		e.target.classList.remove("is-active");
	}
	
	selectOne.classList.toggle("is-active");
});


// selector for select-dropdown list
const selectTwo = document.querySelector('#selectdropdown-2'); 

document.addEventListener( 'click', function(e) {
	if (e.target.matches('.option')) {
		selectTwo.querySelector('#selected-item-2').innerHTML = e.target.innerHTML;
	}
});

// remove all active classes on the other select-dropdowns
selectTwo.addEventListener('click', function(e) {
	if (selectTwo !== e.target) {
		e.target.classList.remove("is-active");
	}
	
	selectTwo.classList.toggle("is-active");
});

// this event is to close all open select-options when the user clicks off.
document.body.addEventListener('click', function(e) {
	if(!e.target.closest('.select-dropdown')) {
		selectOne.classList.remove("is-active");
	}

	if(!e.target.closest('.select-dropdown')) {
		selectTwo.classList.remove("is-active");
	}
});