import { generateUniqueId } from "./UniqueId.js";

class createRadioOptions{
    constructor(){
        this.isMounted = false;
        this.counterButtonId = generateUniqueId({prefix:"counter"});
        this.timerButtonId = generateUniqueId({prefix:"timer"});
        this.rootId = generateUniqueId({prefix:"root"});
    }
    render(){   
    const radioContainer = document.createElement("div");
    const radioHeading = document.createElement("h1");
    const radioContent = document.createElement("div");
    const counterButton = document.createElement("input");
    const counterButtonHeading = document.createElement("h2");
    const timerButton = document.createElement("input");
    const timerButtonHeading = document.createElement("h2");
    const root = document.createElement("div");

    radioContainer.classList.add("radioContainer");
    radioHeading.classList.add("radioHeading");
    radioContent.classList.add("radioContent");
    // counterButton.id = "counterButton";
    counterButton.id = this.counterButtonId;
    counterButton.type = "radio";
    counterButton.name = "option"
    counterButtonHeading.id = "counterButtonHeading";
    // timerButton.id = "timerButton";
    timerButton.id = this.timerButtonId;
    timerButton.setAttribute("type","radio");
    timerButton.setAttribute("name","option");
    timerButtonHeading.id = "timerButtonHeading";
    root.id = "root";
    // root.id = this.rootId
    

    radioHeading.innerText = "Select Option"
    counterButtonHeading.innerText = "Counter";
    timerButtonHeading.innerText = "Timer";

    radioContainer.appendChild(radioHeading);
    radioContainer.appendChild(radioContent);
    radioContent.appendChild(counterButton);
    radioContent.appendChild(counterButtonHeading);
    radioContent.appendChild(timerButton);
    radioContent.appendChild(timerButtonHeading);
    radioContainer.appendChild(root);

    return radioContainer;
}

mount(el){
    if(this.isMounted){
        return;
    }
    this.isMounted=true;
    if(el){
        el.appendChild(this.render());
        return ;
    }
    document.body.appendChild(this.render());
    return;

}
}

export{createRadioOptions};