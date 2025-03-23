import { connectMySQL } from "@/lib/dbMySQL";
import { DataTypes } from "sequelize";
import sequelize from "@/lib/dbMySQL";

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
});

export default async function handler(req, res) {
  await connectMySQL();

  if (req.method === "GET") {
    const products = await Product.findAll();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  }

  res.status(405).end(); // Método no permitido
}
