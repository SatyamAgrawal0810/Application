import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js"

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURl = process.env.MONGO_URI;

mongoose.connect(MONGOURl).then(()=>{
    console.log("Database connected successul.")
    app.listen(PORT,()=>{
        console.log('server is running on port 5000')
    })
})
.catch((error) => console.log(error));

app.use("/api/user", route)