const { verifyPassword } = require('../password-verifier0');
	
describe('verifyPassword', () => {
    describe('with a failing rule', () => {
        const fakeRule = () => ({passed: false, reason: 'fake reason'});
        
        test('returns errors', () => {

          const errors = verifyPassword('any value', [fakeRule]);

          expect(errors[0]).toContain('fake reason');
        });
    });
});
