const accordionItems = document.querySelectorAll('.card__accordion-item');
const accordionHeaders = document.querySelectorAll('.card__accordion-header');

/** Function to add/remove active class to the accordion item selected **/
const handleActiveClassAccordionItems = (indexItemSelected) => {
  if (accordionItems[indexItemSelected].classList.contains('active')) {
    accordionItems[indexItemSelected].classList.add('hide');
    setTimeout(() => {
      accordionItems[indexItemSelected].classList.remove('active', 'hide');
    }, 360);
  } else {
    accordionItems[indexItemSelected].classList.add('active');
  }
};

/** Event Listeners **/
accordionHeaders.forEach((item, index) => {
  item.addEventListener('click', () => handleActiveClassAccordionItems(index));
});
