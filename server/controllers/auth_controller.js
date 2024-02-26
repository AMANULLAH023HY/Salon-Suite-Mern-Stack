import registrationValidation from 'express-validator'
import bcrypt from 'bcryptjs'
import db from '../config/config.js'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env 

const register = (req,res) => {
    db.query(
        `SELECT * FROM user_registration WHERE LOWER(email) = LOWER(${db.escape(
            req.body.email
        )});`,
        (error,result) => {
            if(result && result.length){
                return res.status(401).send({
                    msg : 'This user is already in use!'
                });
            }else{
                bcrypt.hash(req.body.password,10,(error,hash) => {
                    if(error) {
                        return res.status(402).send({
                            msg : 'Kia baat h ye kiu nh hora insert!',
                            msg : error
                        })
                    }else {
                        db.query(
                            `INSERT INTO user_registration(name,email,password,confirm_password) VALUES (
                                '${req.body.name}',
                                ${db.escape(req.body.email)},
                                ${db.escape(hash)},
                                '${req.body.confirm_password}'
                            );`,
                            (error,result) => {
                                if(error) {
                                    return res.status(403).send({
                                        msg : error
                                    })
                                }
                                return res.status(500).send({
                                    msg : 'Successfully, you have registered!'
                                })
                            }
                        )
                    }
                })
            }
        }
    )
}