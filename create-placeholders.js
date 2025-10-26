// Script to create professional placeholder images for products
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const placeholdersDir = path.join(__dirname, 'public', 'placeholders');

// Ensure directory exists
if (!fs.existsSync(placeholdersDir)) {
  fs.mkdirSync(placeholdersDir, { recursive: true });
}

const products = [
  { name: 'nylon', color: '#F5F5F5', title: 'Nylon PA6/PA66', subtitle: 'Engineering Plastic Granules' },
  { name: 'abs', color: '#2C2C2C', title: 'ABS Plastic', subtitle: 'Impact-Resistant Granules', textColor: '#FFFFFF' },
  { name: 'pc', color: '#E8F4F8', title: 'Polycarbonate', subtitle: 'Clear PC Granules' },
  { name: 'pmma', color: '#F0F8FF', title: 'PMMA Acrylic', subtitle: 'Transparent Granules' },
  { name: 'tpe', color: '#FFE4E1', title: 'TPE', subtitle: 'Thermoplastic Elastomer' },
  { name: 'pom', color: '#FFFAF0', title: 'POM Polyacetal', subtitle: 'Engineering Plastic' },
  { name: 'pbt', color: '#FFF8DC', title: 'PBT', subtitle: 'Polyester Granules' },
  { name: 'pp', color: '#F0E68C', title: 'PP Compounds', subtitle: 'Polypropylene Granules' },
  { name: 'masterbatch', color: '#FFB6C1', title: 'Master Batches', subtitle: 'Color Concentrates' }
];

// Create SVG placeholders
products.forEach(product => {
  const textColor = product.textColor || '#333333';
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad-${product.name}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${product.color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustBrightness(product.color, -20)};stop-opacity:1" />
    </radialGradient>
    <filter id="shadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="2" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge> 
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/> 
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="600" fill="url(#grad-${product.name})"/>
  
  <!-- Granule circles pattern -->
  <g opacity="0.4">
    ${generateGranulePattern()}
  </g>
  
  <!-- Text -->
  <g filter="url(#shadow)">
    <text x="400" y="280" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="${textColor}" text-anchor="middle">
      ${product.title}
    </text>
    <text x="400" y="330" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" opacity="0.8">
      ${product.subtitle}
    </text>
  </g>
  
  <!-- Watermark -->
  <text x="400" y="570" font-family="Arial, sans-serif" font-size="14" fill="${textColor}" text-anchor="middle" opacity="0.5">
    Arihant Polyplast • Premium Quality Materials
  </text>
</svg>`;

  fs.writeFileSync(
    path.join(placeholdersDir, `${product.name}.svg`),
    svg
  );
  console.log(`✓ Created ${product.name}.svg`);
});

function adjustBrightness(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}

function generateGranulePattern() {
  let circles = '';
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 800;
    const y = Math.random() * 600;
    const r = Math.random() * 15 + 5;
    circles += `<circle cx="${x}" cy="${y}" r="${r}" fill="white" opacity="0.3"/>`;
  }
  return circles;
}

console.log('\n✅ All placeholder images created successfully!');
console.log('📁 Location: public/placeholders/\n');
console.log('💡 These are professional placeholders. Replace with real photos when available.');
console.log('📖 See ADD_PRODUCT_IMAGES.md for instructions on adding real images.\n');

