//let//
// difference between var and let

//RULE 1//

// WE CANNOT REDCLARE THE VARIABLE IN let

// let x = 2;
// console.log(x);

// let x = 4; // wrong syntax

// WE CAN REDCLARE THE VARIABLE IN var

// var a = 'Prathamesh';

// var a = 2;

// console.log(a);

//RULE 2//

//VARIABLE DECLARED WITH let KEYWORD MUST BE DECLARED BEFORE USE

// let a = 4; //we have declared the value here

// console.log(a); //we have used a here

//wrong method

// console.log(b); //we have used a here

// let b = 5;//we have declared the value here


//HERE IS THE DIFFERENCE FOR ABOVE EXAMPLE WITH var KEYWORD

//Instructions
//In var we can declare the variable before use 
//but you must always declare the variable before use in any case as a standard procedure and to avoid mistakes.

//compare with var 

// console.log(x); 

// var x = 2;

//RULE 3//

//BLOCK SCOPE//

//block scope means declaring the varibles inside the curly brackets {}

//DECLARING THE VARIABLE INSIDE BLOCK

//{
    //let x = 10; // variable is declared
    //console.log(x); // we have  used a here

    //we can use x here where x = 10
//}

// console.log(x); // we cannot use x here because it is defined using let inside {} block

// BLOCK SCOPE IN var

//We must use let keyword if we are facing the problem given below


// var y = 2;
// // value of y is 2
// {
//     var y = 10;  
//     console.log(y);

//     //here the value of y is 10
// }

// console.log(y);
// //here the value of y is 10


// //CONST//

// const x = 4;
// console.log(x);
// const x = 5; // Wrong, you cannot redeclare the value

// x = 8; //you cannot reassign the variable in const

// let a = 2; //Declare 
// // let a = 3; //Re-Declare (wrong)
// a = 6; // Reassign

// console.log(a);


// //BLOCK SCOPE//

// const a = 10;
// console.log(a); //here the value is 10

// {
//     const a = 5; 
//     console.log(a); // here the value is 5
// }


// console.log(a);  //here the value is 10

//decalre the variable using only camelCasing

//example of camelCasing

// var camelCasing = 'Steve Smith';

// console.log(camelCasing);

