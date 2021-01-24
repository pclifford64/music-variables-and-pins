let String_1 = 0
let String_2 = 0
music.setVolume(127)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        String_1 += 1
        if (String_1 == 1) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        if (String_1 == 2) {
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
        if (String_1 == 3) {
            String_1 = 0
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        String_2 += 1
        if (String_2 == 1) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        if (String_2 == 2) {
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
        if (String_1 == 3) {
            String_1 = 1
        }
    }
})
