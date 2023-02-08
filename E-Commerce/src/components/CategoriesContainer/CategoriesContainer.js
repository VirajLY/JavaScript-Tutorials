import Mount from "./Mount/Mount.js";
import { Category } from "./Category/Category.js";

class CategoriesContainer extends Mount{
    constructor(data){
        super();
        this.categories = data;
    }
    render(){
        let category="";
        const categoriesContainer = document.createElement("div");
        const categoriesHeading = document.createElement("h1");
        const categories = document.createElement("div");

        categoriesContainer.classList.add("categoriesContainer");
        categoriesHeading.id = "categoriesHeading";
        categories.classList.add("categories");

        categoriesHeading.innerText = "Select Category";

        categoriesContainer.appendChild(categoriesHeading);
        categoriesContainer.appendChild(categories);

        this.categories.forEach(element => {
            category = new Category(element);
            category.mount(categories);
        });

        return categoriesContainer;

        
    }
}
export {CategoriesContainer};

