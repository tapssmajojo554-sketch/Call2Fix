import { MessageCircle, X, Send, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "👋 Hi! Welcome to Call2Fix. How can we help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });
  const [showForm, setShowForm] = useState(true);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response and redirect to WhatsApp
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "Thanks for your message! Connecting you to our team on WhatsApp...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        const fullMessage = `Hi Call2Fix! ${userInfo.name ? `I'm ${userInfo.name}. ` : ""}${inputValue}`;
        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappNumber = "+27740642297";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
      }, 1000);
    }, 500);
  };

  const handleStartChat = () => {
    if (!userInfo.name || !userInfo.phone) {
      alert("Please enter your name and phone number");
      return;
    }
    setShowForm(false);
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: "bot",
      text: `Great! Thanks ${userInfo.name}. What can we help you with today?`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, welcomeMessage]);
  };

  const handleEmergency = () => {
    const emergencyMessage = "EMERGENCY PLUMBING NEEDED URGENTLY!";
    const encodedMessage = encodeURIComponent(emergencyMessage);
    window.open(`https://wa.me/+27676095679?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-24 right-6 z-30 w-96 max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px] animate-in slide-in-from-bottom-4 fade-in duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">Call2Fix Support</h3>
            <p className="text-sm text-blue-100">Usually replies instantly</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-primary text-white rounded-br-none"
                    : "bg-white text-slate-800 border border-slate-200 rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.type === "user" ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form or Chat Input */}
        {showForm ? (
          <div className="p-4 border-t bg-white space-y-3">
            <input
              type="text"
              placeholder="Your name"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Your phone number"
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex gap-2">
              <Button
                onClick={handleStartChat}
                className="flex-1 h-10 text-sm font-semibold"
              >
                Start Chat
              </Button>
              <Button
                onClick={handleEmergency}
                variant="destructive"
                className="flex-1 h-10 text-sm font-semibold"
              >
                Emergency
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-4 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="h-10 w-10 p-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
          {/* Emergency Button */}
          <button
            onClick={handleEmergency}
            className="w-14 h-14 rounded-full bg-red-500 text-white shadow-lg hover:shadow-xl hover:bg-red-600 transition-all flex items-center justify-center animate-bounce"
            title="Emergency Plumbing"
          >
            <Phone className="w-7 h-7" />
          </button>

          {/* Chat Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl hover:bg-green-600 transition-all flex items-center justify-center animate-pulse hover:animate-none"
            title="Live Chat"
          >
            <MessageCircle className="w-7 h-7" />
          </button>
        </div>
      )}
    </>
  );
}
