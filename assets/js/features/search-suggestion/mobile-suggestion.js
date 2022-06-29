// MOBILE SEARCH SUGGESTIONS

const mobInput = document.querySelector('#mobilesearch-field');
const mobSuggestion = document.querySelector('.mobile-suggestions');

mobInput.addEventListener('keyup', (e) => {
  let suggestionInfo = e.target.value;

  if(suggestionInfo) {
    mobSuggestion.classList.add('active');
  } else {
    mobSuggestion.classList.remove('active');
  }
});