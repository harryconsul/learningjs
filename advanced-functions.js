/*

Refactor next 2 closures into arrow functions simplified mode (one line), example:
const coolFunction = a => b => a+b ;

the name of the simplified version should have the prefix cool
example : sum will be  coolSum;

Recall : 
one line function comes from the idea of simplifying something like

const longFunction = (a) => {
    const insideFunction = (b)=>{
        return a+b;
    }
    return insideFunction;
}

this can turn into this :

const longFunction = (a) => {
    return (b)=>{
        return a+b;
    }
}

just because what you are declaring is what you are returning without mutation ( no changes )

and then , if you apply abreviates of arrow functions :
one parameter -- no need of parenteshis 
one line --- no need to write the word return
all turns into
const longNotSoLongFunction = a => (b) => a+b

*/

const canIDrive = () => {

    const checkAge = (age) =>{
        return age>=18;
    }

    return checkAge;
}

console.log(canIDrive()(19));

// work here

const canIDrive = () => (age) => age>=18;

console.log(canIDrive()(19));




const sayHello = (greeting) => {

    const doGreeting = (name) =>{
        return `${greeting} ${name}`;
    }

    return doGreeting;
}

console.log(sayHello('hola')('isis'));



// work here

const sayHello = (greeting) => (name) => `${greeting} ${name}`;
    
console.log(sayHello('hola')('isis'));
