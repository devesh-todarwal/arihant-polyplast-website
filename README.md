# Arihant Polyplast Website

A modern, responsive website for Arihant Polyplast - a leading distributor of plastic raw materials in India.

## About Arihant Polyplast

Arihant Polyplast, founded in 2015, is an authorized distributor of premium plastic raw materials including Envalior (formerly DSM) performance and specialty materials. With 18+ years of corporate experience, we serve 75+ customers across Maharashtra and neighboring regions with 125+ tons of monthly distribution.

## Features

- **Modern Design**: Built with React and Tailwind CSS for a clean, professional look
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized with Vite for lightning-fast load times
- **Smooth Animations**: Professional animations using Framer Motion
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **WhatsApp Integration**: Quick connect button for instant communication

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd arihant-polyplast-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
arihant-polyplast-website/
├── public/                 # Static assets
│   └── logo.png           # Company logo
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── IndustryCard.jsx
│   │   └── ContactForm.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Industries.jsx
│   │   ├── Contact.jsx
│   │   └── Enquiry.jsx
│   ├── data/             # Data files
│   │   ├── products.js
│   │   ├── industries.js
│   │   └── partners.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## Customization

### Adding Your Logo

Replace `/public/logo.png` with your company logo. Recommended size: 200x50px (PNG with transparent background).

### Updating Content

- **Products**: Edit `src/data/products.js`
- **Industries**: Edit `src/data/industries.js`
- **Partners**: Edit `src/data/partners.js`
- **Contact Info**: Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Color Scheme

The primary color is configured in `tailwind.config.js`. The default is red (#E63028) matching the Arihant logo. To change:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        600: '#YOUR_COLOR',
        // ... other shades
      }
    }
  }
}
```

### Adding Product Images

1. Place images in the `public/placeholders/` directory
2. Update the `image` property in `src/data/products.js` or `src/data/industries.js`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### Other Hosting

Build the project and upload the contents of the `dist` folder to your web server.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions about this website or Arihant Polyplast:

- **Phone**: +91 9673001201, +91 9673001202, +91 9689394838
- **Email**: info@arihantpolyplast.com
- **Address**: Shop No. 1-6, Plot No. 146A, Gat No. 174/P, Waluj Mahanagar - I, CIDCO Waluj, Chhatrapati Sambhajinagar - 431136

## License

© 2024 Arihant Polyplast. All Rights Reserved.

