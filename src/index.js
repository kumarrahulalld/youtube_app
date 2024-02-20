import dotenv from "dotenv"
import connectDB from "../db/index.js";
import express from "express";
dotenv.config({
    path: './.env'
})
const app = express()
const db = connectDB().
                    then(()=> {
                        app.listen(process.env.PORT,() => {
                            console.log("App is running.")
                        })
                    })
app.get('/',(req,res) => {
    res.send("Hello World! Rahul")
})