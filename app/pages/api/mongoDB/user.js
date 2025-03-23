import { connectMongo } from "@/lib/dbMongo";
import User from "@/models/User"; // Asegúrate de definir un modelo

export default async function handler(req, res) {
  await connectMongo();

  if (req.method === "GET") {
    const users = await User.find();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
  }

  res.status(405).end(); // Método no permitido
}
