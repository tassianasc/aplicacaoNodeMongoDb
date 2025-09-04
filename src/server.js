const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const PORT = 3000;

require("dotenv").config();

// Checagem mínima de variáveis de ambiente
if (!process.env.DB_URI) {
  console.warn("⚠️  Variável DB_URI não definida no .env.");
}
if (!process.env.JWT_SECRET) {
  console.warn("⚠️  Variável JWT_SECRET não definida no .env.");
}

// Conexão com MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("✅ Conexão com o banco estabelecida com sucesso");
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar no banco:", error.message);
  });

// Middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rotas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
