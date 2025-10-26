import { motion } from 'framer-motion'
import { FaHistory, FaBullseye, FaEye, FaMapMarkedAlt, FaUserTie } from 'react-icons/fa'

const About = () => {
  const serviceAreas = [
    'Pune',
    'Aurangabad (Chhatrapati Sambhajinagar)',
    'Ahmednagar',
    'Jalgaon',
    'Nashik',
    'Daman',
    'Baroda (Vadodara)',
    'Navi Mumbai',
    'Vasai',
    'Mumbai Metropolitan Region'
  ]

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Arihant Polyplast established by industry veterans with 18+ years of experience'
    },
    {
      year: '2016',
      title: 'Envalior Partnership',
      description: 'Became authorized distributor for Envalior India (formerly DSM Engineering Materials)'
    },
    {
      year: '2018',
      title: 'Expanded Portfolio',
      description: 'Added premium brands like LG, Samsung, BASF, and Mitsubishi to our product range'
    },
    {
      year: '2020',
      title: 'L&K Approved Supplier',
      description: 'Achieved approved supplier status for Lauritz Knudsen and their moulder network'
    },
    {
      year: '2023',
      title: 'Milestone Achievement',
      description: 'Serving 75+ customers with 125+ tons monthly distribution across Maharashtra'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Arihant Polyplast</h1>
            <p className="text-xl text-gray-100">
              Your trusted partner in plastic raw materials distribution since 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaHistory className="text-4xl text-primary-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Arihant Polyplast was founded on October 1st, 2015, in Aurangabad (now Chhatrapati Sambhajinagar) 
                  by Mr. Santosh Todarwal and Mr. Shrikrishna Lidbide, bringing together over 18 years of corporate 
                  experience at the General Manager level in materials management.
                </p>
                <p>
                  After serving the prestigious Varroc Group for 18+ years, our founders identified a gap in the 
                  market for reliable, quality-focused distribution of engineering plastics and performance materials. 
                  With deep industry knowledge and strong relationships with global manufacturers, Arihant Polyplast 
                  was established to bridge this gap.
                </p>
                <p>
                  Today, we proudly serve as an authorized distributor for Envalior India (formerly DSM Engineering 
                  Materials), representing their complete portfolio of performance and specialty materials including 
                  Durethan®, Akulon®, Pocan®, Arnite®, Stanyl®, and more.
                </p>
                <p>
                  Our commitment to quality and service has enabled us to build a strong customer base of 75+ 
                  companies across diverse industries, with monthly distributions exceeding 125 tons.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">2015</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">18+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">75+</div>
                  <div className="text-sm text-gray-600">Customers</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">125+</div>
                  <div className="text-sm text-gray-600">Tons/Month</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaBullseye className="text-4xl text-primary-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver premium quality plastic raw materials with exceptional service, 
                supporting our customers' manufacturing excellence through reliable supply chains, 
                technical expertise, and long-term partnerships. We are committed to being the 
                preferred distributor for engineering plastics in Western India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaEye className="text-4xl text-primary-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the most trusted and innovative distributor of engineering 
                plastics and performance materials in India, known for our technical knowledge, 
                customer-centric approach, and contribution to advancing manufacturing excellence 
                across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <FaUserTie className="text-4xl text-primary-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Leadership</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals with deep industry knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-5xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Mr. Santosh Todarwal</h3>
              <p className="text-primary-600 font-semibold mb-3">Co-Founder & Director</p>
              <p className="text-gray-600">
                18+ years of experience in corporate materials management at GM level with Varroc Group. 
                Expert in procurement, vendor management, and supply chain optimization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-5xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Mr. Shrikrishna Lidbide</h3>
              <p className="text-primary-600 font-semibold mb-3">Co-Founder & Director</p>
              <p className="text-gray-600">
                18+ years of corporate experience in materials management at GM level with Varroc Group. 
                Specialist in strategic sourcing, quality assurance, and customer relationship management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center mr-6">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-full bg-primary-200 mt-2"></div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkedAlt className="text-4xl text-primary-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Service Areas</h2>
            </div>
            <p className="text-xl text-gray-600">
              We serve customers across Maharashtra and neighboring regions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-primary-50 border-2 border-primary-200 p-4 rounded-lg text-center hover:bg-primary-100 transition-colors"
              >
                <p className="text-gray-800 font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Certifications & Approvals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">GST Registered</h3>
                <p className="text-gray-100">GST: 27ABDFA1915G1ZT</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Authorized Distributor</h3>
                <p className="text-gray-100">Envalior India</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Approved Supplier</h3>
                <p className="text-gray-100">Lauritz Knudsen & Network</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

