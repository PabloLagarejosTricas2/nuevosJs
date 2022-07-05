const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  /*for(i=0;i<arrCities.length;i++){
    if(arrCities[i].country==="Spain" && !arrCities[i].capital){
        console.log(arrCities[i].city);
    }
  }*/
  
  const solution=arrCities.filter(element=>
    element.country==='Spain'&& element.capital==false 
  );
  console.log(solution);