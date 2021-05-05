const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const authConfig = {
    domain: "dev-2q8e2744.us.auth0.com",
    audience: "http://localhost:3001",
};

// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"],
});

module.exports = checkJwt;