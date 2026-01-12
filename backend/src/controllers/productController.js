import { sql } from "../db/db.js";

export const getAllProducts = async (req, res) => {
    try {
    const products = await sql`
    SELECT * FROM products
    `;

    console.log("fetched products", products)
    res.status(200).json({success:true, data: products})

    
  } catch (error) {
    console.log("Error in getAllProducts", error)
    res.status(500).json({success: false, message: "Internal server error"})

  }
}

export const createProduct = async (req, res) => {
  const {productname, price, stock} = req.body
  if (!productname || !price || !stock) {
    return res.status(400).json({success: false, message: "All fields are required"})
  }

  try {
    const newProduct = await sql`
    INSERT INTO products (productname, price, stock)
    VALUES (${productname},${price},${stock})
    RETURNING *
    `;

    res.status(201).json({success: true, data:newProduct[0]})
  } catch (error) {
    console.log("Error in getAllProducts", error)
    res.status(500).json({success: false, message: "Internal server error"})
  }


}