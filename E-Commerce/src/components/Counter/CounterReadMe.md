
# Counter

This component creates a counter element which will increase or decrease the count on pressing respective buttons.

To use this component, use following code:
````
import {Counter} from "Counter.js"

const mycounter = new Counter;
mycounter.mount("root")

<!-- here root represents a DOM element where you want to add/append Cart -->
 ````

## Functions
- #### incrementCount()
increase the counter value when ' + ' button is clicked.

- #### decrementCount()
decrease the counter value when ' - ' button is clicked.

- #### updateCount()
update the counter value in DOM (using innerText)
