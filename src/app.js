import express, { json, urlencoded } from "express"
import cors from "cors"
import coockieParser from "cookie-parser"
const app = express()
app.use(cors())
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static('public'))
app.use(coockieParser)
export default app