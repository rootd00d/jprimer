module.exports = (milliseconds) => {
    var start = new Date();
    var now;
    while (true) {
        now = new Date();
        if (now - start >= milliseconds) {
            break;
        }
    }
};
