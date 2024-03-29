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

let product=[
    {
        Id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.jpg',
        price: 120000
    },

    {
        Id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.jpg',
        price: 130000
    }  ,
      {
        Id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.jpg',
        price: 220000
    }  ,
      {
        Id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.jpg',
        price: 1250000
    } , 
    {
        Id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.jpg',
        price: 150000
    },
    {
        Id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.jpg',
        price: 160000
    }
];

let listCards=[];

function initApp(){
 product.forEach((value, key)=>{
    let newDiv=document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML=`
    <img src="image/${value.image}"/>
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Card</button>


    `
    List.appendChild(newDiv);
 })
}
initApp();
function addToCard(key){
 if(listCards[key] == null){
    listCards[key] = product[key];
    listCards[key].quantity=1;

 }
 reloadCard();
}
function reloadCard(){
    listCard.innerHTML="";
    let count= 0;
    let totalPrice=0;
    listCards.forEach((value, key) =>{
        totalPrice= totalPrice + value.price;
        count=count + value.quantity;


        if(value != null){
            let newTab=document.createElement('li');
            newTab.innerHTML=`
            <div><img src="image/${value.image}" /></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
              <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
              <div>${value.quantity}</div>
              <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

            </div>

            
            `;
            listCard.appendChild(newTab);
        }
    })
    total.innerText=totalPrice.toLocaleString();
    quantity.innerText=count;
}