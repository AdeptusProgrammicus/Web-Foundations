alert("Welcome!")

getAdvice()
async function getAdvice() {
    var advice = await fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(response => response.slip)
    console.log(advice.advice)
    document.querySelector(".dailyRandom").innerHTML = advice.advice;
}

