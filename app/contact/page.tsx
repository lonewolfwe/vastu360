 'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F5F1]">
      <Header />
      <main className="flex-grow container mx-auto px-8 py-16">
        <h1 className="text-4xl font-serif font-bold mb-12 text-center text-[#4F4A46]">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg bg-[#F9F5F1]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#4F4A46]">Send Us a Message</CardTitle>
              <CardDescription className="text-[#D4A24A]">
                We’d love to hear from you! Fill out the form below, and we’ll get back to you promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Label htmlFor="name" className="text-[#4F4A46]">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="border-[#8B5E3C] text-[#4F4A46]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#4F4A46]">Your Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="border-[#8B5E3C] text-[#4F4A46]"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[#4F4A46]">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    required
                    rows={6}
                    className="border-[#8B5E3C] text-[#4F4A46]"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#D4A24A] hover:bg-[#8B5E3C] text-white transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Support Details and FAQs */}
          <div>
            <Card className="shadow-lg bg-[#F9F5F1]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#4F4A46]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#4F4A46]">Email</h3>
                  <p className="text-[#4F4A46]">kaustubhd239@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4F4A46]">Phone</h3>
                  <p className="text-[#4F4A46]">+91 8446023005</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4F4A46]">Address</h3>
                  <p className="text-[#4F4A46]">
                     Mahasrul, Nashik, Maharashtra, India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-12 shadow-lg bg-[#F9F5F1]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#4F4A46]">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-[#4F4A46]">How accurate is the AI-powered Vastu analysis?</AccordionTrigger>
                    <AccordionContent className="text-[#4F4A46]">
                      Our AI-powered Vastu analysis is highly accurate, blending traditional Vastu principles with modern data analysis techniques. For complex cases, expert consultations are recommended.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[#4F4A46]">Can I use VastuAI for commercial properties?</AccordionTrigger>
                    <AccordionContent className="text-[#4F4A46]">
                      Yes, Vastu360 supports both residential and commercial properties. Our premium plan offers tailored features for commercial spaces.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[#4F4A46]">How long does it take to receive a Vastu report?</AccordionTrigger>
                    <AccordionContent className="text-[#4F4A46]">
                      Instant reports are generated for basic analyses. Premium reports, reviewed by experts, are delivered within 24-48 hours.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
