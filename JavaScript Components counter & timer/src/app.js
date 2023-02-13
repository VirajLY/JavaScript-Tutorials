import {Counter} from "./component/Counter/Counter.js";
import { createTimer } from "./component/Timer/Timer.js";
import { createRadioOptions } from "./component/RadioButton.js";

 const radio1 = new createRadioOptions();
 radio1.mount(document.getElementById("radioContainer"));

document.body.addEventListener("change",function(e){
    let target = e.target;
    switch (target.id){
        case radio1.counterButtonId:
            console.log("hehe",radio1.rootId);
            if(root.firstChild){
                console.log("hehe",radio1.rootId);
                root.removeChild(root.firstElementChild);
            }
            const counter1 = new Counter();
            counter1.mount(document.getElementById("root"));
            break;
        case radio1.timerButtonId:
            if(root.firstChild){
                console.log("hehe",radio1.rootId);
                root.removeChild(root.firstElementChild)
            }
            const timer1 = new createTimer();
            timer1.mount(document.getElementById("root"));
            break;
    }
})
function myFunction() {
    var element = document.body;
    element.classList.toggle("darkTheme");
}
document.getElementById("toggle").onclick = myFunction;