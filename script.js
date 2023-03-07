var btn1=document.getElementById('btn1')

function toggle1(){
    if(btn1.style.color=="red"){
        btn1.style.color="black"
    }
    else{
        btn1.style.color="red"
    }
}

var btn2=document.getElementById('btn2')

function toggle2(){
    if(btn2.style.color=="red"){
        btn2.style.color="black"
    }
    else{
        btn2.style.color="red"
    }
}

var btn3=document.getElementById('btn3')

function toggle3(){
    if(btn3.style.color=="red"){
        btn3.style.color="black"
    }
    else{
        btn3.style.color="red"
    }
}


// get the cart and items list elements

const cartList = document.querySelector('.cart-container ul');
const itemsList = document.getElementById('items');

// creating an empty array to store items 

let cartItems = [];

// adding event listeners to each button

const addToCartButtons=document.querySelectorAll('.addtocart');
addToCartButtons.forEach(button =>{
    button.addEventListener('click' , (event)=>{
    const item = event.target.parentNode;
    const itemName = item.querySelector('h3').textContent;
    const itemPrice= parseInt(item.querySelector('.price span').textContent);
    const itemData= {name:itemName,price:itemPrice};



    //check if item already exists in cart

    const existingItem = cartItems.find(i => i.name === itemData.name);
    if (existingItem){
        existingItem.quantity++;
    }else{
        itemData.quantity = 1;
        cartItems.push(itemData);
    }

    //update the cart display 

    displayCart();
    
    });
});


//update the cart display with current cart items 

function displayCart(){
    cartList.innerHTML = '';
    cartItems.forEach(item =>{
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
        cartList.appendChild(li);
    });

    //update the total price display 

    const totalPrice = cartItems.reduce((total,item) => total + (item.price * item.quantity) , 0)

    document.getElementById('total').textContent = totalPrice.toFixed(2);
}

// empty cart button

const emptyCartButton = document.getElementById('emptycart');
emptyCartButton.addEventListener('click', () => {
    cartItems = [];
    displayCart();
});


