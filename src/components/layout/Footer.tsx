import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const brandTexts = [
    'ZENTIK', 'STREETWEAR', 'URBAN', 'PREMIUM', 'STYLE', 'FASHION',
    'ZENTIK', 'STREETWEAR', 'URBAN', 'PREMIUM', 'STYLE', 'FASHION'
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Big ZENTIK Background Text - Bottom positioned */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center pointer-events-none overflow-hidden">
        <span className="font-heading text-[12vw] md:text-[10vw] font-black text-foreground/[0.04] tracking-[0.2em] select-none whitespace-nowrap">
          ZENTIK
        </span>
      </div>

      {/* Infinite Scroll Brand Text */}
      <div className="py-6 overflow-hidden border-b border-border relative z-10">
        <div className="flex animate-scroll-left">
          {brandTexts.map((text, i) => (
            <span 
              key={i}
              className="font-heading text-4xl md:text-6xl font-bold text-muted-foreground/30 whitespace-nowrap mx-8"
            >
              {text}
            </span>
          ))}
          {brandTexts.map((text, i) => (
            <span 
              key={`dup-${i}`}
              className="font-heading text-4xl md:text-6xl font-bold text-muted-foreground/30 whitespace-nowrap mx-8"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-wider mb-4">ZENTIK</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium streetwear for the modern individual. Quality craftsmanship meets urban style.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 border border-border hover:bg-secondary hover:border-foreground/20 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-border hover:bg-secondary hover:border-foreground/20 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-border hover:bg-secondary hover:border-foreground/20 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold tracking-wide mb-4">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/collections/men/all" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/collections/women/all" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/collections/limited" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Limited Edition
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading font-semibold tracking-wide mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold tracking-wide mb-4">CONTACT</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>support@zentik.com</li>
              <li>+91 98765 43210</li>
              <li>Mon - Sat: 10AM - 7PM</li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ZENTIK. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">We Accept:</span>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-secondary text-xs font-medium">VISA</div>
                <div className="px-3 py-1 bg-secondary text-xs font-medium">MC</div>
                <div className="px-3 py-1 bg-secondary text-xs font-medium">AMEX</div>
                <div className="px-3 py-1 bg-secondary text-xs font-medium">UPI</div>
                <div className="px-3 py-1 bg-secondary text-xs font-medium">RuPay</div>
                <div className="px-3 py-1 bg-secondary text-xs font-medium">COD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
