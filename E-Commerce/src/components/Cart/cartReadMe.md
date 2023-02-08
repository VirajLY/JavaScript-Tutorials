
# Cart

This component creates a cart element and also has a function that will add to product to the cart when we press add to cart button.


To use this component, use following code:
````
import {Cart} from "Cart.js"

const cart = new Cart();
cart.mount(root);
<!-- here root represents a DOM element where you want to add/append Cart -->
 ````

## Functions
- addToCart(product)
The function takes product as an argument to add that product to the cart. 

It also updates total cart price & total no of products.
