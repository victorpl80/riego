OLED12864_I2C.init(60)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 90)
let Humitat = 0
basic.forever(function () {
    Humitat = tinkercademy.MoistureSensor(AnalogPin.P2)
    Humitat = Math.round(Humitat)
    OLED12864_I2C.showString(
    1,
    1,
    "Humitat",
    1
    )
    OLED12864_I2C.showNumber(
    1,
    2,
    Humitat,
    1
    )
    OLED12864_I2C.showString(
    3,
    2,
    "%",
    1
    )
    if (Humitat > 50) {
        basic.showIcon(IconNames.Happy)
        OLED12864_I2C.showString(
        1,
        3,
        "Tot OK",
        1
        )
    } else {
        basic.showIcon(IconNames.Umbrella)
        OLED12864_I2C.showString(
        1,
        3,
        "Toca regar",
        1
        )
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 40)
        basic.pause(1500)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 90)
        basic.pause(1500)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 130)
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
