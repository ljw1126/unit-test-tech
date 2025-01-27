const { PasswordVerifier1 } = require('../password-verifier1');

describe('PasswordVerifier', () => {
  let verifier;
  beforeEach(() => (verifier = new PasswordVerifier1()));

  describe('with a failing rule', () => {
     let fakeRule, errors;
     beforeEach(() => {
       fakeRule = () => ({ passed: false, reason: 'fake reason' });
       verifier.addRule(fakeRule);
     });

     it('has an error message based on the rule.reason', () => {
        errors = verifier.verify('any value');

        expect(errors[0]).toContain('fake reason');
     });

     it('has exactly one error', () => {
         errors = verifier.verify('any value');

         expect(errors.length).toBe(1);
     });
  });
});
