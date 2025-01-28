const {
    inject,
    verifyPassword,
    SATURDAY
} = require('./password-verifier-time00-modular');

// stub, fake 함수를 생성하여 반환
const injectDate = (newDay) => {
    const reset = inject({
        moment: function () {
            return {
                day: () => newDay
            };
        }
    });

    return reset; // 함수를 반환
};


describe('verifyPassword', () => {
    describe('when its the weekend', () => {
        it('throws an error', () => {
            const reset = injectDate(SATURDAY);

            expect(() => verifyPassword('any input'))
                .toThrowError("It's the weekend!");

            reset(); // 원래 의존성으로 복구
        });
    });
});
