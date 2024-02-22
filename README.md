# salon-suite-mern-stack
Salon Suite: A MERN stack solution for streamlined salon management. Automate reminders, manage expenses, and enhance billing with ease.

# Folder Structure of Web app
```
salon-app/
  ├── client/
  │   ├── public/
  │   │   └── index.html
  │   └── src/
  │       ├── components/
  │       │   ├── Auth/               // Authentication components
  │       │   ├── Billing/            // Billing components
  │       │   ├── Coupons/            // Coupon components
  │       │   ├── Memberships/        // Membership components
  │       │   ├── Products/           // Product components
  │       │   ├── Reminders/          // Service reminder components
  │       │   ├── Expenses/           // Expenses components
  │       │   ├── Printing/           // Printing components
  │       │   └── Layout/             // General layout components
  │       ├── pages/
  │       │   ├── Home.js             // Home page
  │       │   ├── Dashboard.js        // Admin dashboard
  │       │   ├── BillingPage.js      // Billing page
  │       │   ├── CouponsPage.js      // Coupon management page
  │       │   ├── MembershipsPage.js  // Membership management page
  │       │   ├── ProductsPage.js     // Product management page
  │       │   └── ExpensesPage.js     // Expenses management page
  │       ├── App.js                  // Main component
  │       ├── index.js                // Entry point
  │       └── App.css                 // Global styles
  ├── server/
  │   ├── controllers/
  │   │   ├── authController.js      // Authentication controller
  │   │   ├── billingController.js   // Billing controller
  │   │   ├── couponsController.js   // Coupons controller
  │   │   ├── membershipsController.js  // Memberships controller
  │   │   ├── productsController.js  // Products controller
  │   │   └── remindersController.js // Service reminder controller
  │   ├── models/
  │   │   ├── User.js                // User model
  │   │   ├── Billing.js             // Billing model
  │   │   ├── Coupon.js              // Coupon model
  │   │   ├── Membership.js          // Membership model
  │   │   ├── Product.js             // Product model
  │   │   └── Reminder.js            // Service reminder model
  │   ├── routes/
  │   │   ├── authRoutes.js          // Authentication routes
  │   │   ├── billingRoutes.js       // Billing routes
  │   │   ├── couponsRoutes.js       // Coupons routes
  │   │   ├── membershipsRoutes.js   // Memberships routes
  │   │   ├── productsRoutes.js      // Products routes
  │   │   └── remindersRoutes.js     // Service reminders routes
  │   ├── config/
  │   │   └── config.js              // Configuration file
  │   ├── middleware/
  │   │   └── authMiddleware.js      // Authentication middleware
  │   ├── services/
  │   │   ├── billingService.js      // Billing service
  │   │   ├── couponsService.js      // Coupons service
  │   │   ├── membershipsService.js  // Memberships service
  │   │   ├── productsService.js     // Products service
  │   │   └── remindersService.js    // Service reminders service
  │   └── server.js                  // Express server setup
  ├── package.json                   // Node.js dependencies
  └── README.md                      // Project documentation

```