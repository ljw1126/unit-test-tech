const verifyPassword2 = (input, rules, logger) => {
    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => result == false);

    if(failed.length === 0) {
        logger.info('PASSED'); // 외부에서 logger 주입받아 테스트 가능 (stub)
        return true;
    }

    logger.info('FAIL');
    return false;
}

module.exports = {
    verifyPassword2
};
