setInterval(() => {
    var bonusPoints = document.querySelector(".community-points-summary > *:nth-child(2) button")
    if (bonusPoints) {
        bonusPoints.click()
    }
}, 3000)