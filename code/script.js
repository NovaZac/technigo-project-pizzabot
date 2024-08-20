// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to Paolo´s Pizzeria. Ready to Start? - Click 'OK' to begin to order our delicious food!`
)

let username = prompt(`Please enter your name!`)
  if (username !== null){
    alert("Hello, " + username + "! Hope you are hungry!")
}

// Step 2 - Food choice
// Your code goes here

let chooseFood = prompt(
   `What are you craving today?
   Enter a number:
   1 - Pizza
   2 - Pasta
   3 - Salad`)

   if (chooseFood == 1) {
    alert(`Pizza, amazing choice!`)
   } else if ( chooseFood == 2){
    alert(`Pasta! You have a really good taste!`)
   } else if (chooseFood == 3){
    alert(`Our salad will not disappiont you!`)
   } else {
    alert(`Invalid, you must choose a number between 1-3`)
   }

  
// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
