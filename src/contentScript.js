setInterval(() => {
    var bonusPoints = document.querySelector(".community-points-summary > *:nth-child(2) button")
    if (bonusPoints) {
        bonusPoints.click()
        console.log("hi")
    }
    console.log("running")
}, 1000)