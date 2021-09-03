const { OAuth2Client } = require("google-auth-library");

let CLIENT_ID = "";
let CLIENT_ID2 = "";
let CLIENT_ID3 = "";
const client = new OAuth2Client(CLIENT_ID);

const verifyGoogleToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [CLIENT_ID, CLIENT_ID2, CLIENT_ID3],
    });
    const payload = ticket.getPayload();

    return {
      id: payload["sub"],
      name: payload["name"],
      email: payload["email"],
      picture: payload["picture"],
      exp: payload["exp"], //expires in
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = verifyGoogleToken;
