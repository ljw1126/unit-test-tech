const { PasswordVerifier } = require('./00-password-verifier');

describe('duck typing with function constructor injection', () => {
    describe('password verifier', () => {
        it('logger & passing scenario, calls logger with PASSED', () => {
            let logged = '';
            const mockLog = { info: (text) => (logged = text)};
            const verifier = new PasswordVerifier([], mockLog);

            verifier.verify('any input');

            expect(logged).toMatch(/PASSED/);
        });
    });
});