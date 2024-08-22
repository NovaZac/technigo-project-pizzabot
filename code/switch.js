
alert( `Welcome to Paolo´s Pizzeria. Ready to Start? - Click 'OK' to begin to order our delicious food!`)
  
let username = prompt(`Please enter your name!`)
    if (username !== null){
      alert("Hello, " + username + "! Hope you are hungry!")
  }
  
let chooseFood = prompt(`What are you craving today?
    Enter a number:
    1 - Pizza
    2 - Pasta
    3 - Salad`) 

switch (chooseFood) {
    case '1' :
        alert(`Pizza, amazing choice!`)
            let pizza = prompt(`Which pizza appeals to you today?
                1 - Margahrita
                2 - Caprina
                3 - Tricolore`)
                switch (pizza){
                    case '1':
                        alert(`Oh, Margahrita is the best!`)
                             age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                answer = prompt(`Amazing, we are preparing an adult sized Margahrita for you! That will be 12€. Are you sure you want to order this?
                                1 - Yes
                                2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Margahrita for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    case '2':
                        alert(`Caprina is really tasty!`)
                             age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                    answer = prompt(`Amazing, we are preparing an adult sized Caprina for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Caprina for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    case '3':
                        alert(`You selected Tricolore`)
                            age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                    answer = prompt(`Amazing, we are preparing an adult sized Tricolore for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Tricolore for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    default:
                        alert(`Please enter a number 1, 2 or 3`)
                        break
                }
        break
    case '2': 
        alert(`Pasta! You have a really good taste!`)
            let pasta = prompt(`Lovely, which pasta would you like?
                1 - Alfredo
                2 - Bolognese
                3 - Pomodoro`)
                switch (pasta){
                    case '1':
                        alert(`Oh, Alfredo is the best!`)
                            age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                    answer = prompt(`Amazing, we are preparing an adult sized Alfredo for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Alfredo for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    case '2':
                        alert(`Bolognese is really tasty!`)
                            age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                      answer = prompt(`Amazing, we are preparing an adult sized Bolognese for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Bolognese for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    case '3':
                        alert(`You selected Pomodoro`)
                            age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                    answer = prompt(`Amazing, we are preparing an adult sized Pomodoro for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Pomodoro for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    default:
                        alert(`Please enter a number 1, 2 or 3`)
                        break
                }

        break
    case '3':
        alert(`Our salad will not disappiont you!`)
            let salad = prompt(`Which salad do you prefer?
                1 - Caprese
                2 - Gamberetti
                3 - Pollo`)
                switch (salad){
                    case '1':
                        alert(`Oh, Caprese is the best!`)
                            age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                    answer = prompt(`Amazing, we are preparing an adult sized Caprese for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Caprese for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    case '2':
                        alert(`Gamberetti is really tasty!`)
                            age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                    answer = prompt(`Amazing, we are preparing an adult sized Gamberetti for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Gamberetti for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    case '3':
                        alert(`You selected Pollo`)
                            age = prompt(`Is the food for a child or an adult? Please enter your age`)
                                if (age >= 18){
                                    answer = prompt(`Amazing, we are preparing an adult sized Pollo for you! That will be 12€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else if (age <18){
                                    answer = prompt(`Okey, we fix a child sized Pollo for you! That will be 8€. Are you sure you want to order this?
                                    1 - Yes
                                    2 - No`)
                                } else {
                                    alert(`Please tell us your age!`)
                                }
                        break
                    default:
                        alert(`Please enter a number 1, 2 or 3`)
                        break
                }
         break
    default:
        alert(`Invalid, you must choose a number between 1-3`)
        break
}

switch (answer){
    case '1':
        alert(`Thanks for your order, I hope you'll be satisfied and that we'll see you again soon `)
        break
    case '2':
        alert(`No problem, come back if you change your mind!`)
        break
    default: 
        alert(`We need your confirmation`)
        break
}


