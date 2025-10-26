import { motion } from 'framer-motion'
import { FaBox, FaIndustry } from 'react-icons/fa'

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <FaBox className="text-primary-600 text-6xl" />
      </div>
      <div className="p-6">
        <div className="text-sm text-primary-600 font-semibold mb-2">{product.category}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{product.name}</h3>
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {product.brands.map((brand, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
        {product.subProducts && (
          <div className="mb-3">
            <p className="text-sm text-gray-600">
              {product.subProducts.join(' | ')}
            </p>
          </div>
        )}
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        {product.applications && (
          <div className="border-t pt-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaIndustry className="mr-2" />
              <span className="font-semibold">Applications:</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {product.applications.slice(0, 3).map((app, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProductCard

