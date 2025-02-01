const { makeVerifier } = require('./01-password-verifier');
describe('password verifier', () => {
    describe('given logger and passing scenario', () => {
        it('calls the logger with PASS', () => {
            let logged = '';
            const mockLog = { info: (text) => (logged = text)}; // log.info 호출했을때 stub
            const passVerify = makeVerifier([], mockLog); // 고차 함수를 생성해서 재활용 가능

            passVerify('any input');
            passVerify('any input');

            expect(logged).toMatch(/PASSED/);
        });
    });
});
