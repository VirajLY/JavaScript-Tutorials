
# Express server with File System

In this project, a REST api is created using underlying file system.
Data is stored in a json file in the project folder.

The project replicates the express server and the API provides CRUD capability

For this project, we will require two built-in modules. i.e. fs and express:
```javascript
const express = require("express);

const fs = require("fs")
 ```

 In this project there are 4 components in src:
- controllers:
Controllers are responsible for defining the responses to requests from Routers.

- helpers:
helpers do some backend task to support our module.

- model:
we can connect with database to insert a data with the help of model.
  
- routes:
routes decide which function should be called on a particular http request.
