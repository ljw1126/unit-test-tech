const { verifyPassword } = require('../password-verifier0');
	
test('verifyPassword, given a failing rule, returns errors', () => {
  const fakeRule = (input) => ({passed: false, reason: 'fake reason'});

  const errors = verifyPassword('any value', [fakeRule]);

  expect(errors[0]).toContain('fake reason');
});
