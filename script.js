// JavaScript to handle the "Add to Cart" functionality
let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseInt(button.getAttribute('data-price'));

        // Add product to cart
        cart.push({ name: productName, price: productPrice });
        totalPrice += productPrice;

        // Update cart display
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the current cart display

    // Display each item in the cart
    cart.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update total price
    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

// Checkout process
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Show the checkout section
    document.getElementById('checkout-section').style.display = 'block';

    // Populate checkout cart items
    const checkoutCartItemsContainer = document.getElementById('checkout-cart-items');
    checkoutCartItemsContainer.innerHTML = ''; // Clear the current display
    cart.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;
        checkoutCartItemsContainer.appendChild(cartItem);
    });

    // Display total price
    document.getElementById('checkout-total-price').textContent = `Total: $${totalPrice}`;
});

// Proceed to payment process
document.getElementById('proceed-to-payment-btn').addEventListener('click', () => {
    // Show the payment section
    document.getElementById('payment-section').style.display = 'block';
});

// Handle payment
document.getElementById('payment-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect payment details (mock)
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Mock payment processing
    alert('Payment successful! Thank you for your purchase.');

    // Clear cart and reset UI
    cart = [];
    totalPrice = 0;
    updateCartDisplay();
    document.getElementById('checkout-section').style.display = 'none';
    document.getElementById('payment-section').style.display = 'none';
});
