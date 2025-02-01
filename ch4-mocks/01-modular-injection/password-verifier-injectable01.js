// 모듈 주입 방식으로 변경
const originalDependencies = {
    log: require('./complicated-logger')
};

let dependencies = { ...originalDependencies };

const injectDependencies = (fakes) => {
    Object.assign(dependencies, fakes); // 의존성을 fakes로 대체
}

const resetDependencies = () => {
  dependencies = { ...originalDependencies }; // 원래 의존성으로 복구
};

const verifyPassword = (input, rules) => {
  const failed = rules
      .map((rule) => rule(input))
      .filter((result) => result === false);

  if(failed.length === 0) {
      dependencies.log.info('PASSED');
      return true;
  }

  dependencies.log.info('FAIL');
  return false;
};

module.exports = {
    verifyPassword,
    injectDependencies,
    resetDependencies
}


