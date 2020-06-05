import { Is } from '@flk/supportive-is';
export default class Input{


    /**
     * Input name
     * 
     * @var {String}
     */
    name = null;

    /**
     * Input value
     * 
     * @var {any}
     */
    value = null;

    /**
     * Rules List
     * 
     * @var {object}
     */
    rules = {};

    /**
     * Input error message
     * 
     * @var {String}
     */
    errorMessage = null;

    /**
     * constructor
     * 
     * @param {String} name  
     */
    constructor(name, value){
        this.name = name;
        //this.value = value;
    }

    /**
     * Set input name
     * @param {String} name 
     * @returns {Input} Input
     */
    setName(name){
        this.name = name;
        return this;
    }

    /**
     * Set input value
     * @param {any} value 
     * @requires {Input}
     */
    setValue(value){
        this.value = value;
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    required(errorMessage = 'This Field Is Required'){
        this.rules.required = {

            errorMessage: errorMessage,
            execute: function (value){
                return ! Is.empty(value);
            }
        }
        return this;
    }

    /**
     * Validate input as valid email address
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    email(errorMessage = ' Email Isn\'t Valid'){
        this.rules.email = {

            errorMessage: errorMessage,
            execute: function (value){
                return Is.email(value);
            }
        }
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    minLength(length, errorMessage){
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    length(length, errorMessage){
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    maxLength(length, errorMessage){
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    min(number, errorMessage){
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    equal(value, errorMessage){
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    max(number, errorMessage){
        return this;
    }

    /**
     * Validate input as required
     * @param {String} errorMessage 
     * @returns {Input} Input
     */
    match(input, errorMessage){
        return this;
    }

    inputValidate(){

        console.log(this.name, this.value);
        

        for (let rule in this.rules){
            let ruleData = this.rules[rule];
            let {errorMessage, execute} = ruleData;

            if(execute(this.value) === false){
                //console.log(errorMessage);
                
                this.errorMessage = errorMessage;
                break;
            }
        }

    }
}