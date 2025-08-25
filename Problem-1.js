// calculator

const calculator = (a,b,operator) => {
    operator = operator.toLowerCase();

    if(operator==='add'){
        return a+b;
    }else if(operator==='sub'){
        return a-b;
    }else if(operator==='mul'){
        return a*b;
    }else if(operator==='div'){
        return b!==0 ? a/b:"Error: division by zero"
    }
}

console.log(calculator(10,5,'add'))
console.log(calculator(13,7,'sub'))
console.log(calculator(3,4,'mul'))
console.log(calculator(42,7,'div'))
console.log(calculator(10,0,'div'))