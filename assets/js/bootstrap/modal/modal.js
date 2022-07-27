const deleteModal = document.querySelector('#deleteModal');
const confirmModal = document.querySelector('#confirmedDeleteModal');
const deleteButton = document.querySelector('#btn-delete');

// INITIALIZING MODAL TO BOOTSTARP
const deleteItem = new bootstrap.Modal(deleteModal);
const confirmItem = new bootstrap.Modal(confirmModal);


deleteButton.addEventListener('click', showConfirmedModal);


// SHOW SIGNUP
function showConfirmedModal() {
	deleteItem.hide();
	confirmItem.show();
}