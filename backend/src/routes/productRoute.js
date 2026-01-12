import express from "express"

const router = express.Router()


app.get("/", (req, res) => {
    res.json({message: "truth nuke"})
})

export default router