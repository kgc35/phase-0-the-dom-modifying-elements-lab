// Write your code here!
const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1')

newHeader.id = 'victory';
const text = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(text);

document.body.appendChild(newHeader);


