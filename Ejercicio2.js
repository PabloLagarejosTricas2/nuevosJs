const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
const arrayTruthy=[];
/*for(let i=0;i<arrDirty.length;i++){
    if(arrDirty[i]){
        arrayTruthy.push(arrDirty[i]);
    }

}
console.log(arrayTruthy);
const truthy=arrDirty.filter(Boolean);
console.log(truthy);*/

const truthy=arrDirty.filter(element=>element);	
console.log(truthy);