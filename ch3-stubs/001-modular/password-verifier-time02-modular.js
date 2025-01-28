const SUNDAY = 0;
const SATURDAY = 0;

const Verifier = function(rules, dayOfWeekFn) {
    this.verify = function(input) {
        if([SUNDAY, SATURDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
        }

        // do something
    };
};

module.exports = {
    SUNDAY,
    SATURDAY,
    Verifier
}
