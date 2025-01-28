const {SUNDAY, Verifier} = require('./password-verifier-time02-modular');

test('constructor function : on weekends, throws exception', () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = new Verifier([], alwaysSunday);
    expect(() => verifier.verify('anything'))
        .toThrow("It's the weekend!");
});
