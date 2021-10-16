module.exports = {
    /**
     * Verfica se no determinado texto recebido contém caracteres especiais
     * @param { String } text recebe o texto a ser verificado
     * @throws { Error } caso encontre retorna um thrown
     */
    hasCharSpacial(text) {
        var expreg =
            /[\%\$+\@+\$+\!+\$+\$+\&+\¨+\*+\{+\}+\[+\]+\'+\´\`\^\~\/\;']/gi;
        if (expreg.test(text)) {
            throw { message: `Special characters are not allowed.` };
        }
        return false;
    },

    /**
     * Verifica se os valore passado é vazio ou indefinido, valida com Array ou String
     * @param { String } input recebe o valor a ser verificado
     * @returns { Boolean } retorna True se não houver valor
     */
    isNull(input) {
        if (input == null || typeof input == "undefined" || input.length < 1) {
            return true;
        }
        if (
            typeof input == "object" &&
            ((Array.isArray(input) && input.length == undefined) ||
                Object.keys(input).length < 1)
        ) {
            return true;
        }
        return false;
    },

    /**
     *  Verifica se os valores dos atributos estão preenchidos. Se estiver um unico retorna um Throw.
     * @param { Object } obj objeto a ser verificado
     * @returns { throw } Erro para parametro vazio;
     * @author Mateus Nicolau.
     *
     */
    attributeIsNull(obj) {
        if (this.isNull(obj)) {
            throw { message: "It is necessary to inform the data." };
        }
        for (var param in obj) {
            if (this.isNull(obj[param])) {
                throw { message: `It is necessary to inform the ${param}.` };
            }
        }
        return false;
    },

    /**
     *  Defini tamanhos para valores de strings, espaços e caracteres especiais tambem são contados
     * @param { String } string recebe o texto a ser verificado
     * @param { String } inputName nome original do input
     * @param { Number } min define o tamanho minimo, por padrão 20
     * @param { Number } max define o tamanho maximo, por padrão 200
     * @returns { Boolean } retorna true se estiver correto
     * @throws { Error }  Exception caso viole as limitações
     *
     */
    checkSize(string, inputName, min = 20, max = 200) {
        if (string.length < min) {
            throw {
                message: `The ${inputName} text is too short : min is ${min} char`,
            };
        }
        if (string.length > max) {
            throw {
                message: `The ${inputName} text is too long : max is ${max} char`,
            };
        }
        return true;
    },
};
