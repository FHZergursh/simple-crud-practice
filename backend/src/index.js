import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { sql } from "./db/db.js";


const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

console.log("test")

app.get("/", (req, res) => {
    res.json({message: "truth nuke"})
})


async function initDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS productsFixed (
      id SERIAL PRIMARY KEY,
      productName VARCHAR(255) NOT NULL,
      price VARCHAR(255) NOT NULL, 
      stock DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    console.log("Database initialized successfully!")

  } catch (error) {
    console.log("Error initDB", error)
  }
}

initDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
  })
})