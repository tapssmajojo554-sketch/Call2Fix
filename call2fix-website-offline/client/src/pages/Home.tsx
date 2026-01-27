import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, Clock, Droplets, MapPin, Phone, Shield, Star, Wrench } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [postalCode, setPostalCode] = useState("");
  const [serviceStatus, setServiceStatus] = useState<null | "available" | "unavailable">(null);

  const checkServiceArea = () => {
    // Simple mock logic for demo purposes
    if (postalCode.startsWith("7") || postalCode.startsWith("8")) {
      setServiceStatus("available");
    } else {
      setServiceStatus("unavailable");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-plumber.jpg" 
            alt="Professional Plumber" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Available 24/7 for Emergencies
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Plumbing & Electrical <br />
              <span className="text-gradient">Done Right.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Call2Fix: Your trusted partner for professional plumbing and electrical services in Cape Town. 24/7 emergency response, licensed technicians, and transparent pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-16 px-8 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all rounded-full" onClick={() => window.open('https://wa.me/+27740642297', '_blank')}>
                Get Instant Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-8 text-lg font-bold border-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white" onClick={() => window.open('https://wa.me/+27740642297', '_blank')}>
                <Phone className="mr-2 w-5 h-5" /> WhatsApp Now
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> 4.9/5 Rating
              </div>
            </div>
          </div>

          {/* Service Area Checker Card */}
          <div className="hidden md:block animate-in slide-in-from-right duration-700 delay-200">
            <Card className="glass border-0 max-w-md ml-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Check Availability</CardTitle>
                <CardDescription>Enter your postal code to see if we service your area and get estimated response times.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="e.g. 8001" 
                    className="bg-white/80 border-primary/20 focus:border-primary h-12 text-lg"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                  <Button onClick={checkServiceArea} className="h-12 px-6">Check</Button>
                </div>
                
                {serviceStatus === "available" && (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-start gap-3 animate-in fade-in zoom-in">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold">We cover your area!</p>
                      <p className="text-sm mt-1">Estimated emergency response: <span className="font-bold">45 mins</span></p>
                    </div>
                  </div>
                )}
                
                {serviceStatus === "unavailable" && (
                  <div className="p-4 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 flex items-start gap-3 animate-in fade-in zoom-in">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold">Outside standard zone</p>
                      <p className="text-sm mt-1">Please call us directly to discuss special arrangements.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSQwLDk2TDQ4LDExMi41Qzk2LDEyOCwxOTIsMTYwLDI4OCwxNjBDMzg0LDE2MCw0ODAsMTI4LDU3NiwxMTJDNjcyLDk2LDc2OCw5Niw4NjQsMTEyQzk2MCwxMjgsMTA1NiwxNjAsMTE1MiwxNjBDMTI0OCwxNjAsMTM0NCwxMjgsMTM5MiwxMTJMMTQ0MCw5NkwxNDQwLDMyMEwxMzkyLDMyMEMxMzQ0LDMyMCwxMjQ4LDMyMCwxMTUyLDMyMEMxMDU2LDMyMCw5NjAsMzIwLDg2NCwzMjBDNzY4LDMyMCw2NzIsMzIwLDU3NiwzMjBDNDgwLDMyMCwzODQsMzIwLDI4OCwzMjBDMTkyLDMyMCw5NiwzMjAsNDgsMzIwTDAsMzIwWiI+PC9wYXRoPjwvc3ZnPg==')] bg-cover bg-bottom"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Plumbing Solutions</h2>
            <p className="text-lg text-slate-600">From emergency leaks to luxury bathroom renovations, our certified team handles it all with precision and care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/leak-detection.jpg" alt="Leak Detection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Droplets className="w-6 h-6" />
                </div>
                <CardTitle>Leak Detection & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Advanced acoustic and thermal technology to pinpoint leaks without damaging your property.</p>
                <ul className="space-y-2 text-sm text-slate-500 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Non-invasive methods</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Precise location</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Same-day repair</li>
                </ul>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">Learn More</Button>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/service-pipes.jpg" alt="Drain Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 text-secondary-foreground group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Wrench className="w-6 h-6" />
                </div>
                <CardTitle>Blocked Drains</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">High-pressure jetting and camera inspections to clear stubborn blockages permanently.</p>
                <ul className="space-y-2 text-sm text-slate-500 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> CCTV inspections</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Root removal</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Preventative maintenance</li>
                </ul>
                <Button variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary-foreground">Learn More</Button>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/bathroom-reno.jpg" alt="Emergency Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle>24/7 Emergency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Rapid response for burst pipes, overflowing geysers, and other plumbing crises.</p>
                <ul className="space-y-2 text-sm text-slate-500 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 60-min response target</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Fully stocked vans</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> No after-hours hidden fees</li>
                </ul>
                <Button variant="outline" className="w-full group-hover:border-accent group-hover:text-accent">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <img src="/images/modern-bathroom.jpg" alt="Our Work" className="relative rounded-2xl shadow-2xl z-10" />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px] animate-in slide-in-from-bottom duration-1000 delay-300">
                <div className="text-4xl font-bold text-primary mb-1">7+</div>
                <div className="text-sm text-slate-600 font-medium">Years of Excellence in Cape Town</div>
              </div>
            </div>
            
            <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Cape Town Trusts Call2Fix</h2>
            <p className="text-lg text-slate-600">We believe in transparency, quality, and respect for your home. Our licensed team combines expertise with integrity to deliver exceptional results every time.</p>
              
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Licensed & Insured</h3>
                    <p className="text-slate-600">Fully registered with PIRB and IOPSA. Your property is protected with our comprehensive insurance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Punctuality Guarantee</h3>
                    <p className="text-slate-600">We value your time. If we're late, we pay you. Real-time tracking of your plumber's arrival.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Upfront Pricing</h3>
                    <p className="text-slate-600">No surprises. We provide detailed quotes before starting any work. You know exactly what you pay.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience Better Plumbing?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">Whether it's a small leak or a major renovation, our team is ready to help. Get a free quote today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-16 px-8 text-lg font-bold text-primary" onClick={() => window.open('https://wa.me/+27740642297', '_blank')}>
              Chat on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-8 text-lg font-bold border-white text-white hover:bg-white hover:text-primary" onClick={() => window.open('https://wa.me/+27676095679', '_blank')}>
              Emergency: WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
