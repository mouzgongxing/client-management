const value = require("./value");

/**
 * Verifica o formato do Email
 * @param {String} email
 * @returns True para valido ou Throw para invalido.
 *
 */
module.exports = (email) => {
    var expreg = /^([a-zA_Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gi;
    if (!email) {
        throw { message: "It is necessary to inform the E-mail." };
    } else if (!expreg.test(email)) {
        throw { message: "Invalid email format." };
    } else {
        return true;
    }
};
