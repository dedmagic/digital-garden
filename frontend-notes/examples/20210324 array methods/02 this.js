class SpeakingMan {
    constructor(name) {
        this.name = name;
    }

    say(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }

    speech(phrases) {
        // phrases.forEach(function(phrase) {
        //     this.say(phrase);
        // });
        phrases.forEach(function (phrase) {
            this.say(phrase);
        }, this);
        phrases.forEach(phrase => this.say(phrase));
    }
}

let mark = new SpeakingMan('Mark Knopfler');
mark.say('Hello!');

mark.speech(['Hello everybody!', 'Peace to all!', 'Sex, drugs and rock-n-roll!']);
