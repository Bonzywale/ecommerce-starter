// Product Gallery
document.addEventListener('DOMContentLoaded', () => {
    // Gallery functionality
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Update main image
            mainImage.src = thumbnail.src;
            
            // Update active state
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

    // Color selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Quantity selector
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQuantity');
    const increaseBtn = document.getElementById('increaseQuantity');

    decreaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // Shopping Cart
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const addToCartBtn = document.getElementById('addToCart');
    const checkoutBtn = document.getElementById('checkout');

    let cart = [];

    // Load cart from localStorage
    const loadCart = () => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    };

    // Save cart to localStorage
    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Update cart UI
    const updateCartUI = () => {
        // Update cart count
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

        // Update cart items
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
                    <div class="text-muted">Color: ${item.color}</div>
                </div>
                <i class="fas fa-trash cart-item-remove" data-id="${item.id}"></i>
            </div>
        `).join('');

        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;

        // Add remove functionality
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                removeFromCart(id);
            });
        });
    };

    // Add to cart
    const addToCart = () => {
        const product = {
            id: Date.now().toString(),
            title: document.querySelector('.product-title').textContent,
            price: 199.99, // This would normally come from your product data
            image: mainImage.src,
            color: document.querySelector('.color-option.active').dataset.color,
            quantity: parseInt(quantityInput.value)
        };

        const existingItem = cart.find(item => 
            item.title === product.title && 
            item.color === product.color
        );

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            cart.push(product);
        }

        saveCart();
        updateCartUI();

        // Show success message
        const toast = new bootstrap.Toast(Object.assign(document.createElement('div'), {
            className: 'toast position-fixed bottom-0 end-0 m-3',
            innerHTML: `
                <div class="toast-header bg-success text-white">
                    <strong class="me-auto">Success</strong>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">
                    Product added to cart!
                </div>
            `
        }));
        document.body.appendChild(toast.element);
        toast.show();
        setTimeout(() => toast.element.remove(), 3000);
    };

    // Remove from cart
    const removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        updateCartUI();
    };

    // Event listeners
    cartBtn.addEventListener('click', () => cartModal.show());
    addToCartBtn.addEventListener('click', addToCart);
    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        saveCart();
        updateCartUI();
        cartModal.hide();
    });

    // Initialize
    loadCart();
}); 