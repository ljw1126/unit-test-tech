const SUNDAY = 0;
const MONDAY = 1;
const SATURDAY = 6;

class PasswordVerifier {
    constructor(rules, timeProvider) {
        this.rules = rules;
        this.timeProvider = timeProvider;
    }

    verify(input) {
        if([SATURDAY, SUNDAY].includes(this.timeProvider.getDay())) {
            throw new Error("It's the weekend!");
        }

        const errors = [];
        // do something..
        return errors;
    }
}

module.exports = {
    SUNDAY,
    MONDAY,
    SATURDAY,
    PasswordVerifier
}
