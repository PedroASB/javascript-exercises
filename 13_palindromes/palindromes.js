const palindromes = function(str) {
    str = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i] !== str[j]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
