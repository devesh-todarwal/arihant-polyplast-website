import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaAward, FaUsers, FaTruck, FaHandshake, FaChartLine, FaShieldAlt } from 'react-icons/fa'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import IndustryCard from '../components/IndustryCard'
import { products } from '../data/products'
import { industries } from '../data/industries'
import { partners } from '../data/partners'

const Home = () => {
  const featuredProducts = products.slice(0, 6)
  const featuredIndustries = industries.slice(0, 3)

  const whyChooseUs = [
    {
      icon: FaAward,
      title: "Authorized Envalior Distributor",
      description: "Official distributor for premium performance and specialty materials"
    },
    {
      icon: FaUsers,
      title: "Expert Leadership",
      description: "18+ years of corporate experience at GM level in materials management"
    },
    {
      icon: FaTruck,
      title: "Wide Product Portfolio",
      description: "Comprehensive range of plastic raw materials from leading global brands"
    },
    {
      icon: FaHandshake,
      title: "Reliable Supply Chain",
      description: "Serving 75+ customers with 125+ tons monthly distribution"
    },
    {
      icon: FaChartLine,
      title: "Industry-Specific Solutions",
      description: "Tailored materials for automotive, electrical, medical, and more"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description: "L&K approved grades and certified materials meeting international standards"
    }
  ]

  return (
    <div className="pt-20">
      <Hero />

      {/* Company Introduction */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Welcome to <span className="text-primary-600">Arihant Polyplast</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              India's trusted distributor of premium plastic raw materials. Founded in 2015 by 
              industry veterans with 18+ years of corporate experience at Varroc Group, we specialize 
              in delivering high-performance polymers and engineering plastics to diverse industries 
              across Maharashtra and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">2015</div>
                <div className="text-gray-600">Year Established</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">75+</div>
                <div className="text-gray-600">Active Customers</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">125+</div>
                <div className="text-gray-600">Tons/Month</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose Arihant Polyplast?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for high-performance plastic raw materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <item.icon className="text-3xl text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium plastic raw materials from world-leading manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredIndustries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/industries" className="btn-primary">
              Explore All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Partners & Suppliers */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Partners & Suppliers
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Proud to represent world-class brands
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.filter(p => p.featured).map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
              >
                <div className="h-20 flex items-center justify-center mb-3">
                  <div className="text-4xl font-bold text-gray-800">{partner.name}</div>
                </div>
                <p className="text-sm text-gray-600 text-center">{partner.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg">
              Authorized <span className="font-bold">Envalior Distributor</span> for Performance & Specialty Materials
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your plastic raw material requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enquiry" className="btn-primary">
                Send Enquiry
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

