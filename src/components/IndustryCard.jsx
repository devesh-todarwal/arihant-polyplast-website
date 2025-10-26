import { motion } from 'framer-motion'
import { FaCar, FaBolt, FaShoppingBag, FaTractor, FaHospital } from 'react-icons/fa'

const iconMap = {
  FaCar: FaCar,
  FaBolt: FaBolt,
  FaShoppingBag: FaShoppingBag,
  FaTractor: FaTractor,
  FaHospital: FaHospital
}

const IndustryCard = ({ industry, index }) => {
  const Icon = iconMap[industry.icon] || FaCar

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className={`${industry.color} h-32 flex items-center justify-center`}>
        <Icon className="text-white text-6xl" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{industry.name}</h3>
        <p className="text-gray-600 mb-4">{industry.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Applications:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {industry.applications.slice(0, 4).map((app, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                {app}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Materials Supplied:</h4>
          <div className="flex flex-wrap gap-2">
            {industry.materials.map((material, idx) => (
              <span
                key={idx}
                className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {industry.highlights && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {industry.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary-600 mr-2">★</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default IndustryCard

