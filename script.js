let thesis3 = {
    "title": "Ipari forradalom", 
    "events" : ["I. ipari forradalom", "II. ipari forradalom", "gőzgép(James Watt)", "telefon(Alexander Graham Bell)", "szénszálas izzólámpa(Thomas Edison)", ],
    "dates": ["1750 - 19.század közepe", "1871 - 1914", "1769", "1876", "1879", ], 
    "images": ["elso_ipari_forradalom#3", "masodik_ipari_forradalom#3", "gozgep#3", "telefon#3", "szenszalas_izzo#3"]
}

let thesis9 = {
    "title": "Reformkor Magyarországon",
    "events" : ["Reformkor Magyarországon", "Lánchíd építése", "Széchényi István élete", "Wesselényi Miklós élete", "kaszinó alapítása Pesten"],
    "dates" : ["1830 - 1848", "1842", "1791 - 1860", "1796 - 1850", "1827"],
    "images" : ["reformkor#9", "lanchid#9", "szechenyi_istvan#9", "wesselenyi_miklos#9", "kaszino_pesten#9"]
}

let thesis18 = {
    "title": "Az ország három részre szakadása",
    "events" : ["Mohácsi csata", "I. Szulejmán uralkodása", "II. Lajos uralkodása", "nándorfehérvári csata", "váradi béke"],
    "dates" : ["1526. augusztus 29", "1520 - 1566", "1516 - 1526", "1541. augusztus 29", "1538"],
    "images" : ["mohacsi_csata#18", "szulejman#18", "masodik_lajos#18", "nandorehervar#18", "varadi_beke#18"]
}


let theses = {
    "validNumbers" : [3, 9, 18],
    "thesis3" : thesis3,
    "thesis9" : thesis9,
    "thesis18" : thesis18
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
    if (theses.validNumbers.includes(thesisNumber)) {
        let thesisString = "thesis" + String(thesisNumber)
        let randomNumber = Math.floor(Math.random() * theses[thesisString].events.length)
        let question = theses[thesisString].events[randomNumber]
        let correctDate = theses[thesisString].dates[randomNumber]
        let badResponses = []

        for (let i = 0; i < 4; i++) {
            let answ = getRandomDate();
            while (answ == correctDate) {
                answ = getRandomDate()
            }
            badResponses.push(answ)
        }
    
        let response = [question, correctDate, badResponses]
        return response;
    }   
}

function getRandomDateFromThesis(thesisNumber) {
     if (theses.validNumbers.includes(thesisNumber)) {
         let thesisString = "thesis" + String(thesisNumber)
         let randomNumber = Math.floor(Math.random() * theses[thesisString].events.length)
         let date = theses[thesisString].dates[randomNumber]
         let correctEvent = theses[thesisString].events[randomNumber]
         let badResponses = []

         for (let i = 0; i < 4; i++) {
            let answ = getRandomEvent();
            while (answ == correctEvent) {
                answ = getRandomEvent()
            }
            console.log(answ)
            badResponses.push(answ)
         }
         let response = [date, correctEvent, badResponses]
         return response;
     }    
}

function fillQuestions(reverseOrder) {
    let resp;
    if (reverseOrder) {
        resp = getRandomDateFromThesis(3);
    } else {
        resp = getRandomEventFromThesis(3)
    }
    document.getElementById("event").innerHTML = resp[0];
    document.getElementById("answers").innerHTML = "";
    let randomNum = Math.floor(Math.random() * 4)
    for (let i = 0; i < resp[2].length; i++) {
        let answerDiv = document.createElement("div");
        let answerH = document.createElement("h1");
        answerH.innerHTML = resp[2][i];
        answerDiv.append(answerH)
        document.getElementById("answers").appendChild(answerDiv);
        if (i == randomNum) {
            answerDiv = document.createElement("div");
            let answerH = document.createElement("h1");
            answerH.innerHTML = resp[1];
            answerDiv.append(answerH)
            document.getElementById("answers").appendChild(answerDiv);
        }
    }
}