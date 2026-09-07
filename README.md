# CampusBite — Smart College Canteen Management System

A modern, responsive, full-featured **College Canteen Management System** frontend website engineered with **HTML5**, **CSS3**, **JavaScript (ES6+)**, and **React 18** for dynamic interactive components.

The platform provides two complete portals:
1. **Student Ordering Portal**: Digital menu with real-time search & filters, shopping cart tray, campus wallet, instant token checkout, 5-stage live order tracking, favorites, order history, and student profile.
2. **Admin & Kitchen Command Portal**: Executive revenue dashboard with Chart.js visual analytics, live kitchen queue board with KOT (Kitchen Order Ticket) printing, menu catalog CRUD with real-time availability toggles, inventory stock control with low-stock warnings, student customer ledger with suspension controls, payment transactions log with refunds, and promotional coupon management.

---

## 📁 Complete Project Structure

```
canteen-management-system/
│
├── index.html                   # High-impact Landing / Home Page
├── login.html                   # Student / User Login Page
├── register.html                # Student Registration Page (with ₹100 Welcome Bonus)
├── admin-login.html             # Dedicated Executive Staff/Admin Login Page
├── README.md                    # Complete project documentation & run guide
│
├── css/
│   ├── style.css                # Core design system, CSS variables, dark/light themes, typography
│   ├── components.css           # Buttons, cards, modals, tables, badges, toasts, forms
│   ├── responsive.css           # Breakpoints, mobile bottom nav, hamburger drawer
│   └── admin.css                # Sleek executive dark/light admin dashboard layout
│
├── js/
│   ├── data.js                  # Initial mock dataset (24+ foods, coupons, inventory, users, orders)
│   ├── api.js                   # Mock REST API service layer with LocalStorage & backend TODO comments
│   ├── auth.js                  # Auth state, session simulation, route guards, credentials verification
│   ├── main.js                  # Global controller: theme toggle, notification badge, mobile drawer, toasts
│   └── utils.js                 # Currency formatter (₹), ID generator (CAN20260906xxx), date helpers
│
├── react/
│   ├── react-loader.js          # Helper to mount React components on target DOM containers
│   └── components/
│       ├── MenuApp.jsx          # React dynamic menu with real-time search, filters, tags & favorites
│       ├── CartApp.jsx          # React dynamic cart: live quantity changes, calculations, coupons
│       ├── OrderTracker.jsx     # React live order timeline with simulated kitchen progress
│       ├── DashboardWidgets.jsx # React student dashboard stats, specials, and quick reorder
│       └── AdminOrderBoard.jsx  # React admin live order management with instant status transitions
│
├── pages/
│   ├── menu.html                # Digital Canteen Menu with dynamic filtering & detail modal
│   ├── cart.html                # Shopping Cart & price breakdown
│   ├── checkout.html            # Checkout, pickup counter/time selection, QR UPI & Wallet payment
│   ├── tracking.html            # Live Order Tracking with real-time visual progress
│   ├── orders.html              # My Orders history with order slip modal & reorder
│   ├── dashboard.html           # Student Dashboard with metrics, favorites, recommended items
│   ├── favorites.html           # Saved favorite foods list
│   ├── wallet.html              # Campus Wallet: virtual card, add money, simulated passbook
│   ├── profile.html             # Student Profile with edit mode & notification/dietary preferences
│   ├── notifications.html       # Activity alerts, order updates & promotional news
│   ├── about.html               # Canteen story, hygiene standards, opening hours & rules
│   └── contact.html             # Contact form, campus location map placeholder, FAQs
│
└── admin/
    ├── dashboard.html           # Admin Executive Dashboard with statistics & Chart.js visualizations
    ├── orders.html              # Admin Order Management with live status update & KOT print view
    ├── menu-management.html     # Food CRUD: Add, edit, delete, toggle availability
    ├── inventory.html           # Raw ingredients & supplies inventory with low-stock warnings
    ├── customers.html           # Student accounts management, spendings & block/unblock
    ├── payments.html            # Transaction ledger, payment methods breakdown & refunds
    ├── offers.html              # Promo coupons generator (CANTEEN20, etc.)
    ├── feedback.html            # Customer ratings, hygiene reviews & suggestions
    └── reports.html             # Sales, order volume & category performance analytics
```

---

## 🚀 How to Run the Project

This project requires **zero build steps** and **no complex dependencies**:

### Option 1: Direct File Open
Simply double-click `index.html` (or right-click and choose **Open with Google Chrome / Edge / Firefox / Safari**). All HTML, CSS, JavaScript, and React components loaded via CDN will function immediately.

### Option 2: Using VS Code Live Server
1. Open the `canteen management system` folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey (if not already installed).
3. Right-click `index.html` and select **Open with Live Server**.
4. The project will launch automatically at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Node / npx (Optional)
If Node.js is installed on your computer:
```bash
npx serve .
```
Then open `http://localhost:3000` in your browser.

---

## 🔑 Sample Login Credentials

Both student and admin authentication modules include convenient **"Auto-Fill"** buttons for instant testing.

### 1. Student Portal Credentials
- **Login Page**: [`login.html`](login.html)
- **Email / Student ID**: `student@college.edu` (or `STU1024`)
- **Password**: `student123`
- **Preloaded Student**: Aditya Verma (Computer Science, 3rd Year)
- **Starting Wallet Balance**: ₹350.00
- *New Student Registration*: Register any new account at [`register.html`](register.html) to receive an automatic **₹100 Welcome Bonus** credited directly to your Campus Wallet.

### 2. Admin Portal Credentials
- **Login Page**: [`admin-login.html`](admin-login.html)
- **Admin Email / ID**: `admin@canteen.edu` (or `ADM8801`)
- **Password**: `admin123`
- **Preloaded Role**: Chief Canteen Supervisor (Dr. V. Sharma)
- **Features Accessible**: Kitchen live order board, menu catalog CRUD, inventory restocking, student account blocking, transaction refunds, coupon issuance.

---

## 🛠️ Technology Stack Breakdown

| Technology | Where & How It Is Used |
| :--- | :--- |
| **HTML5** | Semantic structure across all 25+ pages (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`), form accessibility, and input validations. |
| **CSS3** | Modern design system in `css/style.css`, `css/components.css`, `css/admin.css`, and `css/responsive.css`. Utilizes CSS Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism (`backdrop-filter`), keyframe animations, and **Dark/Light Mode** switching. |
| **JavaScript (ES6+)** | Architecture in `js/api.js`, `js/auth.js`, `js/data.js`, `js/main.js`, and `js/utils.js`. Manages state persistence via `localStorage`, route protection guards, session simulation, toast notifications, and modal controllers. |
| **React 18** | Dynamic high-interaction components in `react/components/`: `MenuApp.jsx` (instant multi-parameter filtering & search), `CartApp.jsx` (live quantity calculations & promo discounts), `OrderTracker.jsx` (5-stage kitchen progress simulation), `DashboardWidgets.jsx` (student summary cards), and `AdminOrderBoard.jsx` (kitchen board with KOT slip rendering). |
| **Chart.js** | Used in `admin/dashboard.html` for interactive charts: 7-day sales revenue trend, food category volume distribution, hourly rush volume, and top 5 best-sellers. |
| **FontAwesome 6** | Culinary and UI icons loaded via CDN for high aesthetic clarity. |

---

## 🔌 How to Connect This Frontend to a Backend

The frontend was purposely architected with a **clean separation of concerns** in [`js/api.js`](js/api.js). Every API method already mirrors a standard REST endpoint and includes explicit `// TODO:` comments showing the replacement code.

### Step-by-Step Backend Integration:

#### 1. Menu Endpoints
- **Current Mock**:
  ```javascript
  async getMenu() {
    const foods = Utils.getStorage(STORAGE_KEYS.FOODS, []);
    return { success: true, data: foods };
  }
  ```
- **Replace with Express.js / Node.js API**:
  ```javascript
  async getMenu() {
    const response = await fetch('/api/menu');
    return await response.json();
  }
  ```

#### 2. Order Creation & Payment
- **Current Mock**:
  ```javascript
  async createOrder(orderData) {
    // Saves into LocalStorage and deducts wallet
  }
  ```
- **Replace with API & MongoDB**:
  ```javascript
  async createOrder(orderData) {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(orderData)
    });
    return await response.json();
  }
  ```

#### 3. Authentication & JWT Tokens
- Replace `localStorage.setItem(STORAGE_KEYS.CURRENT_USER, ...)` with secure HTTP-only cookies containing signed JWT tokens or bearer tokens passed in the `Authorization: Bearer <token>` request header.

---

## 📋 Comprehensive Feature Checklist

- [x] High-impact Landing Page with animated visual food cards, category highlights, "How It Works" 5-step flow, and testimonials.
- [x] Separate Student Login & Registration with password strength meter, validation, and ₹100 welcome bonus.
- [x] Dedicated Executive Admin Login with distinct dark command-center aesthetic.
- [x] Dynamic Digital Menu powered by React with category tabs, real-time search, Veg/Non-Veg filter, price sorting, and Food Details modal.
- [x] Reactive Shopping Cart tray with live quantity increment/decrement, packaging fee, promo code application, and grand total.
- [x] Express Checkout with counter selection (Counters 1, 2, 3), time slots, and payment UI (Campus Wallet, Instant UPI QR, Cash at Counter).
- [x] Unique Order ID generation (`CAN20260906xxx`) and pickup token generation (`#B-42`).
- [x] Live Order Tracking with 5-stage progress timeline and status simulation controls.
- [x] My Orders history with order slip modal and 1-click reorder.
- [x] Student Dashboard with key metrics, today's special, and favorite dishes.
- [x] Campus Wallet with virtual card preview, UPI recharge simulation, and transaction passbook.
- [x] Executive Admin Dashboard with real-time statistics and Chart.js visualizations.
- [x] Kitchen Order Management with live status updates (Pending → Confirmed → Preparing → Ready → Completed → Cancelled) and KOT printing.
- [x] Menu Catalog CRUD: Add new dish, edit prices/ingredients, delete, and live availability toggle.
- [x] Inventory Stock Management with automatic low-stock warning banners and quick restock dialog.
- [x] Student Ledger with spending totals and account suspension (Block/Unblock) controls.
- [x] Financial Payment Ledger with method breakdowns and refund simulation.
- [x] Promotional Offers & Coupons generator (`CANTEEN20`, `WELCOME50`, etc.).
- [x] Student Feedback & Quality Ratings dashboard.
- [x] Canteen Information (Hours, Facilities, FSSAI hygiene certification, Dining code of conduct).
- [x] Contact & Helpdesk with feedback submission and campus map placeholder.
- [x] Dark Mode and Light Mode theme toggle on all pages with LocalStorage memory.
- [x] 100% Responsive Design: Desktop, Laptop, Tablet, and Mobile with bottom navigation bar and slide-out hamburger drawer.
