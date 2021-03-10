module.exports = function toReadable(number) {
    const simpleNums = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
    ]);

    const dozens = new Map([
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ]);

    if (number < 20) {
        return simpleNums.get(number);
    }

    let result = "";

    if (number < 100 && number >= 20) {
        const dozen = dozens.get(Math.floor(number / 10) * 10);
        let digit = "";
        if (number % 10 !== 0) {
            digit = simpleNums.get(number % 10);
            result = `${dozen} ${digit}`;
        } else {
            result = dozen;
        }
    } else {
        const hundred = simpleNums.get(Math.floor(number / 100));
        if (number % 100 === 0) {
            result = `${hundred} hundred`;
        } else {
            let dozen = "";
            let rest = "";

            if (Math.floor((number % 100) / 10) >= 2) {
                dozen = dozens.get(Math.floor((number % 100) / 10) * 10);
                rest = (number % 100) - Math.floor((number % 100) / 10) * 10;
                if (rest) {
                    result = `${hundred} hundred ${dozen} ${simpleNums.get(
                        rest
                    )}`;
                } else {
                    result = `${hundred} hundred ${dozen}`;
                }
            } else {
                rest = simpleNums.get(number % 100);
                result = `${hundred} hundred ${rest}`;
            }
        }
    }

    return result;
};
