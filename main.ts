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
})
