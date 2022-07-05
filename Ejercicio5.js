const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]
  const result=arrCities2.filter(element=>
    element.country==='Spain'&& element.capital==false).map(element=>{
        return{
            city: element.city,
            isSpain: true
        } 
    });
console.log(result);