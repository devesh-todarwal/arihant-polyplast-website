import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      details: [
        'Shop No. 1, 2, 3, 4, 5, 6',
        'Plot No. 146A, Gat No. 174/P',
        'Waluj Mahanagar - I, CIDCO Waluj',
        'Chhatrapati Sambhajinagar - 431136',
        'Maharashtra, India'
      ]
    },
    {
      icon: FaPhone,
      title: 'Phone Numbers',
      details: [
        '+91 9673001201',
        '+91 9673001202',
        '+91 9689394838'
      ],
      links: [
        'tel:+919673001201',
        'tel:+919673001202',
        'tel:+919689394838'
      ]
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: [
        'info@arihantpolyplast.com',
        'sales@arihantpolyplast.com'
      ],
      links: [
        'mailto:info@arihantpolyplast.com',
        'mailto:sales@arihantpolyplast.com'
      ]
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday',
        '9:00 AM - 6:00 PM',
        '',
        'Sunday: Closed'
      ]
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Get in touch with our team for all your plastic raw material needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
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
                    <info.icon className="text-2xl text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{info.title}</h3>
                <div className="space-y-1 text-gray-600">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>
                      {info.links && info.links[idx] ? (
                        <a
                          href={info.links[idx]}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg text-center"
          >
            <FaWhatsapp className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Quick Connect on WhatsApp</h3>
            <p className="mb-6 text-green-50">
              Get instant responses to your queries via WhatsApp
            </p>
            <a
              href="https://wa.me/919673001201"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all inline-block"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm title="Send Us a Message" />
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.9074849516447!2d75.31621!3d19.8560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUxJzIxLjYiTiA3NcKwMTgnNTguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arihant Polyplast Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-600">GST Details</h3>
                <p className="text-gray-700">
                  <strong>GST Number:</strong> 27ABDFA1915G1ZT
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-600">Service Areas</h3>
                <p className="text-gray-700">
                  Pune, Aurangabad, Nashik, Ahmednagar, Jalgaon, Mumbai, Navi Mumbai, 
                  Vasai, Daman, Baroda & more
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-600">Authorized Distributor</h3>
                <p className="text-gray-700">
                  Official distributor for Envalior India - Performance & Specialty Materials
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-600">Minimum Order</h3>
                <p className="text-gray-700">
                  Please contact us for minimum order quantities and pricing information
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directions */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              How to Reach Us
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-600">By Road:</h3>
                <p>
                  Our office is located in CIDCO Waluj, one of Maharashtra's prominent industrial areas. 
                  Easily accessible from Aurangabad city center (approximately 20 km).
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-600">By Air:</h3>
                <p>
                  Nearest Airport: Aurangabad Airport (Chhatrapati Sambhajinagar Airport) - 
                  approximately 25 km from our location.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary-600">By Train:</h3>
                <p>
                  Nearest Railway Station: Aurangabad Railway Station - approximately 22 km. 
                  Well connected to major cities across India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

