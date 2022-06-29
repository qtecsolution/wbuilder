// DESKTOP SEARCH SUGGESTIONS

const input = document.querySelector('#desktopsearch-field');
const suggestion = document.querySelector('.desktop-suggestions');

input.addEventListener('keyup', (e) => {
  let suggestionData = e.target.value;

  if(suggestionData) {
    suggestion.classList.add('active');
  } else {
    suggestion.classList.remove('active');
  }
});