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
const longNotSoLongFunction = a => a+b

*/

/// First Closure 
const toUpAndReverse = () =>{
    const changeString = (inputString)=>{
        return inputString.toUpperCase().split('').reverse().join('');
    }
    return changeString;

}

console.log('reverse and up of "this should look weird" ',toUpAndReverse()('this should look weird'));

/// work first closure here

// Second closure

const howManyOf = (letter) => {
    const findLetterIn = (phrase)=>{
        return phrase.split('').filter(char=>char===letter).length
    }
    return findLetterIn;
}

console.log('how many l are in "hola lola" ',howManyOf('l')('hola lola'));

// work here second closure

/* 
    Now you have to do the oposite 
    write the long version of the next one line function 

*/

const likesCoffee = (name) =>dailyCups=>dailyCups>=3 || name==='miguel';

console.log('does miguel likes coffee ' , likesCoffee('miguel')(2));
console.log('does isis likes coffee',likesCoffee('isis')(0));

//work here your long version 