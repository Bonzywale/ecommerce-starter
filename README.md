# E-commerce Product Page Starter

A modern, responsive e-commerce product page starter template built with HTML, CSS, and vanilla JavaScript. This template provides a foundation for building product pages with essential e-commerce features.

## Features

- 🖼️ Interactive product gallery with thumbnails
- 🛒 Shopping cart functionality with localStorage persistence
- 🎨 Color selection options
- 📱 Fully responsive design
- 🔢 Quantity selector
- 💫 Smooth animations and transitions
- 🛍️ Add to cart with success notification
- 💰 Cart total calculation
- ✨ Bootstrap 5 for styling
- 🗑️ Remove items from cart

## Demo

View the live demo: [E-commerce Product Page Demo](https://bonzy-programming-site.web.app/ecommerce-starter)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/bonzy-programming/ecommerce-starter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-starter
   ```

3. Open the `public/index.html` file in your browser or use a local development server.

## Project Structure

```
ecommerce-starter/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── index.html
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5
- Font Awesome Icons
- LocalStorage API

## Features in Detail

### Product Gallery
- Main product image with thumbnail navigation
- Smooth image transitions
- Active state for selected thumbnail

### Shopping Cart
- Add products with selected quantity and color
- Remove items from cart
- Persistent cart data using localStorage
- Real-time cart count update
- Total price calculation
- Checkout functionality

### User Interface
- Responsive design for all screen sizes
- Color selection with visual feedback
- Quantity adjustment controls
- Success notifications for cart actions
- Bootstrap modal for cart display
- Clean and modern design

## Customization

### Colors
Edit the CSS variables in `public/css/style.css` to change the color scheme:

```css
:root {
    --primary-color: #ff7d1a;
    --primary-light: #ffede0;
    /* Add your custom colors here */
}
```

### Product Data
Update the product information in the HTML and JavaScript files:
1. Modify product details in `public/index.html`
2. Update the price in `public/js/script.js`
3. Add your own product images to the `public/images` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap team for their excellent framework
- Font Awesome for the icons
- All contributors who help improve this starter template 