import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  text: string;
  sender: "user" | "bot";
}

interface HistoryItem {
  role: "user" | "model";
  parts: string;
}

interface ChatPart {
  text: string;
}

interface ChatContent {
  role: "user" | "model";
  parts: ChatPart[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<HistoryItem[]>([]);

  const apiKey = "AIzaSyCev56ypqS16XMZXIuXsvYlyGJDAIGOh3k";

  const businessInfo = `You are a comprehensive expert on Wault, the ultimate fix for porch piracy and the daily nuisance of misplaced packages in Indian cities. Your persona is professional, knowledgeable, and helpful, but with a modern, casual, and direct 'Genz' vibe. Your goal is to provide clear, concise answers about the product, keeping the tone friendly but authoritative.

Wault is a sleek, smart, and seriously secure parcel locker designed to keep your online deliveries safe 24/7. It's crafted from premium, matte-black coated iron, making it fully weatherproof, rust-resistant, and durable enough to protect your packages from thieves, rain, dust, and sun. The magic is in its simplicity and security: it operates completely offline—no apps, no Wi-Fi, no Bluetooth—so it's immune to hacking and tech failures. It features a clever two-compartment system: a delivery person uses the obvious one-way drop slot on top, and the parcel falls into the lower secure compartment. This area is accessible only via an advanced biometric fingerprint scanner, which can store up to 20 different prints for your whole household or office. If your fingerprint fails or you get injured, there's a backup USB key access system.


Wault is for everyone who shops online: busy professionals, students, frequent travelers, and even businesses. It’s perfect for both individual houses and apartment buildings, where we can offer building-level integration with dedicated compartments for each flat. It's designed to be versatile—you can mount it, integrate it into a wall or gate, or just let it stand, and it's movable if you change homes. The standard size holds about 3-4 shoeboxes, but since Wault is BTS (Built to Suit), we offer full customization on size, color, and even branding with company logos for corporate gifting or business use. While it isn't insulated for perishable food, it's great for shelf-stable groceries for a couple of hours.

For your reference, the production cost is ₹7,500, and the selling price is ₹10,500 for COD or ₹11,500 on EMI, with delivery charges varying from ₹225 to ₹900 based on location. The current model is offline-first, but future versions will include a vibration sensor with app-based alerts and potential smart home integration. Always be ready to answer any question based on this info, and importantly, be prepared to tell a light-hearted, Wault-related joke if asked. Keep your responses crisp and emoji use minimal. 📦 `;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: businessInfo,
  });

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage: Message = { text: userInput, sender: "user" };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    const formattedHistory: ChatContent[] = chatHistory.map((item) => ({
      role: item.role,
      parts: [{ text: item.parts }],
    }));

    try {
      const chat = model.startChat({ history: formattedHistory });
      const result = await chat.sendMessage(userInput);
      const response = await result.response;
      const text = await response.text();

      const botMessage: Message = { text, sender: "bot" };
      setMessages([...newMessages, botMessage]);
      setChatHistory([
        ...chatHistory,
        { role: "user", parts: userInput },
        { role: "model", parts: text },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { text: "Error generating response.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-black/20 backdrop-blur-md rounded-full shadow-lg hover:bg-black/5   0 transition-all flex items-center justify-center w-20 h-20 border border-gray-700 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          whileTap={{ scale: 0.92 }}
        >
          <img
            src="/b.png"
            alt="Assistant"
            className="w-14 h-14 object-contain]"
          />
        </motion.button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-96 bg-gradient-to-b from-black/80 to-gray-900/80 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] rounded-2xl overflow-hidden border border-gray-600 mt-4"
        >
          {/* Header */}
          <div className="bg-black/60 p-5 flex justify-between items-center text-white border-b border-gray-700">
            <h2 className="text-xl font-semibold">Wault Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 text-3xl hover:text-white font-bold border-none"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="p-5 h-96 overflow-y-auto space-y-3 bg-black/50">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-4 rounded-2xl max-w-[80%] text-sm shadow-md ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-blue-500/90 to-blue-600/80 text-white ml-auto shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                    : "bg-gray-800/90 text-gray-100 shadow-[0_0_8px_rgba(255,255,255,0.05)]"
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </motion.div>
            ))}
            {loading && (
              <div className="flex justify-center">
                <img src="/loader.gif" width="30" alt="Loading..." />
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="p-5 border-t border-gray-700 flex items-center justify-center gap-2 bg-black/60"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask Wault..."
              className="w-full p-3 border border-gray-700 rounded-xl bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500/80 hover:bg-blue-600/90 text-white px-5 py-2 rounded-xl transition-all"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
