let cartCount = 0;
let quantity = 1;

function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('active');
}

function changeImage(img) {
    document.querySelector('.main-image').src = img.src.replace('-thumbnail', '');
}

function increaseQuantity() {
    quantity++;
    document.getElementById('item-quantity').value = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('item-quantity').value = quantity;
    }
}

function addToCart() {
    cartCount += quantity;
    document.getElementById('cart-count').innerText = cartCount;

    let cartItems = `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <img src="images/image-product-1-thumbnail.jpg" class="img-fluid" width="50">
            <div class="ms-2">
                <p class="mb-0">Fall Limited Edition Sneakers</p>
                <small>$125.00 x ${quantity} <strong>$${125 * quantity}.00</strong></small>
            </div>
            <button class="btn  btn-sm" onclick="removeFromCart()"> <img src="images/icon-delete.svg"></button>
        </div>
    `;
    document.getElementById('cart-items').innerHTML = cartItems;
}

function removeFromCart() {
    cartCount = 0;
    quantity = 1;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-items').innerHTML = `<p class="text-muted">Your cart is empty.</p>`;
}

function checkout() {
    alert("Order Confirmed!");
    removeFromCart();
}
