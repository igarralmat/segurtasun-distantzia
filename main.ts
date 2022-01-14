radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -20) {
        basic.showIcon(IconNames.Sad)
    }
})
radio.setGroup(5)
radio.setTransmitPower(3)
basic.forever(function () {
    radio.sendNumber(0)
})
