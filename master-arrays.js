/*


  1 - from the provided array of persons console log each 
   one of the "names" on the list

  2 - from the provided array of persons console log how many of
  them have a name starting with the letter l 

  3 - from the provided array persons creat a new array that has 
        the following properties
        {
            name:"name",
            canDrive:true|false,
        }

    4  - from the provided array of persons console log who is the oldest

*/

const persons = [{name:"lulu",age:20},{name:"leila",age:5},{name:"jose",age:10}];
persons.forEach(function (person) {
      console.log(person);
})


persons.filter((person) => person.name[0]==='l').length;

persons.map(person => ({

    name:person.name,
    canDrive:person.age >= 18 

}))

console.log(
    persons.reduce((youngest,person)=> person.age<=youngest.age?person:youngest, {age:300})   

)
