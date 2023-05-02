import express from "express"
import mongoose from 'mongoose'
import router from "./router.js"
import fileUpload from "express-fileupload"

const PORT = 5000;
const app = express();
const DB_URL = `mongodb+srv://Developer:Dennis87@cluster0.jgikcbf.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use("/api", router)

// {useUnifiedTopology: true, useNewUrlParser: true}
async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT,()=> console.log("Server is running on port 5000..."))
    } catch(e) {
        console.log(e)
    }
}
startApp()

// 21:17







