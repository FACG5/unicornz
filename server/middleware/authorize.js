exports.authorize = (req, res, next) => {
  authCheck(req, (authErr, token) => {
    if (authErr) {
      res.redirect('/login');
    } else {
      req.token = token;
      req.userauthed = true;
      next();
    }
  });
}
