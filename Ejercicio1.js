const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ]

/*for(let i=0;i<arrNames.length;i++){
    if(arrNames[i].id===3){
        console.log(arrNames[i]); 
    }
}*/

var solution=arrNames.find(element=>element.id===3);
console.log(solution);
var solution2=arrNames.filter(element2=>element2.id===3);
console.log(solution2);