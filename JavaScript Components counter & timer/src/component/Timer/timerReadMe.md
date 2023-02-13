# Timer component

In timer class component, the timers is supposed to start when start button is clicked. Timer should stop by clicking stop button. Also, timer is able to reset with the help of reset button.

To use this component use following commands:
```javascript
import { createTimer } from "./component/Timer/Timer.js";

const timer1 = new createTimer();
````



## Functions
- #### startTimer()
The timer value starts when 'Start' button is clicked by calling timer()

- #### stopTimer()
The timer value stops/pauses when 'Stop' button is clicked 

- #### resetTimer()
The timer value resets to zero when 'Reset' button is clicked  

- #### timer()
It is being called when user clicked 'Start' button. It has the business logic to run the timer component. 
