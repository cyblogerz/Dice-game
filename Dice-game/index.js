document.querySelector("button").addEventListener("click", function () {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector("img.img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    document.querySelector("img.img2").setAttribute("src", `images/dice${randomNumber2}.png`);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩Player1 wins!";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "🚩Draw!🚩";
    } else {
        document.querySelector("h1").textContent = "Player2 wins!🚩";
    }
});
