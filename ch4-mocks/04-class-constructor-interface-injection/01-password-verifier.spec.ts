import { IComplicatedLogger } from './interfaces/complicated-logger';
import { PasswordVerifier2 } from './01-password-verifier';

describe('', () => {
    describe('', () => {
        class FakeComplicatedLogger implements IComplicatedLogger {
            infoWritten = '';
            debugWritten = '';
            errorWritten = '';
            warnWritten = '';

            debug(text: string, obj: any) {
                this.debugWritten = text;
            }

            error(text: string, location: string, stacktrace: string) {
                this.errorWritten = text;
            }

            info(text: string) {
                this.infoWritten = text;
            }

            warn(text: string) {
                this.warnWritten = text;
            }
        }

        it('verify passing, with logger, calls logger with PASS', () => {
            const mockLog = new FakeComplicatedLogger();

            const verifier = new PasswordVerifier2([], mockLog);
            verifier.verify('anything');

            expect(mockLog.infoWritten).toMatch(/PASSED/);
        });
    });
});