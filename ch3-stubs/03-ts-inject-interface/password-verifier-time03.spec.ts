import { TimeProviderInterface} from "./time-provider-interface";
import {PasswordVerifier, SUNDAY} from "./password-verifier-time03";

class FakeTimeProvider implements TimeProviderInterface {
    fakeDay: number;
    getDay(): number {
        return this.fakeDay;
    }
}

describe('password verifier with interface', () => {
    test('on weekends, throws exception', () => {
        const stubTimeProvider = new FakeTimeProvider();
        stubTimeProvider.fakeDay = SUNDAY;
        const verifier = new PasswordVerifier([], stubTimeProvider);

        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });
});
