// Config
// Selectors
// store selectors for reference so we only call them once
var $body = document.querySelector('body');
var $header = document.getElementById('#header');
var $nav = document.getElementById('#nav');
var $footer = document.getElementById('#footer');
var words = document.getElementsByClassName('words');
var highlight = document.getElementById('highlighted');
Array.prototype.forEach.call(words, function (element) {
  console.log(element);
  element.innerHTML = element.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');
  element.addEventListener('click', function (eventAction) {
    if (eventAction.target.classList.contains('word')) {
      eventAction.target.classList.toggle('highlighted');
      highlighted.innerHTML = 'Highlighted: ' + element.querySelectorAll('.highlighted').length;
    }
  }, true);
});
// Helpers
var
/**
* @description Test if the body id is something
* @param  		{string}
* @return 		{bool}
*
*/
page = function page(name) {
  if (!name) {
    return $body.getAttribute('id');
  }

  return $body.getAttribute('id') == name;
};
// add a class of 'intro' to the first paragraph
// do this on every page apart from the blog page
if (!page("blog")) {
  document.querySelector(".content > p").classList.add("intro");
}