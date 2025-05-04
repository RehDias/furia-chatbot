import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateFuriaResponse } from './services/openaiService';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await generateFuriaResponse(message);
    res.json({ message: reply });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar resposta' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
