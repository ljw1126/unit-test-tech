const { SUNDAY, MONDAY, PasswordVerifier } = require('./password-verifier-time01');

describe('verifier', () => {
    const makeVerifier = (rules, dayFn) => {
        return new PasswordVerifier(rules, dayFn);
    };

    test('class constructor: on weekends, throws exception', () => {
        const alwaysSunay = () => SUNDAY;
        const verifier = makeVerifier([], alwaysSunay);

        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('class constructor: on weekends, with no rules, passes', () => {
        const alwaysSunay = () => MONDAY;
        const verifier = makeVerifier([], alwaysSunay);
        const result = verifier.verify('anything');

        expect(result.length).toBe(0);
    });
});
