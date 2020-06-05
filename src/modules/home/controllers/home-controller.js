import path from 'path';
import validator from 'core/validator';


export function showHome(request, response){

    response.sendFile(path.resolve(__dirname + '/../views/form.html'));
}

export function submitForm(request, response){

    let validator = validate();
        //success
    if (validator.isValid){
        response.send(request().body)
        //failed
    }else {
        response.send({
            errors: validator.errors,
        });
    }
}

function validate(){
    return validator.makeValidate({
        name: validator.input().required('name is required'),
        email: validator.input().required().email(),
        password: validator.input().required().minLength(10),
       // confirmPassword: validator.input().match('password'),
    });
}