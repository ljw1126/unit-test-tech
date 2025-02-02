import {PasswordVerifier2, PasswordVerifier2 as PasswordVerifier} from './01-password-verifier';
import { RealLogger } from "./real-logger";

describe('password verifier with interfaces', () => {
    it('verify, with logger, calls logger', () => {
        const testableLog: RealLogger = new RealLogger();
        let logged = '';
        testableLog.info = (text) => (logged = text);

        const verifier = new PasswordVerifier([], testableLog);
        verifier.verify('any input');

        expect(logged).toMatch(/PASSED/);
    });
});


class TestableLogger extends RealLogger {
    logged = '';
    info(text) {
        this.logged = text;
    }
}

describe('partial mock with inheritance', () => {
    it('verify, with logger, calls logger', () => {
        const mockLog: TestableLogger = new TestableLogger();

        const verifier = new PasswordVerifier([], mockLog);
        verifier.verify('any input');

        expect(mockLog.logged).toMatch(/PASSED/);
    });
});