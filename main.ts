input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (number == Guess == higher) {
        basic.showString("higher")
    } else if (number == Guess == lower) {
        basic.showString("lower")
    } else if (number == Guess) {
        basic.showString("correct")
        basic.showNumber(Guess)
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let number = 0
let Guess = 0
let lower = false
let higher = false
basic.showString("" + (higher))
basic.showString("" + (lower))
Guess = randint(0, 20)
basic.forever(function () {
	
})
