#Pseudo Code

Create Questions : question string, options, correct answer
Create question counter = 0

Click on start button
    start timer from 75 seconds
        timer decrements every second
    reset Question Counter = 0
    show first question with 4 options

Click event on one of the options (.addEventListener)
    Check if it is correct
        if correct, 
            display 'correct'
            check if timer > 0 (func checkTime)
            if question counter < length of question array (func checkQuestion)
                increment question counter
                advance to next question
            else if(timer === 0)
                display score
                form for User Initials and Score, save in local storage, redirect to new HTML page showing scores. Sort scores by number value.
        if incorrect, 
            display 'wrong' 
            decrease time by 15 seconds
            check if timer > 0 (func checkTime)
            if question counter < length of question array (func checkQuestion)
                increment question counter
                advance to next question
            else if(timer === 0)
                display score
                form for User Initials and Score, save in local storage, redirect to new HTML page showing scores. Sort scores by number value.