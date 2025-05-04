import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateFuriaResponse(userMessage: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente animado e fanático por CS:GO, especialista no time FURIA. Responda como um torcedor da FURIA, de forma entusiasmada e divertida.',
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
