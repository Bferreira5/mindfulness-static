
// Config

// Selectors
// store selectors for reference so we only call them once


const words = document.getElementsByClassName('words');
const highlight = document.getElementById('highlighted');


Array.prototype.forEach.call(words, (element) => {
  console.log(element);
  element.innerHTML = element.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');

  element.addEventListener('click', function(eventAction) {
    if (eventAction.target.classList.contains('word')) {
      eventAction.target.classList.toggle('highlighted');
      highlighted.innerHTML = 'Highlighted: ' + element.querySelectorAll('.highlighted').length;
    }
  }, true);
});
