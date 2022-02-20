               // Problem 2// 

let person1Name = prompt("enter person1 name ")
let person1Hieght = parseFloat(prompt("Enter person1 hieght(m)"))
let person1Wieght = parseFloat(prompt("Enter person1 weight(kg)"))




function person(Name, Hieght, Weight){
    this.personName = Name;
    this.personHieght = Hieght;
    this.personWieght = Weight;
    this.BMI = function (){
        return (this.personWieght/(this.personHieght*this.personHieght));
    };
    
}

const person1 = new person(`${person1Name}`, `${person1Hieght}`, `${person1Wieght}`, null )

console.log(person1)
console.log(`${person1Name}'s BMI is ${person1.BMI()}`)

let person2Name = prompt("enter person2 name ")
let person2Hieght = parseFloat(prompt("Enter person2 hieght(m)"))
let person2Wieght = parseFloat(prompt("Enter person2 weight(kg)"))




const person2 = new person(`${person2Name}`, `${person2Hieght}`, `${person2Wieght}`, null )
console.log(person2.BMI())


function compare (person1BMI, person2BMI){
    if (`${person1.BMI()}`> `${person2.BMI()}`){
        console.log(`${person1Name}'s BMI is greater than ${person2Name}'s`)
    } else if (`${person1.BMI()}`< `${person2.BMI()}`){
        console.log(`${person1Name}'s BMI is greater than ${person2Name}'s`)
    } else {
        console.log(`${person1Name}'s BMI is equal to ${person2Name}'s`)

    } 
    
   
          
}
compare (5,6)