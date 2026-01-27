import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumbers = [
    { number: "+27740642297", label: "Sales & Support" },
    { number: "+27676095679", label: "Emergency Service" },
  ];

  const handleWhatsAppClick = (number: string) => {
    const message = "Hi Call2Fix! I need plumbing or electrical assistance.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Expanded Menu */}
        {isOpen && (
          <div className="animate-in slide-in-from-bottom-2 fade-in duration-200 flex flex-col gap-2">
            {whatsappNumbers.map((item) => (
              <div
                key={item.number}
                className="flex items-center gap-3 bg-white rounded-lg shadow-lg p-3 cursor-pointer hover:shadow-xl transition-all"
                onClick={() => handleWhatsAppClick(item.number)}
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="text-xs text-slate-600">{item.number}</p>
                </div>
                <MessageCircle className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl hover:bg-green-600 transition-all flex items-center justify-center animate-pulse hover:animate-none"
          aria-label="Open WhatsApp menu"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </>
  );
}
