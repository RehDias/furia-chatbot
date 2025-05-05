# Chatbot da FURIA (Desafio Conversacional)

Este projeto foi desenvolvido como parte do **Challenge #1: Experiência Conversacional [NORMAL]** proposto pela organização FURIA. O objetivo era criar uma experiência de chat para fãs do time de CS:GO, com respostas contextualizadas e interativas, usando inteligência artificial.

## Descrição

Um chatbot web simples e responsivo, que responde perguntas sobre a equipe de CS:GO da FURIA. A IA foi treinada para se comportar como um torcedor informado e engajado, respondendo de maneira direta, objetiva e sem gênero. A aplicação é composta por um front-end em React + Vite + Tailwind CSS e um back-end em Node.js + TypeScript, utilizando a API da OpenAI para gerar as respostas.

---

## Funcionalidades

- Envio de mensagens e respostas em tempo real
-  Integração com a API da OpenAI (modelo GPT-4)
-  Contexto mantido durante a conversa
-  Mensagem inicial de boas-vindas
-  Scroll automático ao enviar mensagens
-  Interface estilizada com identidade visual da FURIA (TailwindCSS)

---

##  Tecnologias utilizadas

### Front-end:
- React + TypeScript
- Vite
- TailwindCSS

### Back-end:
- Node.js
- TypeScript
- Express
- OpenAI API

---

##  Estrutura de pastas

```bash
furia-chatbot/
├── backend/
│   ├── src/
│   │   ├── openai.ts
│   │   └── server.ts
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Chatbot.tsx
│   │   └── assets/
│   └── index.html
```

##  Como rodar o projeto localmente

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/furia-chatbot.git
cd furia-chatbot
```

2. Backend

```bash
cd backend
npm install
# Configure sua API Key no .env: OPENAI_API_KEY=...
npm run dev
```

3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Acesse em http://localhost:5173

##  Demonstração em vídeo
https://github.com/user-attachments/assets/831e6910-c6bc-4aa2-af37-f5342df8025c

## Licença
Este projeto foi criado exclusivamente para fins de demonstração e não possui vínculo oficial com a FURIA Esports.
