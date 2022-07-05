
//const quitarHtml=(string)=>string.replace(/[a-z]>/ig,"");

const quitarHtml=(string)=>string.replace( /(<([^>]+)>)/ig,'');