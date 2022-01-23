//while loop

// let cars = ["BMW", "Volvo", "Saab", "Ford"]

// let i = 0
// //-the value of i is declared globally which means
// // it has global SCOPE

// while(i < cars.length){
//     console.log(cars[i]);
//     i++;
// }

// //for loop

// // for(let i = 0; i < cars.length; i++){
// //     console.log(cars[i]);
// // }

// cars.forEach((car)=>{
//     console.log(car);
// })

// document.getElementsByTagName('h1').style.color = 'red';

// //manipulating css using DOM
// document.getElementById('hd').style.color = 'red';
// document.getElementById("hd").innerHTML = "red";

//Advance JavaScript//

// const person1 = {
//   name: "raj",
//   //  key: value,
//   address: "pune",
//   age: 30,
//   canVote: true,
// };

// console.log(`person name = ${person1.name}`);

// //similar to this

// console.log("person's name " + person1.name);

//we can access the properties of object in this manner
// console.log(`person name = ${person1.name}`);

//person1's properies/keys can be modified like this
// person1.address = "mumbai";

// console.log(person1);

// console.log(person1);

//constructors

//constructor function
// -it is special type of Function
// -used to create one or more objects easily
// -it looks similar to constructor in Java or c++

//Syntax

//RULES

//1. Always name the constructor with Capital letter

// function Person(name, address, age, country){
//     this.name = name;
//     this.address = address;
//     this.age = age;
//     this.desh = country;
// }


// const p1 = new Person('Raj', 'niphad', 20, 'asjdh')
// const p2 = new Person("Raj", "niphad", 20);



// //accesing the values 
// console.log(p1);

// console.log(p1);


// what actually is objects

// creating an object using Object(function)
//Object:
// - is root function provided by JS
// - used to create object

//creating object using Object() function or Constructor

// const person1 = new Object()

// person1.name = "Raj";
// person1.age = 45;
// person1.address = 'lasjd';
// person1.desh = 'India'

// console.log(person1);

// //regular syntax

// const obj = {
//     name: 'Raj', 
//     address: 'aslkdjas',
//     age:45,
//     desh: 'india'
// }



// const person1 = new Object();


