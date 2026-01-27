import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";

export default function ServiceAreas() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const areas = [
    {
      region: "City Bowl & CBD",
      suburbs: ["City Centre", "Waterfront", "Gardens", "Tamboerskloof", "Oranjezicht"],
      responseTime: "30-45 mins",
      postalCodes: ["8001", "8002", "8003"]
    },
    {
      region: "Atlantic Seaboard",
      suburbs: ["Camps Bay", "Clifton", "Copacabana", "Llandudno", "Hout Bay"],
      responseTime: "40-60 mins",
      postalCodes: ["8005", "8012"]
    },
    {
      region: "Southern Suburbs",
      suburbs: ["Claremont", "Newlands", "Rondebosch", "Constantia", "Wynberg", "Kenilworth"],
      responseTime: "35-50 mins",
      postalCodes: ["7700", "7708", "7701", "7806"]
    },
    {
      region: "Northern Suburbs",
      suburbs: ["Bellville", "Durbanville", "Parow", "Brackenfell", "Kraaifontein"],
      responseTime: "45-60 mins",
      postalCodes: ["7530", "7550", "7100", "7560"]
    },
    {
      region: "West Coast",
      suburbs: ["Strand", "Gordon's Bay", "Macassar", "Strand", "Fisantekraal"],
      responseTime: "60-90 mins",
      postalCodes: ["7140", "7150", "7160"]
    },
    {
      region: "Helderberg",
      suburbs: ["Somerset West", "Stellenbosch", "Strand", "Gordons Bay"],
      responseTime: "50-75 mins",
      postalCodes: ["7130", "7600", "7140"]
    },
    {
      region: "Southern Peninsula",
      suburbs: ["Simon's Town", "Kalk Bay", "Muizenberg", "Strand"],
      responseTime: "60-90 mins",
      postalCodes: ["7975", "7945", "7950"]
    },
    {
      region: "East Coast",
      suburbs: ["Strand", "Gordon's Bay", "Bloubergstrand", "Milnerton"],
      responseTime: "40-60 mins",
      postalCodes: ["7441", "7441", "7405"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Service Areas</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We proudly serve Greater Cape Town and surrounding areas. Check if we cover your location and get estimated response times.
          </p>
        </div>
      </section>

      {/* Service Area Checker */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Check Your Area</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Enter Your Postal Code</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="e.g. 8001" 
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="px-6">Check</Button>
                </div>
              </div>
              <p className="text-sm text-slate-500">Or select a region below to see coverage details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Coverage Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, idx) => (
              <Card 
                key={idx} 
                className="cursor-pointer hover:shadow-lg transition-all hover:border-primary"
                onClick={() => setSelectedArea(selectedArea === area.region ? null : area.region)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {area.region}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold">{area.responseTime}</span>
                    </div>
                    {selectedArea === area.region && (
                      <div className="pt-3 border-t space-y-2">
                        <p className="text-xs font-semibold text-slate-600">Suburbs:</p>
                        <ul className="text-xs space-y-1">
                          {area.suburbs.map((suburb, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              {suburb}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs font-semibold text-slate-600 pt-2">Postal Codes: {area.postalCodes.join(", ")}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Call2Fix for Your Area?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Local Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We know Cape Town's neighborhoods intimately. We understand local water systems, common issues, and the best solutions for each area.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Fast Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  With teams stationed across the metro, we guarantee rapid response times. Emergency calls get priority dispatch to the nearest technician.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Full Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  From the city center to outlying areas, we're committed to serving all of Greater Cape Town with the same professional standard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Area?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Even if you're outside our standard service zones, we may still be able to help. Contact us to discuss special arrangements.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-14 px-8 text-lg"
            onClick={() => window.open('https://wa.me/+27740642297?text=Hi%20Call2Fix!%20I%20want%20to%20check%20if%20you%20service%20my%20area', '_blank')}
          >
            Ask About Your Area
          </Button>
        </div>
      </section>
    </div>
  );
}
