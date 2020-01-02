const User = require("../models/User");
exports.checkCredit = async (req, res, next) => {
  //console.log(req.user);
  //const { credits } = req.user;
  const { id } = req.user;
  let user = await User.findOne({ _id: id });
  let { credits } = user;
  if (credits <= 0) {
    return res.status(403).send("Not enough credits");
  }
  return next();
};
