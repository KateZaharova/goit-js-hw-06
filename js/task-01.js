const catList = document.querySelector('#categories');

const catArray = catList.querySelectorAll('li.item');


let elementQty = 0;

catArray.forEach(function(element, index) {
        elementQty += 1;
})
console.log(`Number of categories:`, elementQty);


catArray.forEach(function (element, index) {
    let categoryName = element.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);
    
    let categoryLength = element.lastElementChild.children.length;
    console.log(`Elements: ${categoryLength}`);
})

