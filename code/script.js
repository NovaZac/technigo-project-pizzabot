// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to Paolo´s Pizzeria. Ready to Start? - Click 'OK' to begin to order our delicious food!`
)

let username = prompt(`Please enter your name!`)
  if (username !== null){
    alert("Hello, " + username + "! Hope you are hungry!")
}

// Step 2 - Food choice
// Step 3 - Subtype choice
// Step 4 - Age
// Step 5 - Order confirmation

let chooseFood = prompt(
  `What are you craving today?
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad`)

  if (chooseFood == 1) {
   alert(`Pizza, amazing choice!`)
    foodChoice = prompt(`Which pizza appeals to you today?
      1 - Margahrita
      2 - Caprina
      3 - Tricolore`)
      if (foodChoice == 1){
        alert(`Oh, Margahrita is the best!`)
          let age = prompt(`Is the food for a child or an adult? Please enter your age`)
            if (age >= 18){
              answer = prompt(`Amazing, we are preparing an adult sized Margahrita for you! That will be 12€. Are you sure you want to order this?
                1 - Yes
                2 - No`)
              } else if (age <18){
                  answer = prompt(`Okey, we fix a child sized Margahrita for you!
                    1 - Yes
                    2 - No`)
              } else {
                  alert(`Please tell us your age!`)
              }
            
      } else if (foodChoice == 2){
        alert (`Caprina is really tasty!`)
          let age = prompt(`Is the food for a child or an adult? Please enter your age`)
            if (age >= 18){
              answer = prompt(`Amazing, we are preparing an adult sized Caprina for you! That will be 12€. Are you sure you want to order this?
                1 - Yes
                2 - No`)
              } else if (age <18){
                  answer = prompt(`Okey, we fix a child sized Caprina for you!
                    1 - Yes
                    2 - No`)
              } else {
                  alert(`Please tell us your age!`)
              }
      } else if( foodChoice == 3){
        alert(`You selected Tricolore`)
          let age = prompt(`Is the food for a child or an adult? Please enter your age`)
              if (age >= 18){
                answer = prompt(`Amazing, we are preparing an adult sized Tricolore for you! That will be 12€. Are you sure you want to order this?
                  1 - Yes
                  2 - No`)
                } else if (age <18){
                    answer = prompt(`Okey, we fix a child sized Tricolore for you!
                      1 - Yes
                      2 - No`)
                } else {
                    alert(`Please tell us your age!`)
                }
      } else {
        alert(`Please enter a number 1, 2 or 3`)
      }

   } else if (chooseFood == 2){
    alert(`Pasta! You have a really good taste!`)
      foodChoice = prompt(`Lovely, which pasta would you like?
        1 - Alfredo
        2 - Bolognese
        3 - Pomodoro`)
        if (foodChoice == 1){
          alert(`Oh, Alfredo is the best!`)
            let age = prompt(`Is the food for a child or an adult? Please enter your age`)
              if (age >= 18){
                answer = prompt(`Amazing, we are preparing an adult sized Alfredo for you! That will be 12€. Are you sure you want to order this?
                  1 - Yes
                  2 - No`)
                } else if (age <18){
                    answer = prompt(`Okey, we fix a child sized Alfredo for you!
                      1 - Yes
                      2 - No`)
                } else {
                    alert(`Please tell us your age!`)
                }
        } else if (foodChoice == 2){
          alert (`Bolognese is really tasty!`)
            let age = prompt(`Is the food for a child or an adult? Please enter your age`)
              if (age >= 18){
                answer = prompt(`Amazing, we are preparing an adult sized Bolognese for you! That will be 12€. Are you sure you want to order this?
                  1 - Yes
                  2 - No`)
                } else if (age <18){
                    answer = prompt(`Okey, we fix a child sized Bolognese for you!
                      1 - Yes
                      2 - No`)
                } else {
                    alert(`Please tell us your age!`)
                }
        } else if( foodChoice == 3){
          alert(`You selected Pomodoro`)
            let age = prompt(`Is the food for a child or an adult? Please enter your age`)
              if (age >= 18){
                answer = prompt(`Amazing, we are preparing an adult sized Pomodoro for you! That will be 12€. Are you sure you want to order this?
                  1 - Yes
                  2 - No`)
                } else if (age <18){
                    answer = prompt(`Okey, we fix a child sized Pomodoro for you!
                      1 - Yes
                      2 - No`)
                } else {
                    alert(`Please tell us your age!`)
                }
        } else {
          alert(`Please enter a number 1, 2 or 3`)
        }

   } else if (chooseFood == 3){
    alert(`Our salad will not disappiont you!`)
      foodChoice = prompt(`Which salad do you prefer?
        1 - Caprese
        2 - Gamberetti
        3 - Pollo`)
        if (foodChoice == 1){
          alert(`Oh, Caprese is the best!`)
            let age = prompt(`Is the food for a child or an adult? Please enter your age`)
              if (age >= 18){
                answer = prompt(`Amazing, we are preparing an adult sized Caprese for you! That will be 12€. Are you sure you want to order this?
                  1 - Yes
                  2 - No`)
                } else if (age <18){
                    answer = prompt(`Okey, we fix a child sized Caprese for you!
                      1 - Yes
                      2 - No`)
                } else {
                    alert(`Please tell us your age!`)
                }
        } else if (foodChoice == 2){
          alert (`Gamberetti is really tasty!`)
            let age = prompt(`Is the food for a child or an adult? Please enter your age`)
              if (age >= 18){
                answer = prompt(`Amazing, we are preparing an adult sized Gamberetti for you! That will be 12€. Are you sure you want to order this?
                  1 - Yes
                  2 - No`)
                } else if (age <18){
                    answer = prompt(`Okey, we fix a child sized Gamberetti for you!
                      1 - Yes
                      2 - No`)
                } else {
                    alert(`Please tell us your age!`)
                }
        } else if( foodChoice == 3){
          alert(`You selected Pollo`)
            let age = prompt(`Is the food for a child or an adult? Please enter your age`)
              if (age >= 18){
                answer = prompt(`Amazing, we are preparing an adult sized Pollo for you! That will be 12€. Are you sure you want to order this?
                  1 - Yes
                  2 - No`)
                } else if (age <18){
                    answer = prompt(`Okey, we fix a child sized Pollo for you!
                      1 - Yes
                      2 - No`)
                } else {
                    alert(`Please tell us your age!`)
                }
        } else {
          alert(`Please enter a number 1, 2 or 3`)
        }

   } else {
    alert(`Invalid, you must choose a number between 1-3`)
   }

   if (answer == 1){
    alert(`Thanks for your order, I hope you'll be satisfied and that we'll see you again soon `)
  } else if (answer == 2){
    alert(`No problem, come back if you change your mind!`)
  } else {
    alert(`We need your confirmation`)
  }
