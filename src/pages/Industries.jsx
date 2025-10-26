import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import IndustryCard from '../components/IndustryCard'
import { industries } from '../data/industries'

const Industries = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-100">
              Delivering specialized polymer solutions across diverse sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Automotive Highlight - L&K Partnership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Lauritz Knudsen Approved Supplier
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                We are proud to be an approved supplier of Envalior materials to Lauritz Knudsen 
                and their extensive network of 12+ moulders. Our L&K approved grades meet the 
                stringent quality and performance requirements of the electrical and industrial sectors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">L&K</div>
                  <div className="text-sm">Approved Supplier</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">12+</div>
                  <div className="text-sm">Moulder Network</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">Envalior</div>
                  <div className="text-sm">Approved Grades</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored materials for your specific application requirements
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Automotive Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Automotive Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Under-the-Hood Applications</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• PA6/PA66 for air intake manifolds</li>
                    <li>• PA46 for high-temperature applications</li>
                    <li>• PBT for sensors and connectors</li>
                    <li>• PPS for extreme heat resistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Interior & Exterior</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ABS for dashboard components</li>
                    <li>• PC for lighting and glazing</li>
                    <li>• PP compounds for bumpers</li>
                    <li>• TPE for soft-touch surfaces</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Electrical & Electronics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Electrical & Electronics Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Connectors & Housings</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• PBT for electrical connectors</li>
                    <li>• PA66 for high-current applications</li>
                    <li>• PC for transparent housings</li>
                    <li>• ABS for consumer electronics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Circuit Protection</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Flame-retardant grades</li>
                    <li>• UL-listed materials</li>
                    <li>• High-CTI performance</li>
                    <li>• RoHS compliant materials</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Consumer Goods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Consumer Goods Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Appliances & Housewares</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• PP for kitchen appliances</li>
                    <li>• ABS for durable housings</li>
                    <li>• PMMA for decorative elements</li>
                    <li>• TPE for ergonomic grips</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Storage & Packaging</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Food-grade materials</li>
                    <li>• Impact-resistant containers</li>
                    <li>• UV-stabilized products</li>
                    <li>• Custom color masterbatches</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Material Selection Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Need Help Selecting Materials?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technical team can help you choose the right material for your specific application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="font-bold mb-2 text-gray-900">Heat Resistance</h3>
              <p className="text-sm text-gray-600">Materials for high-temperature applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-bold mb-2 text-gray-900">Mechanical Strength</h3>
              <p className="text-sm text-gray-600">High-impact and rigid materials</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2 text-gray-900">Electrical Properties</h3>
              <p className="text-sm text-gray-600">Insulating and conductive grades</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="font-bold mb-2 text-gray-900">Aesthetics</h3>
              <p className="text-sm text-gray-600">Clear, colored, and custom finishes</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's Discuss Your Requirements
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your industry-specific material needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enquiry" className="bg-white text-primary-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all inline-block">
                Submit an Enquiry
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all inline-block">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries

