const express = require("express");

const routes = express.Router();

const TweetControllers = require('./controllers/tweetcontrollers');
const LikeControllers = require('./controllers/likecontrollers');

/* teste */
routes.get("/", (req, res) =>{
    return res.send('hello rotas');
});
// fim do teste 
routes.get("/tweets", TweetControllers.index);
routes.post("/tweets", TweetControllers.store);
routes.post('/likes/:id', LikeControllers.store);

module.exports = routes;
