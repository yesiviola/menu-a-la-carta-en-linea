const cart = {
    items: [],
    total: 0,
  };
  function addToCart(itemName, itemPrice) {
    cart.items.push({ name: itemName, price: itemPrice });
    cart.total += itemPrice;
    updateCartUI();
  }
  function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
  
    cartItemsList.innerHTML = '';
  
    cart.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsList.appendChild(li);
    });
  
    cartTotal.textContent = cart.total.toFixed(2);
  }

  updateCartUI();
  