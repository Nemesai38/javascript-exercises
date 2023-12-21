const removeFromArray = function(args) {
    let argArraylen = arguments.length;
    for (let i = 1; i < argArraylen; i++) {
        let realArg = arguments[i];
        let realArgIndex = arguments[0].indexOf(realArg);
        if (realArgIndex === -1) {
            continue
        }
        arguments[0].splice(realArgIndex, 1)
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
