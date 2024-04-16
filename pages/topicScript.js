// document.getElementById("mainHeader").innerText = 
console.log(location.pathname);

for (let index = 1; index != 21; index++) {
    let div = document.createElement("div");
    div.classList += "topic";
    let h1 = document.createElement('h1');
    h1.innerText = `${index}. Tétel`
    
    if (index == 3) {
        h1.innerText = `${index}. Tétel: Ipari Forradalom hullámai és hatásai`
    }else if (index == 9){
        h1.innerText = `${index}. Tétel: Reformmozgalom kibontakozása Magyarországon`
    }else if (index == 18){
        h1.innerText = `${index}. Tétel: Az ország három részre szakadása`
    }else{
        div.classList += " unavailable";
    }

    div.appendChild(h1)
    document.getElementById("topics").appendChild(div);
}