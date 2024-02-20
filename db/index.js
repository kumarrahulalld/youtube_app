import mongoose from "mongoose";
import {DB_NAME} from "../src/constants.js"

async function connectDB()
{
    try {
        console.log(process.env.DB_CONNECTION_URI)
        let connection = await mongoose.connect(`${process.env.DB_CONNECTION_URI}/${DB_NAME}`)
        console.log("Connected To MongoDB Successfully :",connection.connection.host)
    } catch (error) {
        console.log("DB Connection Error : ",error)
        process.exit(1)
    }
}
export default connectDB