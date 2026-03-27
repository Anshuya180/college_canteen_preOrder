// ────────────────────────────────────────────────
//  DATA
// ────────────────────────────────────────────────
const menuItems = [
  { 
    id:1,  name:"Masala Dosa",           
    cat:"south",     price:65,  veg:true,  rating:4.6, 
    desc:"Crispy dosa with potato masala", 
    img:"https://delishglobe.com/wp-content/uploads/2024/09/Masala-dosa-1.png"  // nicely plated with chutney/sambar
  },
  { 
    id:2,  name:"Idli Sambhar",          
    cat:"south",     price:50,  veg:true,  rating:4.4, 
    desc:"Soft idlis with hot sambhar", 
    img:"https://images.squarespace-cdn.com/content/v1/5e558c8165fc4c78f502938d/1614365325445-7480O0Y2L91QASF9KBKQ/Idli+Kalpana+Sunder.jpg"  // classic soft idlis with sides
  },
  { 
    id:3,  name:"Paneer Butter Masala",  
    cat:"north",     price:140, veg:true,  rating:4.7, 
    desc:"Creamy tomato gravy with paneer", 
    img:"https://indianambrosia.com/wp-content/uploads/2019/09/paneer-butter-masala-2706.jpg"  // rich & creamy with rice
  },
  { 
    id:4,  name:"Butter Chicken",        
    cat:"north",     price:170, veg:false, rating:4.8, 
    desc:"Tender chicken in rich gravy", 
    img:"https://themom100.com/wp-content/uploads/2021/01/butter-chicken-murgh-makhani-396-scaled.jpg"  // authentic murgh makhani style
  },
  { 
    id:5,  name:"Veg Hakka Noodles",     
    cat:"chinese",   price:90,  veg:true,  rating:4.3, 
    desc:"Indo-Chinese style noodles", 
    img:"https://vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions-1024x832.jpg.webp"  // colorful veg stir-fry
  },
  { 
    id:6,  name:"Chicken Manchurian",    
    cat:"chinese",   price:130, veg:false, rating:4.5, 
    desc:"Crispy chicken in spicy sauce", 
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2015/07/chicken-manchurian-1.jpg"  // classic gobi-like but chicken version
  },
  { 
    id:7,  name:"Aloo Paratha",          
    cat:"breakfast", price:60,  veg:true,  rating:4.4, 
    desc:"Stuffed paratha with curd", 
    img:"https://www.seriouseats.com/thmb/tRWGfWOQV3O7P1YveeDtNRS1JBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__01__20210106-aloo-parathas-nik-sharma-13-52b77ba4cbad4c4f844f2f88910b2b53.jpg"  // golden & stuffed
  },
  { 
    id:8,  name:"Poha",                  
    cat:"breakfast", price:45,  veg:true,  rating:4.2, 
    desc:"Flattened rice with peanuts", 
    img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80"  // keeping a good poha-style one (bright & fluffy)
  },
  { 
    id:9,  name:"Cold Coffee",           
    cat:"beverages", price:70,  veg:true,  rating:4.5, 
    desc:"Creamy & chilled", 
    img:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=80"  // creamy cold coffee
  },
  { 
    id:10, name:"Lassi (Sweet)",         
    cat:"beverages", price:55,  veg:true,  rating:4.6, 
    desc:"Traditional Punjabi lassi", 
    img:"https://images.unsplash.com/photo-1627308594171-8d9d628e6c75?auto=format&fit=crop&w=800&q=80"  // thick & frothy
  },
  { 
    id:11, name:"Samosa",                
    cat:"snacks",    price:40,  veg:true,  rating:4.3, 
    desc:"Crispy & spicy", 
    img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"  // golden fried samosas
  },
  { 
    id:12, name:"Veg Spring Roll",       
    cat:"snacks",    price:85,  veg:true,  rating:4.4, 
    desc:"8 pcs with schezwan dip", 
    img:"https://thehiddenveggies.com/wp-content/uploads/2021/09/vegetable-hakka-noodles-3.jpg"  // wait — actually better spring roll vibe, but using veg noodles style as fallback; replace if needed
  },
  { 
    id:13, name:"Thali (Veg)",           
    cat:"combos",    price:140, veg:true,  rating:4.5, 
    desc:"Full meal with 3 sabzi", 
    img:"https://delishglobe.com/wp-content/uploads/2024/09/Masala-dosa-1.png"  // using a thali-style placeholder; can swap
  },
  { 
    id:14, name:"Chicken Biryani",       
    cat:"combos",    price:180, veg:false, rating:4.7, 
    desc:"Hyderabadi style", 
    img:"https://themom100.com/wp-content/uploads/2021/01/butter-chicken-murgh-makhani-396-scaled.jpg"  // rich non-veg rice dish vibe
  },
  { 
    id:15, name:"Chole Bhature",         
    cat:"north",     price:110, veg:true,  rating:4.6, 
    desc:"Spicy chole with bhature", 
    img:"https://indianambrosia.com/wp-content/uploads/2019/09/paneer-butter-masala-2706.jpg"  // curry + bread combo feel
  }
];

// ────────────────────────────────────────────────
//  STATE & DOM
// ────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem("canteenCart")) || [];
let user  = JSON.parse(localStorage.getItem("canteenUser")) || null;

const pages = {
  home:   document.getElementById("home"),
  menu:   document.getElementById("menu"),
  orders: document.getElementById("orders"),
  success:document.getElementById("success-screen")
};

const navLinks   = document.querySelectorAll("#main-nav a");
const cartCountEl       = document.getElementById("cart-count");
const cartTotalItemsEl  = document.getElementById("cartTotalItems");
const cartTotalPriceEl  = document.getElementById("cartTotalPrice");
const floatingCart      = document.getElementById("floating-cart");
const cartSidebar       = document.getElementById("cart-sidebar");
const loginModal        = document.getElementById("login-modal");
const userDisplay       = document.getElementById("userDisplay");
const loginBtn          = document.getElementById("loginBtn");

// ────────────────────────────────────────────────
//  UTILS
// ────────────────────────────────────────────────
function saveCart() {
  localStorage.setItem("canteenCart", JSON.stringify(cart));
}

function saveUser() {
  localStorage.setItem("canteenUser", JSON.stringify(user));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  cartCountEl.textContent = totalItems;
  cartCountEl.classList.toggle("show", totalItems > 0);

  cartTotalItemsEl.textContent = totalItems;
  cartTotalPriceEl.textContent = totalPrice;

  floatingCart.classList.toggle("show", totalItems > 0);

  if (user) {
    loginBtn.style.display = "none";
    userDisplay.style.display = "inline";
    userDisplay.textContent = user.name;
  } else {
    loginBtn.style.display = "inline-block";
    userDisplay.style.display = "none";
  }
}

function renderMenu(category = "all", search = "") {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = "";

  const filtered = menuItems.filter(item => {
    const matchCat = category === "all" || item.cat === category;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  filtered.forEach(item => {
    const inCart = cart.find(c => c.id === item.id);
    const qty = inCart ? inCart.qty : 0;

    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="food-img">
      <div class="food-content">
        <div class="food-title">${item.name}</div>
        <div class="food-desc">${item.desc}</div>
        <div class="food-meta">
          <div class="price">₹${item.price}</div>
          <div style="display:flex; align-items:center; gap:12px;">
            ${item.veg ? '<div class="veg-dot"></div>' : '<div class="nonveg-dot"></div>'}
            <span class="rating">★ ${item.rating}</span>
          </div>
        </div>

        <div class="add-area">
          ${qty === 0
            ? `<button class="btn-add" data-id="${item.id}">+ Add</button>`
            : `<div class="qty-stepper">
                <button class="qty-btn" data-id="${item.id}" data-action="dec">-</button>
                <span class="qty-display">${qty}</span>
                <button class="qty-btn" data-id="${item.id}" data-action="inc">+</button>
              </div>`
          }
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderCart() {
  const list = document.getElementById("cartItemsList");
  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = `<p style="text-align:center; color:#777; padding:40px 0;">Your cart is empty</p>`;
    return;
  }

  cart.forEach(item => {
    const menuItem = menuItems.find(m => m.id === item.id);
    if (!menuItem) return;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${menuItem.img}" alt="" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title">${menuItem.name}</div>
        <div class="cart-item-price">₹${menuItem.price} × ${item.qty}</div>
        <div class="cart-item-actions">
          <div class="qty-stepper" style="width:110px;">
            <button class="qty-btn" data-id="${item.id}" data-action="dec">-</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" data-id="${item.id}" data-action="inc">+</button>
          </div>
          <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
    list.appendChild(div);
  });

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const grand = subtotal + tax + 10;

  document.getElementById("subtotal").textContent = subtotal;
  document.getElementById("tax").textContent = tax;
  document.getElementById("grandTotal").textContent = grand;
}

function renderOrders() {
  const container = document.getElementById("ordersList");
  container.innerHTML = "";

  const orders = JSON.parse(localStorage.getItem("canteenOrders")) || [];

  if (orders.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:#777; padding:60px 0;">No orders yet</p>`;
    return;
  }

  orders.forEach(order => {
    const card = document.createElement("div");
    card.className = "order-card";
    card.innerHTML = `
      <div class="order-header">
        <div class="order-id">#${order.id}</div>
        <div class="order-status status-${order.status.toLowerCase()}">${order.status}</div>
      </div>
      <div style="margin:8px 0; color:#555;">${new Date(order.date).toLocaleString()}</div>
      <div style="margin:10px 0;">${order.items.map(i => `${i.name} × ${i.qty}`).join(", ")}</div>
      <div style="font-weight:600; color:var(--clr-primary);">₹${order.total}</div>
    `;
    container.appendChild(card);
  });
}

// ────────────────────────────────────────────────
//  EVENT LISTENERS
// ────────────────────────────────────────────────
function showPage(pageId) {
  Object.values(pages).forEach(p => p.style.display = "none");
  pages[pageId].style.display = "block";

  navLinks.forEach(a => a.classList.remove("active"));
  const link = document.querySelector(`a[href="#${pageId}"]`);
  if (link) link.classList.add("active");

  if (pageId === "menu") renderMenu();
  if (pageId === "orders") renderOrders();
}

document.addEventListener("click", e => {
  // Navigation
  if (e.target.matches("#main-nav a")) {
    e.preventDefault();
    const page = e.target.getAttribute("href").substring(1);
    if (page === "cart" || e.target.id === "cart-link") {
      cartSidebar.classList.add("open");
    } else {
      showPage(page);
    }
  }

  // Browse menu
  if (e.target.id === "browseMenuBtn") {
    showPage("menu");
  }

  // Category tabs
  if (e.target.matches(".tab-btn")) {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    const cat = e.target.dataset.cat;
    renderMenu(cat, document.getElementById("searchInput").value);
  }

  // Search input (live)
  if (e.target.id === "searchInput") {
    const val = e.target.value;
    const activeCat = document.querySelector(".tab-btn.active")?.dataset.cat || "all";
    renderMenu(activeCat, val);
  }

  // Add / Quantity / Remove
  if (e.target.matches(".btn-add")) {
    const id = Number(e.target.dataset.id);
    const item = menuItems.find(i => i.id === id);
    cart.push({ id, qty: 1, price: item.price, name: item.name });
    saveCart();
    updateCartUI();
    renderMenu();
    floatingCart.style.animation = "shake 0.5s";
    setTimeout(() => floatingCart.style.animation = "", 500);
  }

  if (e.target.matches(".qty-btn")) {
    const id = Number(e.target.dataset.id);
    const action = e.target.dataset.action;
    const idx = cart.findIndex(c => c.id === id);

    if (idx !== -1) {
      if (action === "inc") cart[idx].qty++;
      if (action === "dec") {
        cart[idx].qty--;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
      }
      saveCart();
      updateCartUI();
      renderCart();
      renderMenu();
    }
  }

  if (e.target.matches(".remove-btn")) {
    const id = Number(e.target.dataset.id);
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartUI();
    renderCart();
    renderMenu();
  }

  // Cart controls
  if (e.target.id === "viewCartBtn" || e.target.id === "cart-link") {
    cartSidebar.classList.add("open");
  }
  if (e.target.id === "closeCart") {
    cartSidebar.classList.remove("open");
  }

  // Place order
  if (e.target.id === "placeOrderBtn") {
    if (cart.length === 0) return alert("Cart is empty!");

    const orderId = "ORD" + Date.now().toString().slice(-6);
    const now = new Date();
    const ready = new Date(now.getTime() + 20 * 60000);

    const order = {
      id: orderId,
      date: now.toISOString(),
      items: [...cart],
      total: Number(document.getElementById("grandTotal").textContent),
      status: "Preparing",
      instructions: document.getElementById("specialInstructions").value.trim()
    };

    let orders = JSON.parse(localStorage.getItem("canteenOrders")) || [];
    orders.unshift(order);
    localStorage.setItem("canteenOrders", JSON.stringify(orders));

    cart = [];
    saveCart();
    updateCartUI();
    renderCart();

    document.getElementById("orderToken").textContent = orderId;
    document.getElementById("readyTime").textContent = ready.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    showPage("success");

    cartSidebar.classList.remove("open");
  }

  // Success buttons
  if (e.target.id === "trackOrderBtn") showPage("orders");
  if (e.target.id === "continueShoppingBtn") showPage("menu");

  // Login modal
  if (e.target.id === "loginBtn") {
    loginModal.style.display = "flex";
  }
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// Fake login
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("username").value.trim() || "Student";
  user = { name };
  saveUser();
  updateCartUI();
  loginModal.style.display = "none";
  alert("Logged in as " + name);
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'light') {
    theme = 'dark';
    themeToggle.textContent = '☀️';
  } else {
    theme = 'light';
    themeToggle.textContent = '🌙';
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});
// ────────────────────────────────────────────────
//  INIT
// ────────────────────────────────────────────────
updateCartUI();
showPage("home");