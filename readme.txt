#This project is a checkout system built with Node.js and TypeScript. 
#It implements pricing rules and a catalog to calculate the total cost of scanned products. It includes a main Checkout service and unit tests to verify functionality.

#------Directory Structure------#
/src
|-- /models
|     |-- product.ts         // Defines the product catalog model
|-- /rules
|     |-- pricing-rule.ts     // Interface for pricing rules
|     |-- apple-tv-rule.ts    // 3-for-2 rule for Apple TVs
|     |-- super-ipad-rule.ts  // Bulk discount rule for Super iPads
|     |-- index.ts            // Barrel file to export all rules from the module
|-- /services
|     |-- checkout.ts        // Main Checkout class implementing scanning and total calculation
|-- /tests
|     |-- checkout.test.ts   // Unit tests for the Checkout system
|-- index.ts                 // Entry point (optional, for demonstration)

#------Features------#
1. Product Scanning: Add products to the cart.
2. Pricing Rules: Apply custom rules for discounts and offers.
3. Unit Tests: Ensure the correctness of functionality with jest.

#------How to Use------#
1. Clone the repository.
2. Install dependencies:
    npm install
3. Run the development server:
    npm run start:dev
4. Run tests:
    npm test

