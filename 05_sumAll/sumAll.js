const sumAll = function(int1, int2) {
    if (isNaN(int1) || isNaN(int2)) return "ERROR";
    if (typeof int1 === "string" || typeof int2 === "string") return "ERROR"
    if (int1 < 0 || int2 < 0) return "ERROR";
    if (int1 > int2) {
        let int2 = arguments[0];
        let int1 = arguments[1];
        let array = [int1];
        for (let i = int1; i < int2; i++) {
            int1 += 1;
            array.push(int1)
        }
        let arraysum = array[0];
        for (let i = 1; i < array.length; i++) {
            arraysum += array[i]
        }
        return arraysum;
    } else {
        let array = [int1];
        for (let i = int1; i < int2; i++) {
            int1 += 1;
            array.push(int1);
        }
        let arraysum = array[0];
        for (let i = 1; i < array.length; i++) {
            arraysum += array[i]
        }
        return arraysum;
    }
};

// Do not edit below this line
module.exports = sumAll;
