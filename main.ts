input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Health)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.hello.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Angry)
})
let Health = 0
Health = 10
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # # #
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    if (Health == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . # # # .
            # . # . .
            `)
        basic.pause(2000)
        basic.showString("game over")
    }
})
basic.forever(function () {
    Health += -1
    basic.pause(2000)
})
