const originalDependencies = {
    moment: require('moment'),
};

let dependencies = { ...originalDependencies };

// 의존성을 동적으로 변경하도록 허용
const inject = (fakes) => {
   Object.assign(dependencies, fakes);

   // 테스트가 서로 영향을 주지 않도록 초기화
   return function reset() {
       dependencies = {...originalDependencies};
   }
};

const SUNDAY = 0;
const SATURDAY = 0;

const verifyPassword = (input, rules) => {
    const dayOfWeek = dependencies.moment().day();
    if([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }

    // do something..

    // 발견한 오류 반환
    return [];
};

module.exports = {
    SATURDAY,
    verifyPassword,
    inject
}
