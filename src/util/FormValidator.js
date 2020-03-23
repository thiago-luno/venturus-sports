import validator from 'validator';

class FormValidator {

    constructor(validations) {
        this.validations = validations;

    }

    check() {
        const validation = {};

        this.validations.map(
            rule => (validation[rule.field] = { isInvalid: false, message: '' })
        );

        return { isValid: true, ...validation };
    }

    valid(state) {
        let validation = this.check();

        this.validations.forEach(rule => {

            const field = state[rule.field.toString()];
            const args = rule.args || [];
            const validationMethod = validator[rule.method];

            if(validationMethod(field, args) !== rule.isValidWhen) {

                validation[rule.field] = {
                    isInvalid: true,
                    message: rule.message
                }

                validation.isValid = false;
            } 
        });

        return validation;
        
    }


}

export default FormValidator