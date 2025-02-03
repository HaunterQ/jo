const messages = [
    "ihhhh bat ayaw mo?😣",
    "Bakit naman no? 😢",
    "Baby please 🥺",
    "Please say yes...",
    "YES NA PLEASE 🙏🏼🙏🏼🙏🏼!!!",
    "Cmon cmon cmon cmon",
    "Yes na kasi ang kulit",
    "iiyak talaga ako sige",
    "ah, no talaga?"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}