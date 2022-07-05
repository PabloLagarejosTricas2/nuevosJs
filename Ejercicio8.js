const unities={
    'B':1,
    'KB': 1/1024,
    'MB': 1/1024**2,
    'GB': 1/1024**3,
    'TB': 1/1024**4,
    'PB': 1/1024**5,
    'EB': 1/1024**6,
    'ZB': 1/1024**7,
    'YB': 1/1024**8
}


//number.toPrecision(digit)


const byteConverter=(number,digit=3)=>{
    if(Math.trunc(number).toString().length<digit){
        return number+'B';
    }
    else{
        if(Math.trunc(number/1024).toString().length<digit){
            return number+'KB';
        }
        else{
            if(Math.trunc(number/1024**2).toString().length<digit){
                return number+'MB';
            }
            else{
                if(Math.trunc(number/1024**3).toString().length<digit){
                    return number+'GB';
                }
                else{
                    if(Math.trunc(number/1024**4).toString().length<digit){
                        return number+'TB';
                    }
                    else{
                        if(Math.trunc(number/1024**5).toString().length<digit){
                            return number+'PB';
                        }
                        else{
                            if(Math.trunc(number/1024**6).toString().length<digit){
                                return number+'EB';
                            }
                            else{
                                if(Math.trunc(number/1024**7).toString().length<digit){
                                    return number+'ZB';
                                }
                                else{
                                    return number/1024**8+'YB';
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
}