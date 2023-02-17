const links = document.querySelectorAll('.item');
console.log(`Number of categories: `+ links.length);

for (let i = 0; i < links.length; i++){
    console.log(`Category:`+ links[i].firstElementChild.textContent);
    console.log(`Elements:`+ links[i].lastElementChild.children.length);
}