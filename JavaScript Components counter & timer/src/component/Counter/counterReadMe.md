# Counter component

In counter class component, the counter value is expected to increase/decrease on pressing +/- button.

To use this component use following commands:
```javascript
import {Counter} from "./component/Counter/

const counter1 = new Counter();
````

## Functions
Counter component has following methods.
- #### incrementCount()
It will increase the counter value when '+' button is clicked.

- #### decrementCount()
It will decrease the counter value when '-' button is clicked.

- #### updateCount()
It will update the counter value (using innerText) in the DOM. 
