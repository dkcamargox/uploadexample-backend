require('dotenv').config();

const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
mongoose.connect("mongodb+srv://dkcamargox:camargo1508@cluster0-zmptz.gcp.mongodb.net/test?retryWrites=true&w=majority" , 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp',  'uploads')));
app.use(require("./routes"));
app.listen(process.env.PORT || 3001);
