import { generateUniqueId } from "../UniqueId.js";

class createTimer{
    constructor(){
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        this.flag;
        this.timerId = generateUniqueId({prefix:"timerId"});
        this.secId = generateUniqueId({prefix:"secId"});
        this.minId = generateUniqueId({prefix:"minId"});
        this.hrId = generateUniqueId({prefix:"hrId"})
        this.timerFlag = false;
    };
    startTimer(){
        if(this.flag){
            return;
        }
        this.flag = true;
        this.timer();
    }
    stopTimer(){
        this.flag = false;
    }
    resetTimer(){
        this.flag = false;
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        document.getElementById(this.timerId).innerText = "00";
        document.getElementById(this.secId).innerText = "00 sec";
        document.getElementById(this.minId).innerText = "00 min";
        document.getElementById(this.hrId).innerText = "00 hr";
    }
    timer(){
        if (this.flag){
            this.ms++;
            if (this.ms == 100){
                this.sec++;
                this.ms = 0;
            }
            if (this.sec == 60){
                this.min++;
                this.sec = 0;
                this.ms = 0;
            }
            if (this.min == 60){
                this.hr++;
                this.min = 0;
                this.sec = 0;
                this.ms = 0;
            }
            this.hrString = this.hr;
            this.minString = this.min;
            this.secString = this.sec;
            this.msString = this.ms;

            if (this.hr < 10) {
                this.hrString = "0" +  this.hrString;
            }
      
            if (this.min < 10) {
                this.minString = "0" +  this.minString;
            }
      
            if (this.sec < 10) {
                this.secString = "0" +  this.secString;
            }
      
            if (this.ms < 10) {
                this.msString = "0" +  this.msString;
            }
            document.getElementById(this.timerId).innerText = this.msString;
            document.getElementById(this.secId).innerText = this.secString + " sec";
            document.getElementById(this.minId).innerText = this.minString + " min";
            document.getElementById(this.hrId).innerText = this.hrString + " hr";

            setTimeout(this.timer.bind(this),7)
        }
    }

    render(){
        const timerContainer = document.createElement("div");
        const timerHeading = document.createElement("h1");
        const timerContent = document.createElement("div");
        const timerHr = document.createElement("h1");
        const timerMin = document.createElement("h1");
        const timerSec = document.createElement("h1");
        const timerMs = document.createElement("h1");
        const timerButtons = document.createElement("div");
        const startButton = document.createElement("button");
        const stopButton  = document.createElement("button");
        const resetButton = document.createElement("button");
        // classes & ids
        timerContainer.classList.add("timerContainer");
        timerHeading.classList.add("timerHeading");
        timerContent.id = "timerContent";
        timerHr.id = this.hrId;
        timerMin.id = this.minId;
        timerSec.id = this.secId;
        // timerMs.id = "timerMs";
        timerMs.id = this.timerId;
        timerButtons.classList.add("timerButtons");
        startButton.id = generateUniqueId({prefix:"startButton"});
        stopButton.id - generateUniqueId({prefix:"stopButton"});
        resetButton.id = generateUniqueId({prefix:"resetButton"});
        // innerText
        timerHeading.innerText = "Timer";
        // timerContent.innerText = `${this.hr} hr ${this.min} min ${this.sec} sec ${this.ms}`;
        timerHr.innerText = `${this.hr}0 hr`;
        timerMin.innerText = `${this.min}0 min`;
        timerSec.innerText = `${this.sec}0 sec`;
        timerMs.innerText = `${this.ms}`;
        startButton.innerText = "Start";
        stopButton.innerText = "Stop";
        resetButton.innerText = "Reset";

        // adding elelments to HTML
        timerContainer.appendChild(timerHeading);
        timerContainer.appendChild(timerContent);
        timerContent.appendChild(timerHr);
        timerContent.appendChild(timerMin);
        timerContent.appendChild(timerSec);
        timerContent.appendChild(timerMs);
        timerContainer.appendChild(timerButtons);
        timerButtons.appendChild(startButton);
        timerButtons.appendChild(stopButton);
        timerButtons.appendChild(resetButton);

        startButton.onclick = this.startTimer.bind(this);
        stopButton.onclick = this.stopTimer.bind(this);
        resetButton.onclick = this.resetTimer.bind(this);

        return timerContainer;
    }

    mount(el){
        if(this.timerFlag){
            return;
        }
        this.timerFlag = true;
        if (el){
            el.appendChild(this.render());
            return ;
        }
        document.body.appendChild(this.render());
    }
}

export{createTimer};
