import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BarChart2, CheckCircle, Upload } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}

const HeroSection = () => (
  <section
    className="relative h-[600px] md:h-[800px] bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/house-image.png')" }}
    aria-label="Hero section showcasing AI-powered Vastu insights"
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white max-w-4xl px-6 sm:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Revolutionize Your Space with AI-Powered Vastu Insights
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Upload your layout and get instant, personalized Vastu recommendations to create harmony in your living spaces.
        </p>
        <div className="flex justify-center space-x-4">
          <ButtonLink href="/upload" label="Upload Your Layout" />
          <ButtonLink href="/about" label="Learn More" />
        </div>
      </div>
    </div>
  </section>
)

const ButtonLink = ({ href, label }: { href: string; label: string }) => (
  <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20 text-white border-white">
    <Link href={href}>{label}</Link>
  </Button>
)

const FeaturesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
)

const features = [
  { title: "Instant Analysis", description: "Get immediate Vastu insights for your space using our advanced AI algorithms." },
  { title: "Customized Recommendations", description: "Receive tailored suggestions for your unique layout, considering all aspects of your space." },
  { title: "Affordable Pricing", description: "Access powerful Vastu analysis at competitive rates, with plans suitable for every budget." }
]

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
)

const HowItWorksSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </div>
  </section>
)

const steps = [
  { icon: <Upload className="h-12 w-12 text-primary" />, title: "Upload your house layout", description: "Share your floor plan with our AI" },
  { icon: <BarChart2 className="h-12 w-12 text-primary" />, title: "Get instant Vastu analysis", description: "Receive a comprehensive Vastu report" },
  { icon: <CheckCircle className="h-12 w-12 text-primary" />, title: "Implement corrections for harmony", description: "Follow our suggestions to improve your space" }
]

const StepCard = ({ icon, title, description }: StepCardProps) => (
  <div className="flex flex-col items-center text-center max-w-xs">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

