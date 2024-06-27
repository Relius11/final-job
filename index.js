let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame() {

    window.location.reload()
}

function init() {

    computerNumber = Math.floor(Math.random() * 100 + 1)
    // console.log(computerNumber)
}

function compareNumbers() {
    
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(userNumber)
    document.getElementById('guesses').innerHTML = userNumbers.join('-')

    if(attempts < maxGuesses) {

        if(computerNumber > userNumber && userNumber - computerNumber <= -1 && userNumber - computerNumber >= -5) {
            console.log('está perto sdasa')
            document.getElementById('textOutput').innerHTML = 'Está perto falta pouco para chegar'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if(userNumber - computerNumber <= 5 && userNumber - computerNumber >= 1) {
            console.log('esta perto')
            document.getElementById('textOutput').innerHTML = 'esta perto passou um pouco'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if(userNumber - computerNumber >= 6) {
            document.getElementById('textOutput').innerHTML = 'Your Number is too High'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if(userNumber - computerNumber <= -1) {
            document.getElementById('textOutput').innerHTML = 'Your Number is too Low'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }                    
        else {
        
            document.getElementById('textOutput').innerHTML = 'Congratulations ! You Guessed the Right Number'
            attempts++
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        
        document.getElementById('textOutput').innerHTML = 'Sorry, you have reached the maximum number of attempts, the number was '+ computerNumber
    }
}