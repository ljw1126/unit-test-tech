const { verifyPassword } = require('../password-verifier0');
	
describe('verifyPassword', () => {
    describe('with a failing rule', () => {
        it('returns errors', () => {
          const fakeRule = () => ({passed: false, reason: 'fake reason'});

          const errors = verifyPassword('any value', [fakeRule]);

          expect(errors[0]).toContain('fake reason');
        });
    });
});
