const { SUNDAY, PasswordVerifier } = require('./password-verifier-time01');

describe('verifier', () => {
    test('class constructor: on weekends, throws exception', () => {
        const alwaysSunay = () => SUNDAY;
        const verifier = new PasswordVerifier([], alwaysSunay);

        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });
});
