let thesis3 = {
    "title": "Ipari forradalom", 
    "events" : ["I. ipari forradalom", "II. ipari forradalom", "gőzgép(James Watt)", "telefon(Alexander Graham Bell)", "szénszálas izzólámpa(Thomas Edison)", ],
    "dates": ["1750 - 19.század közepe", "1871 - 1914", "1769", "1876", "1879", ], 
    "images": [["#03_elso_ipari_forradalom"], ["#03_masodik_ipari_forradalom"], ["#03_gozgep"], ["#03_telefon"], ["#03_szenszalas_izzo"]]
}

let thesis9 = {
    "title": "Reformkor Magyarországon",
    "events" : ["Reformkor Magyarországon", "Lánchíd építése", "Széchényi István élete", "Wesselényi Miklós élete", "kaszinó alapítása Pesten"],
    "dates" : ["1830 - 1848", "1842", "1791 - 1860", "1796 - 1850", "1827"],
    "images" : [["#09_reformkor"], ["#09_lanchid"], ["#09_szechenyi_istvan"], ["#09_wesselenyi_miklos"], ["#09_kaszino_pesten"]]
}

let thesis18 = {
    "title": "Az ország három részre szakadása",
    "events" : ["Mohácsi csata", "I. Szulejmán uralkodása", "II. Lajos uralkodása", "nándorfehérvári csata", "váradi béke"],
    "dates" : ["1526. augusztus 29", "1520 - 1566", "1516 - 1526", "1541. augusztus 29", "1538"],
    "images" : [["#18_mohacsi_csata"], ["#18_szulejman"], ["#18_masodik_lajo"], ["#18_nandorfehervar"], ["#18_varadi_beke"]]
}


let theses = {
    "validNumbers" : [3, 9, 18],
    "thesis3" : thesis3,
    "thesis9" : thesis9,
    "thesis18" : thesis18
}

function convertInput(csvLine) {
    let splitLines = csvLine.split(";")
    let thesisNum = splitLines[0].substr(1, 2)
    let thesisTitle = splitLines[0].substr(5)
    let event = splitLines[1]
    let date = splitLines[2]
    let images = []
    for (let i = 0; i < 3; i++) {
        if (splitLines[i + 3] != "") {
            images.push(splitLines[i + 3])
        }
    }

    let thesisString = "thesis" + thesisNum.toString();

    if (theses.hasOwnProperty(thesisString)) {
        theses[thesisString] == {
            "title" : thesisTitle,
            "events": event,
            "dates": date,
            "images": images
        }
    } else {
        theses[thesisString][events].append(event)
        theses[thesisString][dates].append(date)
        theses[thesisString][images].append(image)
    }

    console.log(theses)
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
         return response
     }    
}

let answers = []

function fillQuestions(reverseOrder, thesisNum) {
    let resp;
    if (reverseOrder) {
        resp = getRandomDateFromThesis(thesisNum);
    } else {
        resp = getRandomEventFromThesis(thesisNum)
    }
    console.log(resp)
    document.getElementById("event").innerHTML = resp[0];   
    document.getElementById("answers").innerHTML = "";
    let randomNum = Math.floor(Math.random() * 4)
    for (let i = 0; i < resp[2].length; i++) {
        let answerH = document.createElement("button");
        answerH.innerHTML = resp[2][i];
        answerH.addEventListener('click',()=>{
            addAnswer(false,resp[2][i], resp[1])
        })
        document.getElementById("answers").appendChild(answerH);
        if (i == randomNum) {
            let answerH = document.createElement("button");
            answerH.innerHTML = resp[1];
            answerH.addEventListener('click',()=>{
                addAnswer(true, resp[1], "")
            })
            document.getElementById("answers").appendChild(answerH);
        }
    }
}

let counter = 0
function addAnswer(isCorrect, selectedByUser, Correct) {
    if (counter == 5) {
        countAnswers();
        return
    }

    if (isCorrect) {
        answers.push(selectedByUser)
    }else{
        answers.push([selectedByUser, Correct])
    }
    console.log(answers)
    fillQuestions(false,parseInt(localStorage.getItem("selectedTopic")))
    counter++;
}

function countAnswers() {
    let wrongAnswers = 0
    answers.forEach(element => {
        if (typeof(element) == "object") {
            wrongAnswers++;
        }
    });
    console.log(answers)
    console.log(wrongAnswers)
    alert(`5 ből ${wrongAnswers}-t nem találtál el.`)
    location.reload();
}

fillQuestions(false,parseInt(localStorage.getItem("selectedTopic")))