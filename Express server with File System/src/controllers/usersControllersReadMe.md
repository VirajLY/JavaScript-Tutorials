# Users controllers

Controllers are responsible for defining the responses to requests from Routers.

## Functions
- #### getAllUsers
It will show all the users data present in the json file on http get method.

- #### getUserById
It will show the data of specific user mentioned by a specific id.

- #### validateUser
It will validate the client's input keys before creating a user.

- #### createUser
It will create a user when http post method is triggered.

- #### updateUser
It will update the user's details.

- #### deleteUser
It will delete the user mentioned by id.
If user is not present on database then it will display "User Not Found"
