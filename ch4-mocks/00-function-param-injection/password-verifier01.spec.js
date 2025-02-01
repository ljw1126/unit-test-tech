const {verifyPassword2} = require('./password-verifier01');

describe('password verifier', () => {
    describe('given logger, and passing scenario', () => {
        it('calls the logger with PASSED', () => {
           let written = '';
           const mockLog = { info: (text) => (written = text)};

           verifyPassword2('anything', [], mockLog);

           expect(written).toMatch(/PASSED/);
        });
    });
});
