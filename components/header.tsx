import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Vastu360 Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">Vastu360</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-black transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Navigation"
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
