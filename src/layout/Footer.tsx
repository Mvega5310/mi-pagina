import logoWhite from '../assets/logo-white.svg'
import bgFooter from '../assets/bg-footer.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import x from '../assets/x.svg'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1F0951] text-white py-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img src={bgFooter} alt="Background" className="h-full object-contain" />
      </div>
      
      <div className="container mx-auto px-20 relative z-10">
        {/* Logo and social media at top */}
        <div className="flex justify-between items-center mb-12">
          <img src={logoWhite} alt="Friendsoft" className="h-10" />
          
          {/* Social media icons */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={x} alt="Twitter" className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={facebook} alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={instagram} alt="Instagram" className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Links section */}
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wider mb-6">LINKS</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>
          
          {/* Contact section */}
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wider mb-6">CONTACT</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+57 (300)-351 9363</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>gerson.almeida@friendsoft.co</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Trans 44 # 100 - 82 Cartagena, Colombia</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">Copyright © {year} all right reserved by <img src={logoWhite} alt="Friendsoft" className="h-4 inline-block ml-1" /></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer