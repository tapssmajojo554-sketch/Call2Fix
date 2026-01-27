import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Clock, MapPin, Phone, CheckCircle2, Zap } from "lucide-react";

export default function Emergency() {
  const emergencyIssues = [
    {
      title: "Burst Pipes",
      description: "Water spraying or flooding from broken pipes",
      action: "Immediate isolation and repair"
    },
    {
      title: "Overflowing Geyser",
      description: "Geyser leaking or overflowing water",
      action: "Emergency shutdown and repair"
    },
    {
      title: "Blocked Toilet",
      description: "Toilet not flushing or backing up",
      action: "Immediate clearing and inspection"
    },
    {
      title: "Gas Leak",
      description: "Smell of gas or suspected gas leak",
      action: "Immediate isolation and professional repair"
    },
    {
      title: "Major Water Leak",
      description: "Significant water loss from unknown source",
      action: "Leak detection and emergency repair"
    },
    {
      title: "Electrical Hazard",
      description: "Sparks, burning smell, or electrical issues",
      action: "Immediate isolation and professional assessment"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Urgent */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <AlertCircle className="w-12 h-12 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold">24/7 Emergency Service</h1>
          </div>
          <p className="text-xl text-red-100 max-w-2xl mb-8">
            Plumbing or electrical emergency? We're here 24 hours a day, 7 days a week. Call or WhatsApp immediately for rapid response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="h-16 px-8 text-lg font-bold"
              onClick={() => window.open('https://wa.me/+27676095679?text=EMERGENCY%20PLUMBING%20NEEDED%20URGENTLY!', '_blank')}
            >
              <Zap className="mr-2 w-5 h-5" /> WhatsApp Emergency
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-16 px-8 text-lg font-bold border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => window.location.href = 'tel:+27676095679'}
            >
              <Phone className="mr-2 w-5 h-5" /> Call: +27 67 609 5679
            </Button>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 bg-white border-b-2 border-red-200">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">60 Minutes</h3>
              <p className="text-slate-600">Average response time for emergencies</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Greater Cape Town</h3>
              <p className="text-slate-600">We service all areas of the metro</p>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">No Hidden Fees</h3>
              <p className="text-slate-600">After-hours rates clearly quoted upfront</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Common Emergency Issues</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyIssues.map((issue, idx) => (
              <Card key={idx} className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    {issue.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-3">{issue.description}</p>
                  <p className="text-sm font-semibold text-primary">✓ {issue.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What To Do During an Emergency</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Stay Safe</h3>
                <p className="text-slate-600">Turn off water at the main valve if there's flooding. Turn off electricity if there's an electrical hazard.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Us Immediately</h3>
                <p className="text-slate-600">WhatsApp or call us right away. Provide your location and a brief description of the problem.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contain the Damage</h3>
                <p className="text-slate-600">Place towels or buckets to contain water. Move valuables away from the affected area.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">We'll Be There</h3>
                <p className="text-slate-600">Our team will arrive quickly with fully stocked vans to resolve the issue on the spot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Emergency Right Now?</h2>
          <p className="text-lg text-red-100 mb-8">Don't wait. Contact us immediately.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="h-16 px-8 text-lg font-bold"
              onClick={() => window.open('https://wa.me/+27676095679?text=EMERGENCY%20PLUMBING%20NEEDED%20URGENTLY!', '_blank')}
            >
              <Zap className="mr-2 w-5 h-5" /> WhatsApp Emergency
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-16 px-8 text-lg font-bold border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => window.location.href = 'tel:+27676095679'}
            >
              <Phone className="mr-2 w-5 h-5" /> +27 67 609 5679
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
