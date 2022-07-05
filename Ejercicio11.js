function splitArray(array,tam){
    var subarray=[];
    for(i=0;i<array.length;i+=tam){
        subarray.push(array.slice(i,i+tam));
    }
    return subarray;
}

//const result = array.reduce((subarray,tam)=>subarray.push)

//const result = splitArrayIntoChunks(array, number)=>array.length()/number

 
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
 