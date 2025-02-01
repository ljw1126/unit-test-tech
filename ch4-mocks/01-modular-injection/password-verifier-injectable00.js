const {info, debug} = require('./complicated-logger');
const {getLogLevel} = require('./configuration-service');

// 로그 레벨에 따라 구분하여 로그 출력
const log = (text) => {
    if(getLogLevel() === 'info') {
        info(text);
    }

    if(getLogLevel() === 'debug') {
        debug(text);
    }
};

// 예로 if문에서 버그가 발생했을때 이 버그가 있었다는 것을 증명하거나 단위 테스트로 버그 수정했음을 어떻게 증명하겠는가?
// 이 코드에서는 require로 모듈을 사용하고 있어 강결합 상태라 변경이 어렵다
const verifyPassword = (input, rules) => {
  const failed = rules
      .map((rule) => rule(input))
      .filter((result) => result === false);

  if(failed.length === 0) {
      log('PASSED');
      return true;
  }

  log('FAIL');
  return false;
};

module.exports = {
    verifyPassword
}


