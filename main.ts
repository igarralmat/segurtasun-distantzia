radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(100)
radio.setTransmitPower(3)
basic.forever(function () {
    radio.sendNumber(0)
})
