exports.checkCredit = (req, res, next) => {
  const { credits } = req.user;
  if (credits <= 0) {
    return res.status(401).send("Not enough credits");
  }
  return next();
};
