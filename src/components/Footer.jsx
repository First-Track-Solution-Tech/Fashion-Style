import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          {/* LOGO */}
                   
                      <Link to="/" className="flex items-center gap-3">
                        <img
                          src="/Logo_design2.png"
                          alt="FashionStyle Logo"
                          className="h-14 md:h-18 lg:h-20 object-contain"
                        />
                        <span className="text-xl md:text-2xl font-bold tracking-wide
                          bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500
                          bg-clip-text text-transparent">
                            Fashion Style
                          </span>
          
                         
                        </Link>
          {/* <h2 className="text-xl font-bold mb-3">Fashion Style</h2> */}
          <p className="text-gray-400 mb-4">
            Your one-stop destination for trendy and affordable fashion.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Youtube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-white">Terms Of Uses</Link></li>
            <li><Link to="/returns-exchanges" className="hover:text-white">Return & Exchanges</Link></li>
            <li><Link to="/refund-cancellation" className="hover:text-white">Refund & Cancellation</Link></li> 
            <li><Link to="/size-guide" className="hover:text-white">Size Guide</Link></li>
             
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> ABC, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> 1234567890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@fashionstyle.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
      Fashion Style, Copyright ©2026, First Track Solution Technologies. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
