const isValidUserName = (req, res, next ) => {
  const { username } = req.body;

  if(!username || username < 3)
    return res.status(400).json({message: 'invalid data'});

    next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  if(!email || !email.includes('@') || !email.includes('.com'))
    return res.status(400).json({message : 'invalid data'});

    next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;

  if(!password.match(/^[0-9]*$/) || password < 3 || password > 8);
    return res.status(400).json({message : 'invalid data'});

    next();
}

module.exports = {
  isValidUserName,
  isValidEmail,
  isValidPassword
};