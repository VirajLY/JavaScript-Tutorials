import Mount from "./Mount/Mount.js";
import Counter from "./Counter/Counter.js";
import CartButton from "./CartButton/CartButton.js";

class Smartphone extends Mount{
    constructor(data,addToCart){
        super();
        this.smartphone = data;
        this.addToCart = addToCart;
    }
    render(){
        const smartphoneContainer = document.createElement('div');
        const thumbnailContainer = document.createElement('div');
        const thumbnail = document.createElement("img")
        const smartphoneContent = document.createElement('div');
        const smartphoneid = document.createElement('p');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const stock = document.createElement('p');
        const category = document.createElement('p');

        smartphoneContainer.classList.add("smartphoneContainer");
        thumbnailContainer.classList.add("thumbnailContainer");
        thumbnail.id = "thumbnail";
        smartphoneContent.classList.add("smartphoneContent");
        smartphoneid.id = "smartphoneid";
        title.id = "title";
        description.id = "description";
        price.id = "price";
        stock.id = "stock";
        category.id = "category";

        thumbnail.src = this.smartphone.thumbnail;
        thumbnail.alt = this.smartphone.thumbnail;
        // smartphoneid.innerHTML = "<b>Id: </b> " + this.smartphone.id ;
        title.innerText = this.smartphone.title;
        description.innerText = this.smartphone.description;
        price.innerHTML = "<b>Price:</b> " + this.smartphone.price + " Rs";
        stock.innerHTML = "<b>Stock:</b> " + this.smartphone.stock;
        category.innerHTML = "<b>category:</b> " + this.smartphone.category;

        smartphoneContainer.appendChild(thumbnailContainer);
        thumbnailContainer.appendChild(thumbnail);
        smartphoneContainer.appendChild(smartphoneContent);
        smartphoneContent.appendChild(smartphoneid);
        smartphoneContent.appendChild(title);
        smartphoneContent.appendChild(description);
        smartphoneContent.appendChild(price);
        smartphoneContent.appendChild(stock);
        smartphoneContent.appendChild(category);

        const counter = new Counter();
        counter.mount(smartphoneContent);
        const cartButton = new CartButton(() =>{
            this.addToCart(this.smartphone);
        });
        cartButton.mount(smartphoneContent);

        return smartphoneContainer;
    }

}
export{Smartphone};
