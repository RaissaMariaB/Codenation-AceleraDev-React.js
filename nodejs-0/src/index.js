'use strict'

const fibonacci = () => {
    let sequenciaDeFibonacci = [0,1]
    for(let i = 2; i <= 350; i++ ){
       
        sequenciaDeFibonacci[i] = sequenciaDeFibonacci[i-1] + sequenciaDeFibonacci[i-2]
        
    }
    return sequenciaDeFibonacci

}

  
const isFibonnaci = (num) => {
    const arrayFibonacci = fibonacci();

   return arrayFibonacci.includes(num);     

}

module.exports = {  
    fibonacci,
    isFibonnaci
}
