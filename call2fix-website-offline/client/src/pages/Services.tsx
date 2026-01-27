import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Droplets, Wrench, Zap, Home, Building2, Hammer, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "emergency",
      title: "24/7 Emergency Plumbing",
      icon: Droplets,
      description: "Burst pipes, overflowing geysers, and urgent leaks",
      features: [
        "60-minute response target",
        "Fully stocked emergency vans",
        "No after-hours hidden fees",
        "Same-day resolution",
        "Available weekends & holidays"
      ],
      price: "Call for quote"
    },
    {
      id: "leak-detection",
      title: "Leak Detection & Repair",
      icon: Wrench,
      description: "Advanced technology to find and fix hidden leaks",
      features: [
        "Non-invasive acoustic detection",
        "Thermal imaging technology",
        "Precise location identification",
        "Minimal property damage",
        "Preventative maintenance advice"
      ],
      price: "From R450"
    },
    {
      id: "drain-cleaning",
      title: "Blocked Drain Services",
      icon: Zap,
      description: "High-pressure jetting and CCTV inspections",
      features: [
        "CCTV pipe inspections",
        "High-pressure water jetting",
        "Root removal & prevention",
        "Drain relining services",
        "Preventative maintenance plans"
      ],
      price: "From R350"
    },
    {
      id: "geyser",
      title: "Geyser Installation & Repair",
      icon: Home,
      description: "Professional geyser services for homes and businesses",
      features: [
        "New geyser installation",
        "Geyser repair & maintenance",
        "Energy-efficient upgrades",
        "Solar geyser installation",
        "Warranty on all work"
      ],
      price: "From R1,200"
    },
    {
      id: "bathroom",
      title: "Bathroom Renovations",
      icon: Building2,
      description: "Complete bathroom plumbing solutions",
      features: [
        "Full bathroom redesign",
        "Waterproofing & tiling",
        "Modern fixture installation",
        "Project management",
        "Quality guarantees"
      ],
      price: "Custom quote"
    },
    {
      id: "commercial",
      title: "Commercial Plumbing",
      icon: Hammer,
      description: "Large-scale projects for businesses and institutions",
      features: [
        "Maintenance contracts",
        "New building installations",
        "Industrial systems",
        "24/7 support available",
        "Bulk service discounts"
      ],
      price: "Custom quote"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive plumbing and electrical solutions for residential and commercial clients across Cape Town. Professional, reliable, and always on time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-slate-100 flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4 mb-4">
                      <p className="text-lg font-bold text-primary">{service.price}</p>
                    </div>
                    <Button 
                      className="w-full h-12 font-semibold" 
                      onClick={() => window.open('https://wa.me/+27740642297?text=Hi%20Call2Fix!%20I%20am%20interested%20in%20' + service.title, '_blank')}
                    >
                      Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Call2Fix?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-slate-600 text-sm">Fully registered with PIRB and IOPSA for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-lg mb-2">Upfront Pricing</h3>
              <p className="text-slate-600 text-sm">No hidden fees. You know exactly what you pay before we start</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-lg mb-2">Punctuality Guarantee</h3>
              <p className="text-slate-600 text-sm">If we're late, we pay you. Real-time tracking available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-lg mb-2">Warranty Coverage</h3>
              <p className="text-slate-600 text-sm">All work backed by comprehensive warranty on parts and labor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote or to schedule an appointment. Available 24/7 for emergencies.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-16 px-8 text-lg font-bold"
            onClick={() => window.open('https://wa.me/+27740642297', '_blank')}
          >
            Chat on WhatsApp Now
          </Button>
        </div>
      </section>
    </div>
  );
}
