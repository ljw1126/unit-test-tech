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

  describe('with a passing rule', () => {
     let fakeRule, errors;

     beforeEach(() => {
         fakeRule = () => ({ passed : true, reason : ''});
         verifier.addRule(fakeRule);
         errors = verifier.verify('any value');
     });

     it('has no errors', () => {
       expect(errors.length).toBe(0);
     });
  });

  describe('with a failing and a passing rule', () => {
     let fakeRulePass, fakeRuleFail, errors;
     beforeEach(() => {
        fakeRulePass = () => ({passed: true, reason: 'fake success'});
        fakeRuleFail = () => ({passed: false, reason: 'fake reason'});
        verifier.addRule(fakeRulePass);
        verifier.addRule(fakeRuleFail);
        errors = verifier.verify('any value');
     });

     it('has one error', () => {
        expect(errors.length).toBe(1);
     });

     it('error text belongs to failed rule', () => {
        expect(errors[0]).toContain('fake reason');
     });
  });



});

