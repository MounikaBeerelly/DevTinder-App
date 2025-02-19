const validator = require('validator');

const validateSignUpData = (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if(!firstName || !lastName) {
        throw new Error("Name is not valid!");
    }
    else if(firstName.length < 4 || firstName.length > 50) {
        throw new Error("Firstname should be 4-50 characters.")
    }
    else if(!validator.isEmail(emailId)) {
        throw new Error("Email is not valid!");
    }
    else if(!validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong password!")
    }
};

const validateProfileData = (req) => {
    const allowedEditFields = [
        "firstName",
        "lastName", 
        "emailId",
        "photoUrl", 
        "gender", 
        "age", 
        "about", 
        "skills"]; 

    const isEditallowed = Object.keys(req.body).every(field =>
        allowedEditFields.includes(field));
    return isEditallowed;
};

module.exports = { 
    validateSignUpData,
    validateProfileData,
 };