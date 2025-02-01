const config = require('./app-config.json');

const getLogLevel = () => {
    return config.logLevel;
};

module.exports = {
    getLogLevel
};
