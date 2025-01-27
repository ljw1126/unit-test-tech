const { PasswordVerifier1 } = require('../password-verifier1');

describe('PasswordVerifier', () => {
  let verifier;
  beforeEach(() => (verifier = new PasswordVerifier1()));

  describe('with a failing rule', () => {
     let fakeRule, errors;
     // beforeEach()에서 verify 호출하도록 변경
     beforeEach(() => {
       fakeRule = () => ({ passed: false, reason: 'fake reason' });
       verifier.addRule(fakeRule);
       errors = verifier.verify('any value');
     });

     it('has an error message based on the rule.reason', () => {
        expect(errors[0]).toContain('fake reason');
     });

     it('has exactly one error', () => {
         expect(errors.length).toBe(1);
     });
  });
});
