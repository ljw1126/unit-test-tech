// lodash 커링을 사용하지 않고 고차 함수를 사용하여 동일하게 표현 가능
const makeVerifier = (rules, logger) => {
    return (input) => {
        const failed = rules
            .map((rule) => rule(input))
            .filter((result) => result === false);

        if(failed.length === 0) {
            logger.info('PASSED');
            return true;
        }

        logger.info('FAIL');
        return false;
    }
};

module.exports = {
    makeVerifier
};
