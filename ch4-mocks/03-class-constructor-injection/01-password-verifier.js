class FakeLogger {
    logged = '';

    info(text) {
        this.logged = text;
    }
}

module.exports = {
    FakeLogger
}