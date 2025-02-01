const {
    verifyPassword,
    injectDependencies,
    resetDependencies
} = require('./password-verifier-injectable01');

describe('password verifier', () => {
    afterEach(resetDependencies); // 테스트 후 의존성 초기화

    describe('given logger and passing scenario', () => {
        it('calls the logger with PASS', () => {
            let logged = '';
            const mockLog = { info: (text) => (logged = text)}; // log.info 호출했을때 stub

            injectDependencies({log: mockLog}); // 가짜 의존성 주입

            verifyPassword('anything', []);

            expect(logged).toMatch(/PASSED/);
        });
    });
});
