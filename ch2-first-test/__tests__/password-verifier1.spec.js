const { PasswordVerifier1 } = require('../password-verifier1');

describe('PasswordVerifier', () => {
  describe('with a failing rule', () => {
     it('has an error message based on the rule.reason', () => {
        const verifier = new PasswordVerifier1();
        const fakeRule = () => ({
           passed: false,
           reason: 'fake reason'
        });
        
        verifier.addRule(fakeRule);
        const errors = verifier.verify('any value');

        expect(errors[0]).toContain('fake reason');
     });
  });
});
