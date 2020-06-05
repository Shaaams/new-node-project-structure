import path from 'path';
import {request, response} from 'core/application'
import validator from 'core/validator';
export default class HomeController{
    
    homePage(){
        response().sendFile(path.resolve(__dirname + '/../views/form.html'));
        
        //return `Welcome Home Page ${req.path}`;
    }

    submitForm(){
        let validator =this.validate();
        if (validator.isValid){
            response().send(request().body)
        }else {
            response().send({
                errors: validator.errors,
            });
        }
    }

    validate(){
        return validator.makeValidate({
            name: validator.input().required('name is required'),
            email: validator.input().required().email(),
            password: validator.input().required().minLength(10),
            confirmPassword: validator.input().match('password'),
        })
        // return validator.rules({
        //     name: 'required',
        //     email: 'required|email',
        //     password: 'required|minLength:8',
        //     confirmPassword: 'match:password'
        // })
    }
}