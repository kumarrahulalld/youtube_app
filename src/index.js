import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js"
dotenv.config({
    path: './.env'
})
const db = connectDB().
                    then(()=> {
                        app.listen(process.env.PORT || 3000,() => {
                            console.log("App is running.")
                        })
                    })
app.get('/',(req,res) => {
    res.send("Hello World! Rahul")
})