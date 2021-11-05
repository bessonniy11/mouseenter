let rounItems = document.querySelectorAll('.body__item');

for (let index = 0; index < rounItems.length; index++) {
  let rounItem = rounItems[index];
  let svgFills = document.querySelectorAll('.svgfill');
  let descTitle = document.querySelectorAll('.description__title');
  let descText = document.querySelectorAll('.description__text');
  rounItem.addEventListener("mouseenter", function (e) {
    rounItem.classList.add('_active');
    svgFills[index].classList.add('_active');
    descTitle[index].classList.add('_active');
    descText[index].classList.add('_active');

  });
  rounItem.addEventListener("mouseleave", function (e) {
    rounItem.classList.remove('_active');
    svgFills[index].classList.remove('_active');
    descTitle[index].classList.remove('_active');
    descText[index].classList.remove('_active');
  });

}