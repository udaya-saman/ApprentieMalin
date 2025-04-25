import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'About', href: '#about' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Parents',
      links: [
        { name: 'Safety', href: '#about' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'WhatsApp Access', href: '#get-started' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Support', href: '#' },
        { name: 'WhatsApp', href: '#' },
        { name: 'Email', href: 'mailto:contact@apprentimalin.com' },
      ],
    },
  ];

  return (
    <footer className="relative bg-blue-900/80 text-white pt-20 pb-10 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Logo and description - increased bottom margin */}
          <div className="lg:col-span-1 mb-6 md:mb-0">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-bold gradient-text">ApprentiMalin</span>
            </Link>
            <p className="max-w-xs text-sm text-white/70 leading-relaxed">
              AI-powered academic support platform for primary and middle school students. 
              Smart, fun, and personalized learning.
            </p>
          </div>

          {/* Links - Adjusted spacing and title style */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/90">
                {column.title}
              </h3>
              <ul className="space-y-3"> {/* Increased space between links */}
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-white/60 hover:text-white hover:underline transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section - Adjusted padding and spacing */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              &copy; {currentYear} ApprentiMalin. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="#" 
                className="text-sm text-white/60 hover:text-white hover:underline transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                className="text-sm text-white/60 hover:text-white hover:underline transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 