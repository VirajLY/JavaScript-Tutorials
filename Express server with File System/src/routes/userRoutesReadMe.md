
# Users routes

It decides which function should be called on a particular http request.
## It will call following functions - 
- 'getAllUsers' function when http get method is received on "/users" endpoint.

- 'validateUser' & 'createUser' function when http post method is received on "/users/:id" endpoint

- 'getUserById' function when http get method is received on "/users/:id" endpoint

- 'updateUser'  function when http patch method is received on "/users" endpoint

- 'deleteUser'  function when http delete method is received on "/users" endpoint
