let cartItems = [];

document.getElementById("add-to-cart").addEventListener("click", function() {
    let item = {
        name: "Product Name",
        price: 99.99,
        quantity: 1
    };
    cartItems.push(item);
    updateCart();
    showCart();
});

document.getElementById("buy-now").addEventListener("click", function() {
    alert("Redirecting to checkout...");
});

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cartItems.forEach(function(item, index) {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} x ${item.quantity} <button class="remove-button" data-index="${index}">Remove</button>`;
        cartList.appendChild(li);
    });
}

function showCart() {
    let sidebar = document.getElementById("cart-sidebar");
    sidebar.classList.remove("hidden");
    sidebar.classList.add("visible");
}

function hideCart() {
    let sidebar = document.getElementById("cart-sidebar");
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
}

document.addEventListener("click", function(event) {
    if (!event.target.closest("#cart-sidebar") && !event.target.closest("#add-to-cart")) {
        hideCart();
    }
    if (event.target.classList.contains("remove-button")) {
        let index = parseInt(event.target.getAttribute("data-index"));
        cartItems.splice(index, 1);
        updateCart();
    }
});
