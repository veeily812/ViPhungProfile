"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend.
    console.log('Form data submitted:', formData);
    toast({
        title: "Message Sent (Simulated)",
        description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's connect and discuss opportunities.">
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form and I&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Vivian Phung" value={formData.name} onChange={handleChange} required className="focus:ring-accent" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="vivianphung.entrprnr@gmail.com" value={formData.email} onChange={handleChange} required className="focus:ring-accent" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" name="message" placeholder="Your message here..." rows={5} value={formData.message} onChange={handleChange} required className="focus:ring-accent" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardFooter>
          </form>
        </Card>
        <div className="space-y-6 pt-8 md:pt-0">
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Information</h3>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a href="mailto:vivianphung.entrprnr@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">vivianphung.entrprnr@gmail.com</a>
                </div>
            </div>
             <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">Hanoi, Vietnam (Remote)</p>
                </div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
