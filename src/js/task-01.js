const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

const numCategories = categoryItems.length;
console.log(`Number of categories: ${numCategories}`);

categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('ul > li');
  const numElements = categoryElements.length;

  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${numElements}`);
});






