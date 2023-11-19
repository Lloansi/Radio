radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > random_num) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("String")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(randint(1, 6))
})
let random_num = 0
random_num = randint(1, 6)
basic.forever(function () {
	
})
