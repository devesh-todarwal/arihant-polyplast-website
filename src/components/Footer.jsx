import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Arihant Polyplast" 
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <h3 className="text-xl font-bold text-white">Arihant Polyplast</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              A trusted partner for high-performance plastic raw materials. 
              Authorized Envalior distributor with 18+ years of industry expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-primary-500 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm hover:text-primary-500 transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/enquiry" className="text-sm hover:text-primary-500 transition-colors">Enquiry</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Nylon PA6/PA66</li>
              <li>ABS & PC</li>
              <li>PMMA</li>
              <li>TPE & POM</li>
              <li>PBT & PP Compounds</li>
              <li>Master Batches</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Shop No. 1-6, Plot No. 146A<br />
                  Gat No. 174/P, Waluj Mahanagar - I<br />
                  CIDCO Waluj<br />
                  Chhatrapati Sambhajinagar - 431136
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919673001201" className="hover:text-primary-500">9673001201</a>,{' '}
                  <a href="tel:+919673001202" className="hover:text-primary-500">9673001202</a>,{' '}
                  <a href="tel:+919689394838" className="hover:text-primary-500">9689394838</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@arihantpolyplast.com" className="text-sm hover:text-primary-500">
                  info@arihantpolyplast.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Arihant Polyplast. All Rights Reserved. | GST: 27ABDFA1915G1ZT
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

