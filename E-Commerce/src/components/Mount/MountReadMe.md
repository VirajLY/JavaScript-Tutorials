
# Mount

This component mounts the ' this.render() ' to the specified DOM element.

To use this component, use following code:
````
import {Mount} from "Mount.js"

class ClassName extends Mount{
<!-- your logic for ClassName -->
}

const myclass = new ClassName();
myclass.mount("root")
<!-- here root represents a DOM element where you want to add/append Cart -->
 ````

## Functions
- mount(el)
It takes DOM element as an argument.
If element is given then it will append this.render()  to the specifies element. 
Otherwise it will append this.render() to the document's body.
