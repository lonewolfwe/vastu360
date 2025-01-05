import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Zap, LayoutDashboard, Compass, LineChart, Lock } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-[#8B5E3C]" />,
      title: "AI-Powered Analysis",
      description: "Leverage cutting-edge AI algorithms for accurate Vastu analysis, blending traditional principles with modern technology."
    },
    {
      icon: <Zap className="h-10 w-10 text-[#8B5E3C]" />,
      title: "Instant Results",
      description: "Get immediate insights for your space, saving time while ensuring precision and reliability."
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-[#8B5E3C]" />,
      title: "Interactive Reports",
      description: "Receive detailed, visually engaging reports with actionable recommendations tailored to your layout."
    },
    {
      icon: <Compass className="h-10 w-10 text-[#8B5E3C]" />,
      title: "Directional Optimization",
      description: "Optimize your space based on cardinal directions and Vastu principles for maximum harmony and positivity."
    },
    {
      icon: <LineChart className="h-10 w-10 text-[#8B5E3C]" />,
      title: "Personalized Suggestions",
      description: "Enjoy tailored recommendations that align with your specific space and personal requirements."
    },
    {
      icon: <Lock className="h-10 w-10 text-[#8B5E3C]" />,
      title: "Secure & Confidential",
      description: "Your data is protected with advanced encryption, ensuring privacy and security for all your information."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#D4AF37]/10 to-[#F5F5F5] py-16 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#8B5E3C]">
                Powerful Features for Perfect Vastu
              </h1>
              <p className="mx-auto max-w-[800px] text-lg text-[#6B4F31] md:text-xl dark:text-[#B0A48C]">
                Explore how VastuAI revolutionizes Vastu Shastra with cutting-edge features designed for your needs.
              </p>
              <div className="space-x-4">
                <Button
                  asChild
                  className="bg-[#D4AF37] hover:bg-[#C9972C] text-white border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/50 active:bg-[#C9972C] transition-all duration-200 rounded-lg py-3 px-8"
                >
                  <Link href="/upload">Try It Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-32 bg-[#F5F5F5]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-[#8B5E3C]">
              Our Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col h-full bg-white shadow-lg rounded-lg p-6">
                  <CardHeader className="flex items-center justify-center mb-4">
                    <div className="bg-[#D4AF37]/10 p-3 rounded-full">{feature.icon}</div>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <CardTitle className="text-xl font-semibold text-[#8B5E3C]">{feature.title}</CardTitle>
                    <CardDescription className="text-[#6B4F31] mt-2">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-[#D4AF37]/5 py-16 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#8B5E3C]">
                Ready to Transform Your Space?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-[#6B4F31] md:text-xl dark:text-[#B0A48C]">
                Start your journey towards a harmonious living or working environment with VastuAI today.
              </p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-[#D4AF37] hover:bg-[#C9972C] text-white border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/50 active:bg-[#C9972C] transition-all duration-200 rounded-lg py-3 px-8"
              >
                <Link href="/upload">Upload Your Layout</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
  