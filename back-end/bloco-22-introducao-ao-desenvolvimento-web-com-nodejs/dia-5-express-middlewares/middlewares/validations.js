const isValidUserName = (req, res, next ) => {
  const { username } = req.body;

  if(!username || username < 3)
    return res.status(400).json({message: 'invalid data'});

    next();
}