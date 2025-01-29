const {RealTimeProvider} = require('./time-provider');
const {PasswordVerifier} = require('./password-verifier-time02');

// 팩토리 함수를 이렇게 생성하면 된다거만 설명하고 넘어감
const passwordVerifierFactory = (rules) => {
    return new PasswordVerifier(rules, new RealTimeProvider());
}

module.exports = {
    passwordVerifierFactory
};
