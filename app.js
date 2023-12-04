// const express = require("express");
import "dotenv/config";
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
const CONNECTION_STRING = "mongodb+srv://michellemingxuanwang:web5610@cluster0.gqqgjpa.mongodb.net/?retryWrites=true&w=majority" || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(
    cors({
      credentials: true,
      origin: '*',
      methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    })
   );  
   
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
}

app.use(session(sessionOptions));

  
app.use(express.json());


UserRoutes(app);

ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
HelloRoutes(app);

app.listen(process.env.PORT || 4000);
