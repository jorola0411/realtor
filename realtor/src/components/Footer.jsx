import { ArrowRight } from 'lucide-react';
import logowhite from '../assets/logowhite.png';

export default function Footer() {
  return (
    <footer className="bg-[#732F26] text-white px-8 py-12 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Section */}
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-300">
            Interested in learning more?
          </p>
          <div className="flex items-center gap-3 mt-2">
            <h2 className="text-4xl md:text-5xl font-semibold">Connect With Us</h2>
            <ArrowRight size={32} />
          </div>
        </div>

        <hr className="border-t border-gray-500" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="max-w-md space-y-4">
            {/* Replace FORMA text with logo */}
            <img src={logowhite} alt="Forma Logo" className="w-60 ml-[-14px]" />
            <p className="text-sm text-gray-300">
              At Forma, we believe great spaces begin with intention. Every project is thoughtfully crafted to balance modern aesthetics with environmental responsibility, creating homes that are as efficient as they are beautiful. Built to elevate life. We focus on fostering connected, vibrant communities — places where people feel grounded, inspired, and truly at home.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center border-b border-gray-400 pb-1">
                <span className="text-sm">INFO@FORMAGROUP.COM</span>
                <ArrowRight size={16} />
              </li>
              <li className="flex justify-between items-center border-b border-gray-400 pb-1">
                <span className="text-sm">+1 800 535 4302</span>
                <ArrowRight size={16} />
              </li>
              <li className="flex justify-between items-center border-b border-gray-400 pb-1">
                <span className="text-sm">LINKEDIN</span>
                <ArrowRight size={16} />
              </li>
            </ul>
          </div>

          {/* Stay in Touch */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Stay in touch</h3>
            <div className="flex items-center border-b border-gray-400 pb-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm placeholder-gray-300 outline-none flex-grow"
              />
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
