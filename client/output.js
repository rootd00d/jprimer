module.exports = (response) => {
    if (isNaN(response.number)) {
        console.error('Query was non-numeric');
        return false;
    }
    if (typeof(response.result) != 'boolean') {
        console.error('Result was non-boolean');
        return false;
    }
    console.log(`(${response.number}) -> ${response.result}`);
    return true;
};
