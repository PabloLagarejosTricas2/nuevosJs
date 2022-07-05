const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];
const arrTotal=[arrNumber1,arrNumber2,arrNumber3];
 /*for (let i=0; i<arrNumber1.length;i++){
    for(let j=0; j<arrNumber2.length;j++){
        if(arrNumber1[i]===arrNumber2[j]){
            for(let k=0; k<arrNumber3.length; k++){
                if(arrNumber1[i]===arrNumber3[k]){
                    arrSolucion.push(arrNumber1[i]);
                }
            }
        }  
    }
 }*/
 
 const result = arrNumber1.filter(value => arrNumber2.includes(value)).filter(value=>arrNumber3.includes(value));
 console.log(result);