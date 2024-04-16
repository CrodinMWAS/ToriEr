let thesis3 = {
    "Title": "Ipari forradalom", 
    "Questions" : [""],
    "Answers": [""] 
}

let theses = {
    "validNumbers" : [3, 3, 3],
    "thesis3" : thesis3
}

function getRandomAnswer() {
    let randomNum = Math.floor(Math.random() * theses.validNumbers.length)
    let thesisString = "thesis" + String(theses.validNumbers[randomNum])
    let randomAnswer = theses[thesisString].Answers[Math.floor(Math.random() * theses[thesisString].Answers.length)]
    return randomAnswer; 
}


function getRandomQuestionFromThesis(thesisNumber) {
    if (theses.validNumbers.includes(thesisNumber)) {
        let thesisString = "thesis" + String(thesisNumber)
        let randomNumber = Math.floor(Math.random() * theses[thesisString].Questions.length)
        let question = theses[thesisString].Questions[randomNumber]
        let correctAnswer = theses[thesisString].Answers[randomNumber]
        let badResponses = []

        for (let i = 0; i < 3; i++) {
            let answ = getRandomAnswer();
            while (answ == correctAnswer) {
                answ = getRandomAnswer()
            }
            badResponses.push(answ)
        }
    
        let response = [question, [correctAnswer, ...badResponses]]
        console.log(response)
    }   
}

