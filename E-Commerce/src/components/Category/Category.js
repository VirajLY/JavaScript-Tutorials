import Mount from "../Mount/Mount.js";
import UniqueId from "../UniqueId/UniqueId.js";

class Category extends Mount{
    constructor(data){
        super();
        this.category = data;
    }
    render(){
        const category = document.createElement("div");
        const categoryLink = document.createElement("a")

        category.classList.add("category");
        categoryLink.classList.add("categoryLink");

        categoryLink.innerText = this.category;
        categoryLink.href = "./category/" + this.category + ".html";
        category.appendChild(categoryLink);

        return category;
        
    }
}
export {Category};
