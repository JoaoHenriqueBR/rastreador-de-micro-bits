radio.onReceivedNumber(function (receivedNumber) {
    Sinal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(Sinal)
    if (Sinal < -90) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            `)
    } else if (Sinal < -80) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # # .
            . . # . .
            . # . # .
            `)
    }
})
let Sinal = 0
radio.setGroup(1)
basic.forever(function () {
	
})
