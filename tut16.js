// document.getElementById('h').innerHTML = 'Hello'

// Document Object Model is designed to manipulate
//-HTML elements, CSS and many more

// const document = {
//   getElementById: (idName) => {
//     //logic to select the element by its id
//   },
//   getElementsByClassName: () => {
//     //logic to select the element by its class name
//   },
//   getElementsByTagName: () => {
//     //logic to select the element by its id
//   },
//   querySelector: () => {
//     //query selector select the element
//   },
//   querySelectorAll: () => {
//     //query selector select the elements
//   },
// };

let heading = document.getElementById("myId");

let img = document.getElementById("image");

let date = new Date();

function change() {
  if (heading.innerHTML === "Document Object Model") {
    heading.innerHTML = date;
    heading.style.color = "red";
  } else {
    heading.innerHTML = "Document Object Model";
    heading.style.color = "black";
  }
}

function changeImg() {
  img.src =
    "https://www.denofgeek.com/wp-content/uploads/2014/09/justice-league-movie-team-photo.jpg?resize=768%2C432";

  img.style.borderRadius = "50px";


  //resolve this issue (toggle the image) TASK

//   if (
//     img.src ===
//     "https://www.denofgeek.com/wp-content/uploads/2014/09/justice-league-movie-team-photo.jpg?resize=768%2C432"
//   ) {
//     img.src =
//       "https://www.denofgeek.com/wp-content/uploads/2019/04/3515432-endgamedek-1.jpg?resize=768%2C432";
//   } else {
//     img.src =
//       "https://www.denofgeek.com/wp-content/uploads/2014/09/justice-league-movie-team-photo.jpg?resize=768%2C432";
//   }
}


//Remove class using DOM

let headingRemove = document.getElementById("removeClass");

function classRemover(){
    headingRemove.classList.remove("removeClass");
}

function classAdder() {
  headingRemove.classList.add("removeClass");
}

function toggleClass() {
  headingRemove.classList.toggle("removeClass");
}