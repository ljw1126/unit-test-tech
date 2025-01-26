const { verifyPassword } = require('../password-verifier0');
	
test('badly named test', () => {
  // 테스트 준비-함수에 전달할 매개변수를 초기화한다
  const fakeRule = (input) => ({passed: false, reason: 'fake reason'});

  // 함수 실행의 인자로 전달한다
  const errors = verifyPassword('any value', [fakeRule]);

  // 함수의 반환 값을 기대 값과 비교한다
  expect(errors[0]).toMatch('fake reason');
});
