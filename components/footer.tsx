import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import * as React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
          {/* About Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">VastuAI</h3>
            <p className="text-gray-400">
              Revolutionizing spaces with AI-powered Vastu insights. Transform your living and working environments effortlessly.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-4">Follow us on social media for updates and insights:</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-white transition" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-gray-300 hover:text-white transition" />
              </Link>
              <Link href="https://www.instagram.com/vastu_360_/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white transition" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-white transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vastu360. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed with ❤️ by the Vastu360 team.
          </p>
        </div>
      </div>
    </footer>
  );
}

