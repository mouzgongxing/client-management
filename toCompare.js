const value = require("./value");

/**
 * Verifica se as keys de um Objet contem os requisitos passado.
 * @param { Array } requeriments define as keys necessaria
 * @param { Array } obj Objeto para validação
 * @return { Error } Se estiver algum erro retorna uma Exception
 * @author Mateus Nicolau
 */
exports.keys = (req = [], obj = {}, security = true) => {
    if (value.isNull(req))
        throw { message: `You must inform the requirements for validation.` };
    if (value.isNull(obj))
        throw { message: `You must inform the data for validation.` };

    if (security) {
        req.forEach((element) => {
            if (!(element in obj)) {
                throw { message: `The "${element}" attribute is required.` };
            }
        });

        for (const key in obj) {
            if (!req.find((element) => element == key))
                throw { message: ` The ${key} attribute not required.` };
        }

        return true;
    } else {
        req.forEach((element) => {
            if (!(element in obj)) {
                throw { message: `The "${element}" attribute is required.` };
            }
        });
    }
};
