const employees = [
    {
      id: "1",
      name: "Vibhuti Bajaj",
      profileImage: "assets/images/Vibhuti.jpg",
      introduction:
        "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
      profileLink: "https://vibhi24.github.io/Personal-Website/",
    },
    {
      id: "2",
      name: "Varun Athreya",
      profileImage: "assets/images/varun.jpg",
      introduction:
        "I am a passionate coder who loves capturing memories and exploring new places.",
      profileLink: "https://varunsathreya.github.io/contentstack-training/",
    },
    {
      id: "3",
      name: "Priya NB",
      profileImage: "assets/images/Priya.jpeg",
      introduction:
        "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
      profileLink: "https://priya-nb.github.io/personalweb/index.html",
    },
    {
      id: "4",
      name: "Rangaswamy Vikas",
      profileImage: "assets/images/vikas.jpg",
      introduction:
        "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
      profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
    },
    {
      id: "5",
      name: "Deepak Chaturvedi",
      profileImage: "assets/images/deepak.png",
      introduction:
        "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
      profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
    },
    {
      id: "6",
      name: "Rakshitha S",
      profileImage: "assets/images/Rakshitha.jpg",
      introduction:
        "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
      profileLink: "#",
    },
    {
      id: "7",
      name: "Kashmeera Raychoty",
      profileImage: "assets/images/Kashmeera.jpg",
      introduction: "I am a creative person and like to explore new things.",
      profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
    },
    {
      id: "8",
      name: "Harshitha D",
      profileImage: "assets/images/Harshitha D.png",
      introduction: "I'm a partical person and like to travel and listen K-pop.",
      profileLink: "https://harshithad0703.github.io/individual_website/",
    },
    {
      id: "9",
      name: "Sanika Pareek",
      profileImage: "assets/images/sanika.jpeg",
      introduction:
        "I'm curious to learn and explore new things and like to paint.",
      profileLink:
        "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
    },
    {
      id: "10",
      name: "Raj Pandey",
      profileImage: "assets/images/Raj.png",
      introduction: "Computer Engineer, Painter, Poet, Reader",
      profileLink: "https://cs-raj.github.io/pw-2/",
    },
    {
      id: "11",
      name: "Viraj Yadav",
      profileImage: "assets/images/Viraj.jpg",
      introduction:
        "I'm a sincere lunatic curious about technology and like playing cricket.",
      profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
    },
    {
      id: "12",
      name: "Faraaz Biyabani",
      profileImage: "assets/images/faraaz.webp",
      introduction:
        "I am always curious about technology and I love writing code to create purposeful things.",
      profileLink: "https://faraazb.github.io/cs-personal-website/",
    },
    {
      id: "13",
      name: "Vaibhav Patil",
      profileImage: "assets/images/Vaibhav.png",
      introduction:
        "I'm a true technophile. I love to talk about Physics and Spirituality.",
      profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
    },
    {
      id: "14",
      name: "Soumik Paul",
      profileImage: "assets/images/Soumik.png",
      introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
      profileLink: "https://soumik43.github.io/Portfolio/",
    },
  ];

//   Using the array, create a new array where each element is an instance of class Employee.

let interns = [];
employees.map((el,index,arr) => {
    interns.push(el);
})

// Find an employee with specific id.

function findEmployeeById(id){
    if (typeof id === 'number'){
        const found = interns.find((element,index) => {
            if (interns[index].id == id){                
                return element;
            }     
        })
        if (typeof found === 'undefined')
            console.log("Employee with id", id ,"Not Exist !");
        else{
            return found;  
        }
        
    }
    else {
        console.log("Please enter integer only"); 
}
    // console.log("details are",found);
}  

console.log("Employee details by id:",findEmployeeById(5));

// Find an employee information that matches the search object passed as an argument

function findEmployee(ob){
  if(Object.keys(ob).length >1){
      console.log("Input should have only one key-value pair");
  }
  else{
      if (typeof ob === 'object'){
          const details =  interns.find((ele,index) => {
              const temp = Object.keys(ob);
              if (ob[temp] ===  ele[temp] ){
                  return ele;
              }         
          })
          return details;
      }   
  }
}

console.log(findEmployee({name:'Viraj Yadav'}));

// Update employee with a specific id

function updateDetailsById(ob){
      const found = interns.find((element,index) => {
          if (interns[index].id == ob.id){                
              return element;
          }     
      })
      if (typeof found === 'undefined')
          console.log("Employee with id", ob.id ,"Not Exist !");
      else{
        const temp = Object.keys(ob);
        if (temp[1] == "id"){
          console.log("id cannot be changed")
        }
        else{
          found [temp[1]] = ob[temp[1]];
          return found;
        }
          
      }
      
  }
  console.log(updateDetailsById({id:"11",name:"XYZ"}));

  // Delete an object with a specific id

function deleteById(id){
    if (typeof id === 'number'){
        let found = interns.findIndex((element,index) => {
            if (interns[index].id == id){             
                return index;
            }     
        })
        found = interns.splice(found,1)
        return found;  
        }
        
}
console.log("Deleted object is:",deleteById(12));
 
