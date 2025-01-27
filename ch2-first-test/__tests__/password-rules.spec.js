const { oneUpperCaseRule } = require('../password-rules');

//parameterized
describe('v2 one uppercase rule', () => {
  test('given no uppercase, it fails', () => {
    const result = oneUpperCaseRule('abc');
    expect(result.passed).toEqual(false);
  });

  test.each(['Abc', 'aBc'])('given one uppercase, it passes', (input) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toEqual(true);
  });
});

describe('v3 one uppercase rule', () => {
  test.each([
        ['Abc', true],
        ['aBc', true],
        ['abc', false],
  ])('given %s, %s ', (input, expected) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toEqual(expected);
  });
});

describe('v4 one uppercase rule, with the fancy jest table input', () => {
  test.each`
   input    | expected
   ${'Abc'} | ${true}
   ${'aBc'} | ${true}
   ${'abc'} | ${false}
  `('given $input', ({input, expected}) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toEqual(expected);
  });
});


describe('v5 one uppercase rule, with vanilla JS test.each', () => {
  const tests = {
     Abc: true,
     aBc: true,
     abc: false
  };

  for(const [input, expected] of Object.entries(tests)) {
      test(`given ${input}, ${expected}`, () => {
        const result = oneUpperCaseRule(input);
        expect(result.passed).toEqual(expected);
      });
  }
});
