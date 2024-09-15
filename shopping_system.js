
let balance = 300000; // Initial balance of ₱300,000
let cart = [];
let totalCost = 0;
let purchaseHistory = [];

// Arrays for accessories and parts with images
const accessories = [
    { name: "Gaming Keyboard", price: 500, image: "https://www.pngwing.com/en/free-png-nakhz" },
    { name: "Gaming Mouse", price: 300, image: "https://www.pngwing.com/en/free-png-zjsdh" },
    { name: "RGB Mousepad", price: 250, image: "https://www.pngwing.com/en/free-png-yetnd" },
    { name: "Headset Stand", price: 350, image: "https://www.pngwing.com/en/free-png-docqi" },
    { name: "Webcam", price: 450, image: "https://www.pngwing.com/en/free-png-cgnll" },
    { name: "Wireless Headset", price: 700, image: "https://www.pngwing.com/en/free-png-kgjwe" },
    { name: "Streaming Microphone", price: 800, image: "https://www.pngwing.com/en/free-png-mvzqi" },
    { name: "LED Lights", price: 100, image: "https://www.pngwing.com/en/free-png-bzdes" },
    { name: "Controller", price: 400, image: "https://www.pngwing.com/en/free-png-bcwlu" },
    { name: "Cooling Pad", price: 150, image: "https://www.pngwing.com/en/free-png-howfp" }
];

const parts = [
    { name: "Graphics Card", price: 15000, image: "https://www.pngwing.com/en/free-png-hbqwi" },
    { name: "Processor", price: 20000, image: "https://www.pngwing.com/en/free-png-zqcnu" },
    { name: "Motherboard", price: 10000, image: "https://www.pngwing.com/en/free-png-nmnkq" },
    { name: "RAM (16GB)", price: 4000, image: "https://www.pngwing.com/en/free-png-money" },
    { name: "SSD (512GB)", price: 3500, image: "https://www.pngwing.com/en/free-png-iixwv" },
    { name: "Power Supply", price: 3000, image: "https://www.pngwing.com/en/free-png-mwnbe" },
    { name: "CPU Cooler", price: 2500, image: "https://www.pngwing.com/en/free-png-hqyjq" },
    { name: "Case", price: 5000, image: "https://www.pngwing.com/en/free-png-blmgw" },
    { name: "Monitor", price: 12000, image: "https://www.pngwing.com/en/free-png-dignj" },
    { name: "Gaming Chair", price: 8000, image: "https://www.pngwing.com/en/free-png-aizpn" }
];

// Function to display items
function showCategory(category) {
    const itemsContainer = document.getElementById('items');
    itemsContainer.style.display = 'flex'; // Show items container
    itemsContainer.innerHTML = ''; // Clear previous items

    let itemsList = [];
    if (category === 'accessories') {
        itemsList = accessories;
    } else if (category === 'parts') {
        itemsList = parts;
    }

    itemsList.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ₱${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalCost += itemPrice;
    alert(`${itemName} added to cart!`);
}

// Function to display cart
function viewCart() {
    const cartSection = document.getElementById('cart-section');
    const shopSection = document.getElementById('shop-section');
    const cartItems = document.getElementById('cart-items');
    const totalCostDisplay = document.getElementById('total-cost');
    
    cartSection.style.display = 'block';
    shopSection.style.display = 'none';
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₱${item.price}`;
        cartItems.appendChild(li);
    });

    totalCostDisplay.textContent = `₱${totalCost}`;
}

// Function to checkout items
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    if (totalCost > balance) {
        alert("You don't have enough balance to complete this purchase.");
        return;
    }

    balance -= totalCost;
    purchaseHistory.push(...cart);
    cart = [];
    totalCost = 0;

    alert("Purchase successful!");
    document.getElementById('balance').textContent = `₱${balance}`;
    viewPurchaseHistory();
}

// Function to display purchase history
function viewPurchaseHistory() {
    const historySection = document.getElementById('history-section');
    const shopSection = document.getElementById('shop-section');
    const purchaseHistoryList = document.getElementById('purchase-history');

    historySection.style.display = 'block';
    shopSection.style.display = 'none';
    purchaseHistoryList.innerHTML = '';

    purchaseHistory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₱${item.price}`;
        purchaseHistoryList.appendChild(li);
    });
}

// Function to go back to shop from cart or history
function goBackToShop() {
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('shop-section').style.display = 'block';
}

// Function to login (dummy function for demonstration)
function login() {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('shop-section').style.display = 'block';
}

// Function to sign up (dummy function for demonstration)
function signup() {
    alert("Account created! You can now login.");
    showLogin();
}

// Show login and signup forms
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Function to logout
function logout() {
    document.getElementById('shop-section').style.display = 'none';
    document.getElementById('auth-section').style.display = 'block';
}
