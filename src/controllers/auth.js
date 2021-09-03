const { response } = require("express");
const verifyGoogleToken = require("../services/google_services");

const googleAuth = async (req, res = response, next) => {
  const token = req.body.token;
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Token is empty",
    });
  }

  const googleUser = await verifyGoogleToken(token);
  if (!googleUser) {
    return res.status(401).json({
      ok: false,
    });
  }

  //TODO: save user on DB

  console.log(googleUser);

  res.json({
    ok: true,
    user: googleUser,
  });
};

module.exports = googleAuth;
