import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-background via-muted to-background py-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,hsl(var(--primary))_25%,transparent_25%),linear-gradient(-45deg,hsl(var(--primary))_25%,transparent_25%),linear-gradient(45deg,transparent_75%,hsl(var(--primary))_75%),linear-gradient(-45deg,transparent_75%,hsl(var(--primary))_75%)] bg-[length:20px_20px]"></div>
      
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Welcome to VivianPortfolio
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground max-w-2xl mx-auto">
          Discover my journey, projects, and skills. Let&apos;s build something amazing together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
}
