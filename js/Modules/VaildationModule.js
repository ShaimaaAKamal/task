export class Validation{
    validateName(name){
        const regex=/^[a-zA-z][a-zA-Z0-9]{3,13}[a-zA-z]$/;
       return regex.test(name);
    }
    validateMail(mail){
        const regex=/^[a-zA-z][a-zA-Z0-9._]{2,}@(gmail|hotmail|yahoo)\.[a-z]{2,3}$/;
        return regex.test(mail);
    }
    validatePassword(password){
        const regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/
        return regex.test(password);
    }
}