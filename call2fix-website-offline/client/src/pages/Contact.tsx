import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Send to WhatsApp
    const message = `Hello Call2Fix! I'm ${formData.name}. ${formData.message}. You can reach me at ${formData.phone}${formData.email ? ` or ${formData.email}` : ''}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+27740642297?text=${encodedMessage}`, '_blank');
    
    toast.success("Message sent! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Have a question or need a quote? Get in touch with our team. We're here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-2">Sales & Support</p>
                <a href="tel:+27740642297" className="text-primary font-bold hover:underline">+27 74 064 2297</a>
                <p className="text-sm text-slate-600 mt-4 mb-2">Emergency Line</p>
                <a href="tel:+27676095679" className="text-primary font-bold hover:underline">+27 67 609 5679</a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">Chat with us instantly</p>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="h-10 font-semibold"
                  onClick={() => window.open('https://wa.me/+27740642297', '_blank')}
                >
                  Open WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-2">General Inquiries</p>
                <a href="mailto:tapssmajojo554@gmail.com" className="text-primary font-bold hover:underline text-sm break-all">
                  tapssmajojo554@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-2">24/7 Emergency Service</p>
                <p className="text-sm font-semibold text-primary">Always Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service">Service Needed</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="emergency">24/7 Emergency</option>
                  <option value="leak">Leak Detection</option>
                  <option value="drain">Drain Cleaning</option>
                  <option value="geyser">Geyser Service</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="commercial">Commercial Plumbing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your plumbing or electrical issue"
                  className="mt-2 min-h-32"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Location & Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">123 Main Road</p>
                <p className="text-slate-600 mb-2">Claremont, Cape Town</p>
                <p className="text-slate-600 mb-4">7708, South Africa</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://maps.google.com/?q=Claremont+Cape+Town', '_blank')}
                >
                  View on Map
                </Button>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Service Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  We proudly serve all of Greater Cape Town and surrounding areas, including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>✓ City Bowl & CBD</li>
                  <li>✓ Atlantic Seaboard</li>
                  <li>✓ Southern Suburbs</li>
                  <li>✓ Northern Suburbs</li>
                  <li>✓ West Coast</li>
                  <li>✓ Helderberg</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  For urgent plumbing or electrical issues, don't wait. Contact us immediately:
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full h-12 font-semibold" 
                    onClick={() => window.open('https://wa.me/+27676095679?text=EMERGENCY%20PLUMBING%20NEEDED%20URGENTLY!', '_blank')}
                  >
                    WhatsApp Emergency
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 font-semibold"
                    onClick={() => window.location.href = 'tel:+27676095679'}
                  >
                    Call Emergency Line
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What areas do you service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We service all of Greater Cape Town and surrounding areas. Check our Service Areas page for specific suburbs and postal codes, or contact us to discuss your location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you charge for quotes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  No! We provide free quotes for all non-emergency work. For emergency calls, we charge a call-out fee which is deducted from the final invoice if you proceed with the work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's your response time for emergencies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We aim for a 60-minute response time for emergency calls. Response time varies depending on your location and current demand, but we prioritize urgent situations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are you licensed and insured?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! All our technicians are fully licensed (PIRB registered) and we carry comprehensive public liability insurance. Your property is protected with every job.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer warranties on your work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely. All our work is backed by a comprehensive warranty on both parts and labor. We stand behind every job we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
