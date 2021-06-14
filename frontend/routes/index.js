const express = require("express");
const router = express.Router();
const { videoToken } = require('../tokens');
const config = require('../config');

  const sendTokenResponse = (token, res) => {
    
    res.send(
      JSON.stringify({
        token: token.toJwt()
      })
    );
  };
  

function routes(app) {
  router.post("/token", (req, res) => {
    console.log(req.body)
   const identity = req.body.identity;
     const room = req.body.room;
      const token = videoToken(identity, room, config);
      sendTokenResponse(token, res)
  });
  
  router.get("/movies/:id", (req, res) => {
    return app.render(req, res, "/movies", { id: req.params.id });
  });

  return router;
};

module.exports = routes;