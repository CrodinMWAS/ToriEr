let header = document.getElementById("mainHeader");
header.innerHTML = `Válassza ki melyik tételből szeretne <span id="underline"> ${localStorage.getItem("origin")} </span>`

function quizSelector(index) {
    localStorage.setItem("selectedTopic", index)
    location.href = 'question.html'
}

for (let index = 1; index != 21; index++) {
    let div = document.createElement("div");
    div.classList += "topic";
    let h1 = document.createElement('h1');
    h1.innerText = `${index}. Tétel`

    if (index == 3) {
        h1.innerText = `${index}. Tétel: Ipari Forradalom hullámai és hatásai`
        div.addEventListener('click', () => {
            quizSelector(index)
        })
    }else if (index == 9){
        h1.innerText = `${index}. Tétel: Reformmozgalom kibontakozása Magyarországon`
        div.addEventListener('click', () => {
            quizSelector(index)
        })
    }else if (index == 18){
        h1.innerText = `${index}. Tétel: Az ország három részre szakadása`
        div.addEventListener('click', () => {
            quizSelector(index)
        })
    }else{
        div.classList += " unavailable";
    }

    div.appendChild(h1)
    document.getElementById("topics").appendChild(div);
}

if (localStorage.getItem("origin") == "tesztet kitölteni: ") {
    document.getElementById("quizBtn").classList.add("active")
    document.getElementById("topics").id = "topicsQuiz";
    document.getElementsByTagName("nav")[0].classList.add("quizNav")
    document.getElementById("underline").style.textDecorationColor = "#6BA292";
}else if(localStorage.getItem("origin") == "tanulni: "){
    document.getElementById("topicBtn").classList.add("active")
    document.getElementById("underline").style.textDecorationColor = "#6184D8";
}
