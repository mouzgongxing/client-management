const value = require("../value");

/**
 * Valida o CPF.
 * @param {String} cpf
 * @returns True para valido e Throw para Invalido.
 *
 */
module.exports = (cpf = String) => {
    if (value.isNull(cpf)) throw { message: "CPF is required." };

    var soma = 0;
    var resto;

    if (cpf == "00000000000") throw { message: "Format CPF invalid" };

    for (i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);

    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)))
        throw { message: "Format CPF invalid" };

    soma = 0;
    for (i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11)))
        throw { message: "Format CPF invalid" };
    return true;
};
