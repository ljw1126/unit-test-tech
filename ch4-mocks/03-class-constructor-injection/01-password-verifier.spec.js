const { PasswordVerifier } = require('./00-password-verifier');
const { FakeLogger } = require('./01-password-verifier');

describe('duck typing with function constructor injection', () => {
    describe('password verifier', () => {
        it('logger & passing scenario, calls logger with PASSED', () => {
            let logged = '';
            const mockLog = new FakeLogger();
            const verifier = new PasswordVerifier([], mockLog);

            verifier.verify('any input');

            expect(mockLog.logged).toMatch(/PASSED/);
        });
    });
});