import { Product, ProductsCatalog } from '../models/products';
import { IPricingRule } from '../rules/index';


/**
 * Checkout class to handle scanning and pricing of products.
 */
export class Checkout {
    private items: Product[] = [];
    private pricingRules: IPricingRule[];

    constructor(pricingRules : IPricingRule[]){
        this.pricingRules = pricingRules;
    }

    /**
     * Adds a product to the checkout cart by SKU.
     * @param sku - The SKU of the product to add.
     * @throws Error if the SKU is invalid.
     */
    scan(sku: string): void{
        const product = ProductsCatalog[sku];
        if(!product){
            throw new Error(`Invalid SKU: ${sku}`);
        }
        this.items.push(product);
    }

    /**
     * Calculates the total cost after applying pricing rules.
     * @returns The final total price.
     */
    total(): number {
        let totalDiscounts = 0;
        let totalPrice = this.items.reduce((sum, item) => sum + item.price, 0);
      
        // Apply each rule and accumulate discounts
        for (const rule of this.pricingRules) {
          totalDiscounts += rule.apply(this.items);
        }
      
        // Total = original price - discounts
        const total = totalPrice - totalDiscounts;
      
        return parseFloat(total.toFixed(2));
    }

    /**
     * Resets the checkout to allow new transactions.
     */
    reset(): void {
        this.items = [];
    }
}