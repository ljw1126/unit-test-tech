const _ = require('lodash');
const log = require('./complicated-logger');

const verifyPassword = (input, rules) => {
    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => result == false);

    console.log(failed);
    if(failed.length === 0) {
        // 이 줄은 전통적인 주입 기법으로 테스트할 수 없다
        log.info('PASSED');
        return true;
    }

    // 이 줄은 전통적인 주입 기법으로는 테스트 할 수 없다
    log.info('FAIL');
    return false;
}

module.exports = {
    verifyPassword
};
