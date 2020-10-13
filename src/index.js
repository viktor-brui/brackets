module.exports = function check(str, bracketsConfig) {
    const findBrackets = (newStr) => {
        for (i = 0; i < newStr.length; i++) {
            for (j = 0; j < bracketsConfig.length; j++)
                if (newStr[i] == bracketsConfig[j][0]) {
                    if (newStr[i + 1] == bracketsConfig[j][1]) {
                        return i;
                    }
                }
        }
        return false;
    };
    str = str.split("");
    if (str.length % 2 == 1) {
        return false;
    } else {
        let find = findBrackets(str);
        while (find === 0 || find > 0) {
            find = findBrackets(str);
            if (find === 0 || find > 0) {
                str.splice(find, 2);
            }
        }
        return str.length == 0;
    }
};
