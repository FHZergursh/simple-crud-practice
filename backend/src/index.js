import express from "express"
import cors from "cors"
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

console.log("test")

app.get("/", (req, res) => {
    res.json({message: "truth nuke"})
})


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})