import config from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT 


app.listen(port, () => {
    console.log("Server läuft auf dem Port 3000");
  });