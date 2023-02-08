import { CategoriesContainer } from "./components/CategoriesContainer.js";

const root = document.getElementById("root");
const categoriesurl = "https://dummyjson.com/products/categories";
fetch(categoriesurl)
.then((response) =>{
    return response.json();
})
.then((value) =>{
    const categoriesContainer = new CategoriesContainer(value);
    categoriesContainer.mount(root);
})
.catch((err) =>{
    console.log("Error Occured:",error);
})
