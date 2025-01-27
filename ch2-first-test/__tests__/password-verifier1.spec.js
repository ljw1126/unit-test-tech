const { PasswordVerifier1 } = require('../password-verifier1');

describe('PasswordVerifier', () => {
  let verifier;
  beforeEach(() => (verifier = new PasswordVerifier1()));

  describe('with a failing rule', () => {
     let fakeRule, errors;
     // beforeEach()에서 verify 호출하도록 변경
     beforeEach(() => {
       verifier.addRule(makeFailingRule('fake reason'));
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
         verifier.addRule(makePassingRule());
         errors = verifier.verify('any value');
     });

     it('has no errors', () => {
       expect(errors.length).toBe(0);
     });
  });

  describe('with a failing and a passing rule', () => {
     let fakeRulePass, fakeRuleFail, errors;
     beforeEach(() => {
        verifier.addRule(makePassingRule());
        verifier.addRule(makeFailingRule('fake reason'));
        errors = verifier.verify('any value');
     });

     it('has one error', () => {
        expect(errors.length).toBe(1);
     });

     it('error text belongs to failed rule', () => {
        expect(errors[0]).toContain('fake reason');
     });
  });

  const makeFailingRule = (reason) => {
     return () => {
        return { passed: false, reason: reason }; 
     };
  };

  const makePassingRule = () => () => {
     return { passed: true, reason: ''};
  };

});


const makeVerifier = () => new PasswordVerifier1();
const passingRule = () => ({passed: true, reason: ''});

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerifier();
  verifier.addRule(passingRule);
  return verifier;
};

const makeVerifierWithFailedRule = (reason) => {
  const verifier = makeVerifier();
  const fakeRule = () => ({ passed: false, reason: reason});
  verifier.addRule(fakeRule);
  return verifier;
};

describe('v8 PasswordVerifier', () => {
  describe('with a failing rule', () => {
     it('has an error message based on the rule.reason', () => {
        const verifier = makeVerifierWithFailedRule('fake reason');
        const errors = verifier.verify('any input');
        expect(errors[0]).toContain('fake reason');
     });

     it('has exactly one error', () => {
        const verifier = makeVerifierWithFailedRule('fake reason');
        const errors = verifier.verify('any input');
        expect(errors.length).toBe(1);
     });
  });

  describe('with a passing rule', () => {
     it('has no errors', () => {
        const verifier = makeVerifierWithPassingRule();
        const errors = verifier.verify('any input');
        expect(errors.length).toBe(0);
     });
  });

  describe('with a failing and a passing rule', () => {
     it('has one error', () => {
        const verifier = makeVerifierWithFailedRule('fake reason');
        verifier.addRule(passingRule);
        const errors = verifier.verify('any input');
        expect(errors.length).toBe(1);
     });

     it('error text belongs to failed rule', () => {
        const verifier = makeVerifierWithFailedRule('fake reason');
        verifier.addRule(passingRule);
        const errors = verifier.verify('any input');
        expect(errors[0]).toContain('fake reason');
     });
  });

});



