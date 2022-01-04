//Task BMI//


// function bmi(weight, height){
//     let result = weight/(height*height) 

//     let finalBmi = result * 10000
//     alert(Math.round(finalBmi));
// }

// bmi(60, 170)


//syntax for arrow function, fat arrow functions

const bmiCalc = (weight, height) => {
  let formula = weight / (height * height);
  let finalBmi = formula * 10000;

  alert(Math.round(finalBmi));
};


bmiCalc(60, 170)





//we cannot redclare the parameters in this case

// function add(a, b) {
// //   let result = (weight / height) * height;
// //   alert(result);

//     let a = Number(propmt('first number'))
//     let b = Number(propmt("sec number"));

//     alert(a+b)
// }

// add(1 ,2)





