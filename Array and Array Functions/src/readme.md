Use the employees array as you starting point for raw data.
Using the array, create a new array where each element is an instance of class Employee.
Once that new array is created it will act like your data source.

Write functions that will perform the following operation on the above array.
1. Find an employee with specific id. (id is the unique primary key for search)
   a. eg findEmployeeById( id: "1"  ) should return a single object from the array that has "id = 1".
 
  
2. Find an employee information that matches the search object passed as an argument.
  a. eg findEmployee( { name: "Employee Name" } ) should return a single object from the array that has "name = Employee Name". Assume that the search object passed into the function contains only those keys that are present in the Employee object.
  b. restrict the search object to a single key value pair.  findEmployee( { name: "Employee Name" , company:"Company name" } )  would result into invalid search. ( :fire:  at some later point your api should be able to handle this query as well so write the code accordingly).
  
3. Update employee with a specific id
  a. This function will take in arguments as id and an update object.
  b. Update object will contain a key value pairs that needs to be updated. eg. { name:  "updated  name" }
  c. eg updateEmployeeById( id: "1", { update Object:  updated values }   ) should update a single object from the array that has "id=1".
  d. Assume that the updateObject will contain keys that are present in the Employee object
  e. Restrict updating key properties like id.
  
4 Delete an object with a specific id.
  a. This function should take in an argument as id and delete the same from the array of Employees.

