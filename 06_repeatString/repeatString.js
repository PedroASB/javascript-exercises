const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let rep = '';
    while (num--) rep += string;
    return rep;
};

// Do not edit below this line
module.exports = repeatString;
