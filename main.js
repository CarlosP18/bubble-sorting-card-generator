
let randomNumber = () => {
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
    let cardNumber = Math.floor(Math.random() * numbers.length);
    return numbers[cardNumber];
};

let randomSuit = () => {
    let suit = ["diamond", "spade", "heart", "club"]
    let cardSuit = Math.floor(Math.random() * suit.length);
    return suit[cardSuit];
};

let cardsArr = []
let numberOfCards = document.querySelector("#numberOfCards")
let draw = document.querySelector("#draw")
let sort = document.querySelector("#sort")

let cardContainer = document.querySelector(".cardContainer")

draw.addEventListener("click", (e) => {
    cardContainer.innerHTML = "";

    for (let i = 0; i < numberOfCards.value; i++) {
        let cardDiv = document.createElement("div");
        let newNumber = randomNumber();
        let newSuit = randomSuit();
        cardDiv.classList.add("card");
        cardDiv.classList.add(newSuit);
        let cardSpan = document.createElement("span");
        cardSpan.classList.add("number");
        cardSpan.innerHTML = newNumber;
        cardDiv.appendChild(cardSpan)
        document.querySelector(".cardContainer").appendChild(cardDiv)

        cardsArr.push([newNumber,newSuit])
    };
});


