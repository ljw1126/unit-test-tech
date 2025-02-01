const { verifyPassword3 } = require('./00-password-verifier');
describe('password verifier', () => {
    describe('given logger and passing scenario', () => {
        it('calls the logger with PASS', () => {
            let logged = '';
            const mockLog = { info: (text) => (logged = text)}; // log.info 호출했을때 stub
            const injectedVerify = verifyPassword3([], mockLog);

            // 앞에 방식에서는 가짜 로거 의존성을 주입한 후 호출해야 했는데
            // 커링 방식에서는 미리 매개변수로 전달했기 때문에, 이후에 로거를 다시 주입하지 않고도 코드의 다른 부분에 전달할 수 있다
            injectedVerify('anything');
            injectedVerify('anything2');

            expect(logged).toMatch(/PASSED/);
        });
    });
});
