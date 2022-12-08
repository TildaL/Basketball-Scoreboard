//HOME SCORE 
let homeScore = document.getElementById('home-score')
let homeCount = 0

function plus1() {
    homeCount = homeCount + 1
    homeScore.textContent = homeCount
}

function plus2() {
    homeCount = homeCount + 2
    homeScore.textContent = homeCount
}

function plus3() {
    homeCount = homeCount + 3
    homeScore.textContent = homeCount
}

//GUEST SCORE
let guestScore = document.getElementById('guest-score')
let guestCount = 0

function add1() {
    guestCount = guestCount + 1
    guestScore.textContent = guestCount
}

function add2() {
    guestCount = guestCount + 2
    guestScore.textContent = guestCount
}

function add3() {
    guestCount = guestCount + 3
    guestScore.textContent = guestCount
}

