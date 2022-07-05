const students = 
    {
      name: "Jill",
      lastname: "Doe",
      age: 24,
      course: "Marketing",
    } 
  ;
  
const minus=(objeto)=>Object.entries(objeto).forEach(([key,value])=>{
   console.log(key.toUpperCase() +":"+value)
});
minus(students);