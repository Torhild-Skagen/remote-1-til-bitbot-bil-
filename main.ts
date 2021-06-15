input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
radio.setTransmitPower(7)
bitbot.select_model(BBModel.XL)
