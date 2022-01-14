const router = require('express').Router();
const {
  isValidUserName,
  isValidEmail,
  isValidPassword,
} = require('../middlewares/validations');