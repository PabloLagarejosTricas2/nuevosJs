
const solucion=(a,b)=>{
    let chain=a.toString();
    let number=chain.indexOf('.');
    let ente = chain.substring(0,number);
    let deci=chain.substring(number+1,number+1+b);
    let result=parseFloat(ente+'.'+deci);

    return result;
}
  console.log(solucion(14.345,2));


 
 

 