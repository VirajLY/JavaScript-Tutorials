import Mount from "../Mount/Mount.js";
import { Smartphone } from "../Smartphone/Smartphone.js";
import Cart from "../Cart/Cart.js";

class SmartphonesContainer extends Mount{
    constructor(data){
        super();
        this.smartphones = data;
        this.addToCart;
    }
    
    render(){
        const smartphonesContainer = document.createElement("div");
        const buttonContainer = document.createElement("div");
        const backButton = document.createElement("a");
        const subContainer = document.createElement("div");
        const cartContainer = document.createElement("div");
        const cartHeading = document.createElement("h1");
        const phonesContainer = document.createElement("div");
        const cart = new Cart(this.cartItems);
        this.addToCart = cart.addToCart.bind(cart);

        smartphonesContainer.classList.add("smartphonesContainer");
        backButton.classList.add("backButton");
        subContainer.classList.add("subContainer");
        cartContainer.classList.add("cartContainer");
        cartHeading.id = "cartHeading";
        phonesContainer.classList.add("phonesContainer");
        buttonContainer.classList.add("buttonContainer")

        backButton.innerText = "Home"
        backButton.href = "../index.html"
        cartHeading.innerHTML = "Cart <i class='fa fa-shopping-cart'></i>"
        
        smartphonesContainer.appendChild(buttonContainer);
        buttonContainer.appendChild(backButton);
        smartphonesContainer.appendChild(subContainer);
        subContainer.appendChild(cartContainer)
        cartContainer.appendChild(cartHeading);
        cart.mount(cartContainer);
        subContainer.appendChild(phonesContainer);
        
        this.smartphones.products.forEach(element => {
            const smartphone = new Smartphone(element,this.addToCart);
            smartphone.mount(phonesContainer);
        });

        return smartphonesContainer;
    }
}
export {SmartphonesContainer};

const url = "https://dummyjson.com/products/category/smartphones";
const smartphonesDiv = document.getElementById("smartphonesDiv");

fetch(url)
.then((resolve) =>{
    return resolve.json();
})
.then((value) =>{
    const smartphonesContainer = new SmartphonesContainer(value);
    smartphonesContainer.mount(smartphonesDiv);
})
.catch((err)=>{
    console.log("Error Occured",err);
})
