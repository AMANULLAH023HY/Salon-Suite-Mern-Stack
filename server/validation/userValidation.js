import check from 'express-validator'

exports.registrationValidation = [
    check('name','Name is required!').not().isEmpty(),
    check('email','Enter valid email').isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('password', 'Password is required').isLength({min:6}),
    check('confirm_password').custom((value, {req}) => {
        if(value != req.body.password) {
            throw new Error('Password is not matching!')
        }
        return true;
    })
]