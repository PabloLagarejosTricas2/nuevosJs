const student = 
    {
      name: "Jill",
      lastname: "Doe",
      age: 24,
      course: "Marketing",
      tittle: "falsy"
    }
/*const hayFalsy=(objeto,falsy=>(valor==="truly"){
    return true;
}) objeto.falsy(valor) */
//const hayFalsy=(objeto, verdadero=>(Object.values(objeto)==='truly'))

Object.entries(student).forEach(([key,value])=>{
    if(value==='falsy'){
        console.log (key+':'+value);
    }
});