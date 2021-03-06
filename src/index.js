require('dotenv').config();

const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const path = require("path");

const app = express();
mongoose.connect(process.env.MONGO_URL , 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp',  'uploads')));
app.use(require("./routes"));
app.listen(process.env.PORT || 3001);
