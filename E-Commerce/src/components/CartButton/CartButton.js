import Mount from "./Mount.js";
import UniqueId from "./UniqueId.js";
import Cart from "./Cart.js";
import { SmartphonesContainer } from "./SmartphonesContainer.js";

class CartButton extends Mount{
    constructor(addToCart){
        super();
        this.onclickEvent = addToCart;
    }
    render(){
        const cartButtonContainer = document.createElement("div");
        const cartButton = document.createElement("button")

        cartButtonContainer.classList.add("cartButtonContainer");
        cartButton.classList.add("cartButton");
        cartButton.id = UniqueId({prefix:"cartButton"});
        cartButton.innerText = "Add to Cart";
        cartButtonContainer.appendChild(cartButton);

        // cartButton.onclick = this.onclickEvent;
        cartButton.addEventListener("click",this.onclickEvent);
        // cartButton.onclick = new Cart();

        return cartButtonContainer;
    }
}
export default CartButton;