/////////Objects//////////
//An object contains properties and methods and we can store multiple values in objects

//Syntax
let a = {
  key: "Value",
  key2: 'ASOIJDSAOPJ',
  name: "Raj",
  Roll: 02,
  Occupation: "Full Stack web developer",
  Id: 01,
  Role: "Developer",
  //we can nest the object inside other object
  object: {
      key: "Another value"
  },
  array: [
      1,
      2,
      3
  ]
};


console.log(a.object.key);




