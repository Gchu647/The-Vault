'use strict';
module.exports = function () {
    var vaultKey = "secret password";
    var vaultValue = "Nothing";

    var setValue = function (key, value) {
        vaultKey = key;
        vaultValue = value;
    }

    var getValue = function (key) {
        if (key === vaultKey) {
            return vaultValue;
        } else {
            return null;
        }
    }

    return {
        setValue: setValue,
        getValue: getValue
    }
};