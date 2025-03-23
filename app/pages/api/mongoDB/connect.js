import { connectMongo } from "@/server/database/mongo";

export default async function handler(req, res) {
  try {
    await connectMongo();
    res.status(200).json({ message: "✅ Conectado a MongoDB correctamente" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error al conectar a MongoDB", details: error.message });
  }
}
