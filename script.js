let thesis3 = {
    "title": "Ipari forradalom", 
    "events" : ["I. ipari forradalom", "II. ipari forradalom", "gőzgép(James Watt)"],
    "dates": ["1750 - 19.század közepe", "1871 - 1914"], 
    "images": ["elso_ipari_forradalom#3"]
}

let theses = {
    "validNumbers" : [3, 3, 3],
    "thesis3" : thesis3
}

function getRandomDate() {
    let randomNum = Math.floor(Math.random() * theses.validNumbers.length)
    let thesisString = "thesis" + String(theses.validNumbers[randomNum])
    let randomDate = theses[thesisString].dates[Math.floor(Math.random() * theses[thesisString].dates.length)]
    return randomDate; 
}

function getRandomEvent() {
    let randomNum = Math.floor(Math.random() * theses.validNumbers.length)
    let thesisString = "thesis" + String(theses.validNumbers[randomNum])
    let randomEvent = theses[thesisString].events[Math.floor(Math.random() * theses[thesisString].events.length)]
    return randomEvent;
}

function getRandomEventFromThesis(thesisNumber) {
    console.log("WAAAAS")
    if (theses.validNumbers.includes(thesisNumber)) {
        console.log("IST")
        let thesisString = "thesis" + String(thesisNumber)
        let randomNumber = Math.floor(Math.random() * theses[thesisString].events.length)
        let question = theses[thesisString].events[randomNumber]
        let correctDate = theses[thesisString].dates[randomNumber]
        let badResponses = []

        for (let i = 0; i < 3; i++) {
            let answ = getRandomDate();
            while (answ != correctDate) {
                answ = getRandomDate()
            }
            badResponses.push(answ)
        }
    
        let response = [question, [correctDate, ...badResponses]]
        console.log(response)
    }   
}

function getRandomDateFromThesis(thesisNumber) {
     if (theses.validNumbers.includes(thesisNumber)) {
         let thesisString = "thesis" + String(thesisNumber)
         let randomNumber = Math.floor(Math.random() * theses[thesisString].events.length)
         let date = theses[thesisString].dates[randomNumber]
         let correctdate = theses[thesisString].events[randomNumber]
         let badResponses = []

         for (let i = 0; i < 3; i++) {
             let answ = getRandomEvent();
             while (answ != correctEvent) {
                 answ = getRandomEvent()
             }
             badResponses.push(answ)
         }
    
         let response = [date, [correctdate, ...badResponses]]
         console.log(response)
     }    
}
