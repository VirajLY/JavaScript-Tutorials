import { generateUniqueId } from "../UniqueId.js";

class Counter{
    constructor(){
        this.count = 0;
        this.counterValueId = generateUniqueId({prefix:"counterValue"});
        this.mountFlag = false;
    };
    incrementCount(){
        this.count = this.count + 1;
        this.updateCount();
    }
    decrementCount(){
        this.count = this.count - 1;
        this.updateCount();
    }
    updateCount(){
        document.getElementById(this.counterValueId).innerText = `count : ${this.count}`;
    }

    render(){
        const counterContainer = document.createElement("div");
        const counterHeading = document.createElement('h1');
        const counterValue = document.createElement("p");
        const incrementButton = document.createElement("button");
        const decrementButtton = document.createElement("button");

        // attach classes & ids
        counterContainer.classList.add("counterContainer");
        counterHeading.classList.add("counterHeading");
        counterValue.id = this.counterValueId;
        incrementButton.id = generateUniqueId({prefix:"incButton"});
        decrementButtton.id = generateUniqueId({prefix:"decButton"});

        // add inner HTML
        counterHeading.innerText = "Counter";
        counterValue.innerText=`count : ${this.count}`;
        incrementButton.innerText = "+";
        decrementButtton.innerText = "-";

        // add elements in container

        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(decrementButtton);
        counterContainer.appendChild(incrementButton);

        incrementButton.onclick = this.incrementCount.bind(this);
        decrementButtton.onclick = this.decrementCount.bind(this);
        // return the container
        return counterContainer;
    }
    mount(el){
        if (this.mountFlag){
            return;
        }
        this.mountFlag = true;
        if (el) {
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;
    }     
};

export {Counter}

