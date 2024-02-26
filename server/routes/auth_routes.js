import express from 'express'

const router = express.Router();

import registrationValidation from "../validation/userValidation.js";
import auth_controller from "../controllers/auth_controller.js"

router.post('/register',registrationValidation,auth_controller.register)

// const {registrationValidation} = 