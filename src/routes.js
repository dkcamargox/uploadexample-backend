const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const Post = require("./models/Post");
const Controler = require('./Controllers/PostsControllers');

routes.get('/posts', Controler.reads );

routes.post("/posts", multer(multerConfig).single('file'), Controler.send );

routes.delete('/posts/:id', Controler.del );

module.exports = routes;