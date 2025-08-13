const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign ="right";

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';
const basketHeading = document.querySelector('h2');
basketHeading.style.color = 'brown';

const evenFruitsItem = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenFruitsItem.length; i++){
    evenFruitsItem[i].style.backgroundColor = 'brown';
    evenFruitsItem[i].style.color = 'white';
}

const oddFruitsItem = document.querySelector('.fruit:nth-child(odd)');
for (let i = 0; i < oddFruitsItem; i++){
    oddFruitsItem[i].style.backgroundColor = 'white';
}