import Mount from "./Mount.js";

class Cart extends Mount{
    constructor(cartItems){
        super();
        this.cartItems = [];
        this.cartPrice=0;
        this.cartLength=0;
    }
    addToCart(product){
        console.log(this);
        this.cartItems.push(product);
        const {title, price,thumbnail} = product;
        this.cartPrice = this.cartPrice +price;
        this.cartLength = this.cartItems.length;
        const totalPrice = document.querySelector("#totalPrice")
        const totalProducts = document.querySelector("#totalProducts")
        totalPrice.innerText = `Total Price: ${this.cartPrice}`
        totalProducts.innerText = `No of Items: ${this.cartLength}`
        const container = document.querySelector(".itemContainer")
        const cartDiv = document.createElement("div"); 
        const cartThumbnailDiv = document.createElement("div"); 
        const cartHeadingDiv = document.createElement("div"); 
        const cartItemHeading = document.createElement("h1"); 
        const cartPrice = document.createElement("p"); 
        const cartThumbnail = document.createElement("img"); 
        cartDiv.classList.add("cartDiv")
        cartThumbnailDiv.classList.add("cartThumbnailDiv")
        cartHeadingDiv.classList.add("cartHeadingDiv")
        cartItemHeading .id = "cartItemHeading";
        cartPrice.id = "cartPrice";
        cartThumbnail.id = "cartThumbnail";
        cartItemHeading.innerText = title;
        cartPrice.innerHTML = "Price: " + price;
        cartThumbnail.src = thumbnail;
        cartThumbnail.alt = thumbnail;
        container.appendChild(cartDiv);
        cartDiv.appendChild(cartThumbnailDiv);
        cartThumbnailDiv.appendChild(cartThumbnail);
        cartDiv.appendChild(cartHeadingDiv)
        cartHeadingDiv.appendChild(cartItemHeading);
        cartHeadingDiv.appendChild(cartPrice);
    }
    render(){
        
        const itemContainer = document.createElement("div");
        const totalCartDiv = document.createElement("div")
        const totalPrice = document.createElement("h1")
        const totalProducts = document.createElement("h1")
        itemContainer.classList.add("itemContainer");
        totalCartDiv.classList.add("totalCartDiv")
        totalPrice.id = "totalPrice";
        totalProducts.id = "totalProducts";


        totalPrice.innerText =  `Total Price: ${this.cartPrice}`;
        totalProducts.innerText = `No of Items: ${this.cartLength}`;
        itemContainer.appendChild(totalCartDiv);
        totalCartDiv.appendChild(totalPrice);
        totalCartDiv.appendChild(totalProducts);
        return itemContainer;
        
    }
}
export default Cart;