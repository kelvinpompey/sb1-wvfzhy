import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Safyah Solutions</span>
              <div className="relative w-[150px] h-[40px]">
                <Image
                  src="https://safyah.com/safyah-logo-new.svg"
                  alt="Safyah Solutions"
                  layout="fill"
                  objectFit="contain"
                  priority
                  className="filter-purple"
                />
              </div>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Services
              </Link>
              <Link href="#technologies" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Technologies
              </Link>
              <Link href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Projects
              </Link>
              <Link href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button variant="outline" className="hidden sm:inline-block">
              Log in
            </Button>
            <Button className="hidden sm:inline-block">Get Started</Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}