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
// Step 3 - Subtype choice

let chooseFood = prompt(
  `What are you craving today?
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad`)

  if (chooseFood == 1) {
   alert(`Pizza, amazing choice!`)
    prompt(`Which pizza appeals to you today?
      1 - Margahrita
      2 - Caprina
      3 - Tricolore`)
   } else if ( chooseFood == 2){
    alert(`Pasta! You have a really good taste!`)
      prompt(`Lovely, which pasta would you like?
        1 - Alfredo
        2 - Bolognese
        3 - Pomodoro`)
   } else if (chooseFood == 3){
    alert(`Our salad will not disappiont you!`)
      prompt(`Which salad do you prefer?
        1 - Caprese
        2 - Gamberetti
        3 - Pollo`)
   } else {
    alert(`Invalid, you must choose a number between 1-3`)
   }



// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
