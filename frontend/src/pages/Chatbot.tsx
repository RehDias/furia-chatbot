import { useEffect, useRef, useState } from "react";
import furia from "../assets/f.png";
import logo from "../assets/image.png";
import background from "../assets/dd.png";

type Message = {
  sender: 'user' | 'bot';
  content: string;
};

function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([
      {
        sender: 'bot',
        content: 'Olá! Sou o FURIA Bot. Pergunte qualquer coisa sobre o time de CS da FURIA!',
      }
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      const botMessage = { sender: 'bot' as const, content: data.message };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setMessages(prev => [...prev, { sender: 'bot', content: 'Erro ao se comunicar com o servidor.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-1 text-neutral-900">
        <img src={furia} alt="FURIA Logo" className="w-100 object-fill mb-4" />
        
        <div className="w-full max-w-xl rounded-xl p-4 flex flex-col gap-2 overflow-y-auto h-[350px] scroll-transparent bg-white/60 backdrop-blur-md shadow-lg scroll-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 max-w-[80%] ${
                msg.sender === 'user'
                  ? 'self-end text-right'
                  : 'self-start text-left'
              }`}
            >
              <p className="text-sm font-semibold">
                {msg.sender === 'user' ? '' : 
                <img src={logo} alt="FURIA Logo" className="w-7 h-7 inline-block mr-2" />}
              </p> 
              <p>{msg.content}</p>
            </div>
          ))}
          {loading && <p className="text-sm italic text-neutral-800 animate-pulse">Digitando...</p>}
          <div ref={bottomRef} /> {/* Ref que acompanha o final do chat */}
        </div>

        <div className="w-full max-w-xl flex mt-4 gap-2">
          <input
            type="text"
            className="flex-1 p-4 rounded-lg bg-zinc-700 text-white outline-none focus:ring-2 focus:ring-indigo-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua pergunta sobre a FURIA..."
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
