import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateFuriaResponse(userMessage: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `Você é um assistente especialista no time FURIA, com foco em CS:GO. Responda como um torcedor 
          informado e respeitoso, com um tom simples. Use linguagem clara, com entusiasmo moderado.
          Evite assumir gênero ao responder.`,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    return completion.choices[0].message?.content || 'Desculpe, não consegui gerar uma resposta.';
  } catch (error) {
    console.error('Erro ao gerar resposta da OpenAI:', error);
    throw new Error('Erro ao se comunicar com a OpenAI');
  }
}
