let carts = document.querySelectorAll('.add to cart');
let products = [
    {
    name: 'mario toy',
    tag: 'mario',
    price: 15,
    inCart: 0
}, 
    {
    name: 'luigi toy',
    tag: 'luigi',
    price: 13,
    inCart: 0
}, ];
for (let i=0; i < carts.length; i++) {  
       carts[i] .addeventlistener('click', () => {
        cartnumbers(products[i]);
       } )
    }
    function onloadcartnumbers() {
        let productnumbers=localStorage.getItem('cartnumbers');
    if (productnumbers){
        document.querySelector('.cart span').textContent = productnumbers; 
    }
    }
    
function cartnumbers (product) {
    let productnumbers=localStorage.getItem('cartnumbers');
productnumbers = parseInt(productnumbers);
if(productnumbers){
  localStorage.setItem('cartnumbers', productnumbers + 1);  
  document.querySelector('.cart span').textContent = productnumbers + 1;
} 
else {
    localStorage.setItem('cartnumbers',1);
    document.querySelector('.cart span').textContent=1;
}
    

}
onloadcartnumbers()