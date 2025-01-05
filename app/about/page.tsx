import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Vastu360</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Blending the wisdom of ancient Vastu principles with the power of AI, VastuAI transforms your living spaces into harmonious, balanced environments.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/about-image.jpg"
                  alt="Vastu360 Team"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
                <p className="text-lg mb-4">
                  At Vastu360, we believe in combining tradition with innovation. Our team of Vastu experts and AI specialists is dedicated to helping you achieve balance and positivity in your spaces.
                </p>
                <p className="text-lg">
                  With a user-friendly platform and cutting-edge technology, we make Vastu principles accessible, affordable, and actionable for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl max-w-3xl mx-auto">
              To empower individuals and families worldwide to create harmonious living spaces by bridging the gap between ancient wisdom and modern technology.
            </p>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">AI-Driven Insights</h3>
                <p>
                  Leveraging advanced machine learning algorithms, our platform analyzes your floor plans and generates precise Vastu recommendations in seconds.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Personalized Solutions</h3>
                <p>
                  We understand that every space is unique. Our tailored solutions ensure that your home or office aligns perfectly with Vastu principles while meeting your personal needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Seamless User Experience</h3>
                <p>
                  From uploading your layout to receiving detailed reports, our platform is designed for simplicity, ensuring a smooth and intuitive user journey.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Real-Time Analysis</h3>
                <p>
                  Get instant feedback and actionable insights to make immediate improvements to your space, backed by data-driven precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Transform Your Space Today</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Ready to experience the perfect balance of tradition and technology? Let VastuAI guide you toward a more harmonious and positive living space.
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100">
              Get Started Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
