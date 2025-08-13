const subHeading = document.createElement('h3');
const paraText1 = document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(paraText1);
subHeading.style.fontStyle = 'italic';
const divs1 = document.getElementsByTagName('div');
const firstDiv = divs1[0];
const mainHeading = document.querySelector('h1');
firstDiv.insertBefore(subHeading, mainHeading.next);

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits:4');
para.appendChild(paraText);
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);