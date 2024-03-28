let openShopping=document.querySelector(".shopping");
let closeShopping=document.querySelector(".closeShopping");
let List=document.querySelector(".list");
let ListCard=document.querySelector(".listCard");
let body=document.querySelector("body");
let total=document.querySelector(".total");
let quantity=document.querySelector(".quantity");
 
openShopping.addEventListener('click',()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})

