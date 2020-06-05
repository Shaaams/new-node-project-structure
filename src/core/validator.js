import {request as requestHandler} from 'core/application';
import Input from 'core/input';

import { Is } from '@flk/supportive-is';
class Validator{
    /**
     * Rules List
     * @var {Object}
     */

    rulesList = {};

    /**
     * Errors List
     * @var {Object}
     */
    errors = {};

    /**
     * A flag to indicator the passed inputs are value
     * @var {boolean}
     */
    isValid = true;

    /**
     * 
     * @param {String} name 
     * @returns ValidatorInput
     */
    input(name){
        return new Input(name);
    }

    /**
     * 
     * @param {Object} rules
     * @returns {Validator} 
     */
    rules(rules){
        this.rulesList = rules;
        return this;
    }

    /**
     * Validate all rules
     * @returns {Validator} Validator
     */
    validate(){
        
        let request = requestHandler()
        // loop over all of our rules list
        for(let name in this.rulesList){
            let input = this.rulesList[name]; // Input Object
                input.setName(name).setValue(request.body[name]);

                input.inputValidate();
                if(input.errorMessage){
                    this.errors[name] = input.errorMessage;
                }
        }
        if ( ! Is.empty(this.errors)){
            this.isValid = false;
        }
        
        return this;
    }

    /**
     * Add rules and validate it
     * 
     * @param {object} rules 
     * @returns {Validator} Validator
     */
    makeValidate(rules){
        return this.rules(rules).validate();
    }
}

export default new Validator;