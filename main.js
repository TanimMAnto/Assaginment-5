let favCount = 0;
let coins = 100;

// selector
const favCountEl = document.getElementById("fav-count");
const coinCount = document.getElementById("nav-coin");
const callHistory = document.getElementById("call-history");

// ......Heart-section

document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click" , () => {
        favCount++;
        favCountEl.textContent = favCount;
    });
})



// .....Call section
let callBtn = document.querySelectorAll(".call-btn1");
callBtn.forEach(function (btn) {
    btn.addEventListener("click", function (){
        let card = btn.closest(".parent-card");
        let name = card.querySelector(".card-title").innerText;
        let number = card.querySelector(".card-number").innerText;

        if(coins < 20) {
            alert("Not Enough Coins");
            return;
        }

        coins -= 20;
        document.getElementById('nav-coin').innerText = coins;
        alert(`Calling ${name} - ${number}`);
        
        let li = document.createElement("li");
        li.innerText = (`${name} - ${number}`)

        document.getElementById("call-history").appendChild(li);
    })
})

// clear history
document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("call-history").innerHTML = "";
})