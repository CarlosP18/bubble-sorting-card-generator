
let randomNumber = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
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
        newNumber == 1 ? "A" : newNumber;
        newNumber == 11 ? "J" : newNumber;
        newNumber == 12 ? "Q" : newNumber;
        newNumber == 13 ? "K" : newNumber;
        cardDiv.classList.add("card");
        cardDiv.classList.add(newSuit);
        let cardSpan = document.createElement("span");
        cardSpan.classList.add("number");
        cardSpan.innerHTML = newNumber === 1 ? "A" : newNumber === 11 ? "J" : newNumber === 12 ? "Q" : newNumber === 13 ? "K" : newNumber;
        cardDiv.appendChild(cardSpan)
        document.querySelector(".cardContainer").appendChild(cardDiv)

        cardsArr.push([newNumber, newSuit])

    };

    console.log(cardsArr);
});



const orderNumbers = () => {
    let newArrCards = bubbleSort(cardsArr);
    console.log(newArrCards);

}




const bubbleSort = (arr) => {
    let wall = arr.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index][0] > arr[index + 1][0]) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
                for (let j = 0; j < arr.length; j++) {
                    let cardDiv = document.createElement("div");
                    let newNumber = arr[j][0];
                    let newSuit = arr[j][1];
                    cardDiv.classList.add("card");
                    cardDiv.classList.add(newSuit);
                    let cardSpan = document.createElement("span");
                    cardSpan.classList.add("number");
                    cardSpan.innerHTML = newNumber === 1 ? "A" : newNumber === 11 ? "J" : newNumber === 12 ? "Q" : newNumber === 13 ? "K" : newNumber;
                    cardDiv.appendChild(cardSpan)
                    let cards = document.querySelector(".cardContainer2")
                    cards.appendChild(cardDiv);
                    if (j == arr.length - 1) {
                        let br = document.createElement("br");
                        cards.appendChild(br);
                    }
                }
            }
            index++;
        }
        wall--;
    }

    return arr;
};