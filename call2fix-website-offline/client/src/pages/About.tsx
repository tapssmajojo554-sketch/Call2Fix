import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Heart, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Call2Fix</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Seven years of excellence in plumbing and electrical services. We've built our reputation on reliability, quality, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Call2Fix started with a simple mission: to provide honest, professional plumbing and electrical services to Cape Town residents and businesses. We believed there had to be a better way—one where customers weren't overcharged, where technicians showed up on time, and where quality work was guaranteed.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Seven years later, we've served thousands of satisfied customers across Greater Cape Town. We've grown from a small team to a fully licensed, insured operation with multiple service vans and a reputation for excellence.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, Call2Fix is known for transparent pricing, rapid emergency response, and technicians who genuinely care about doing the job right. We're not just fixing pipes—we're building trust.
            </p>
          </div>
          <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center">
            <img src="/images/modern-bathroom.jpg" alt="Our Work" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Heart className="w-6 h-6" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We're honest about what needs to be done and what doesn't. No upselling, no hidden fees, just straightforward advice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We don't just fix problems—we fix them right. Quality workmanship and attention to detail in every job.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle>Respect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We respect your home, your time, and your budget. Professional conduct and courteous service always.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  When we say we'll be there, we're there. 24/7 availability and rapid response for emergencies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">7+</div>
              <p className="text-slate-600 font-semibold">Years in Business</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5000+</div>
              <p className="text-slate-600 font-semibold">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-slate-600 font-semibold">Emergency Response</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-slate-600 font-semibold">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Licensed & Certified Technicians</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Every member of the Call2Fix team is fully licensed, insured, and regularly trained on the latest plumbing and electrical technologies. We maintain the highest standards of professionalism and workmanship.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> PIRB Registered Plumbers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> IOPSA Certified Electricians
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> Continuous Professional Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span> Comprehensive Insurance Coverage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Memberships</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border-2 border-primary/20 rounded-lg">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">PIRB Registered</h3>
              <p className="text-slate-600 text-sm">Plumbing Industry Regulatory Board</p>
            </div>
            <div className="p-8 border-2 border-primary/20 rounded-lg">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">IOPSA Certified</h3>
              <p className="text-slate-600 text-sm">Institute of Plumbing South Africa</p>
            </div>
            <div className="p-8 border-2 border-primary/20 rounded-lg">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Fully Insured</h3>
              <p className="text-slate-600 text-sm">Comprehensive Public Liability Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Call2Fix Difference?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of satisfied Cape Town customers who trust us with their plumbing and electrical needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-14 px-8 text-lg"
            onClick={() => window.open('https://wa.me/+27740642297', '_blank')}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
