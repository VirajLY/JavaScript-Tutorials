import Mount from "../Mount/Mount.js";
import UniqueId from "../UniqueId/UniqueId.js";

class Counter extends Mount{
    constructor(){
        super();
        this.count = 0;
        this.counterValueId = UniqueId({prefix:"counterValue"});
    };
    incrementCount(){
        this.count = this.count + 1;
        this.updateCount();
    };
    decrementCount(){
        if(this.count == "0"){
            return;
        }
        this.count = this.count - 1;
        this.updateCount();
    };
    updateCount(){
        document.getElementById(this.counterValueId).innerText = `${this.count}`;
    };
    render(){
        const counterContainer = document.createElement("div");
        const counterValue = document.createElement("p");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");

        counterContainer.classList.add("counterContainer");
        counterValue.id = this.counterValueId;
        incrementButton.id = UniqueId({prefix:"incButton"})
        decrementButton.id = UniqueId({prefix:"decButton"})

        counterValue.innerText =  `${this.count}`;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";

        counterContainer.appendChild(decrementButton);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(incrementButton);

        incrementButton.onclick = this.incrementCount.bind(this);
        decrementButton.onclick = this.decrementCount.bind(this);

        return counterContainer;
    }
}

export default Counter;
