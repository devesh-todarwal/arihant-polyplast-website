import { motion } from 'framer-motion'
import { FaBox, FaClipboardList, FaCheckCircle } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

const Enquiry = () => {
  const enquirySteps = [
    {
      icon: FaClipboardList,
      title: 'Submit Your Requirements',
      description: 'Fill out the enquiry form with your material specifications and quantity needs'
    },
    {
      icon: FaBox,
      title: 'Receive Quote',
      description: 'Our team will review your requirements and send you a detailed quotation'
    },
    {
      icon: FaCheckCircle,
      title: 'Confirm & Deliver',
      description: 'Once confirmed, we ensure timely delivery of your materials'
    }
  ]

  const benefits = [
    'Competitive pricing on all materials',
    'Technical support and material selection guidance',
    'Flexible payment terms for regular customers',
    'Timely delivery across Maharashtra and neighboring states',
    'Quality assurance with genuine materials from authorized sources',
    'Transparent communication throughout the process'
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Product Enquiry</h1>
            <p className="text-xl text-gray-100">
              Get a quote for your plastic raw material requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">Simple and transparent process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {enquirySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center relative"
              >
                {index < enquirySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-primary-300">
                    →
                  </div>
                )}
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-3xl text-primary-600" />
                </div>
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm title="Submit Your Enquiry" isEnquiry={true} />
            </div>

            {/* Benefits Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-lg shadow-lg sticky top-24"
              >
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-100 mb-4">
                    Need immediate assistance?
                  </p>
                  <a
                    href="tel:+919673001201"
                    className="block text-center bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all mb-3"
                  >
                    Call: +91 9673001201
                  </a>
                  <a
                    href="https://wa.me/919673001201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Quick Reference */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Product Range</h2>
            <p className="text-xl text-gray-600">Select materials for your enquiry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Nylon PA6/PA66', brands: 'Envalior (Durethan®, Akulon®)' },
              { name: 'ABS', brands: 'LG, Samsung' },
              { name: 'Polycarbonate (PC)', brands: 'LG, Samsung' },
              { name: 'PMMA (Acrylic)', brands: 'LG, Mitsubishi' },
              { name: 'TPE', brands: 'Zylog' },
              { name: 'POM (Polyacetals)', brands: 'BASF, Kocetal, Jupital' },
              { name: 'PBT', brands: 'Envalior (Pocan®, Arnite®)' },
              { name: 'PP Compounds', brands: 'Autotech, Premium Plastalloys' },
              { name: 'Master Batches', brands: 'Mehul Colours, JJ Plastalloys' }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brands}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              Important Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-600">Response Time:</h3>
                <p>
                  We typically respond to all enquiries within 24 hours during business days. 
                  For urgent requirements, please call us directly.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-600">Technical Data Sheets:</h3>
                <p>
                  We provide complete technical data sheets (TDS) and material safety data sheets (MSDS) 
                  for all our products upon request.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-600">Sample Availability:</h3>
                <p>
                  Sample materials are available for testing and evaluation. Please mention your 
                  sample requirements in the enquiry form.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-600">Delivery Areas:</h3>
                <p>
                  We deliver across Maharashtra (Pune, Nashik, Mumbai, Aurangabad, Ahmednagar, etc.) 
                  and neighboring states. Special arrangements can be made for other locations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Enquiry

