import { Product } from '../models/products';

/**
 * Interface for pricing rules. 
 * Defines a contract for applying discounts to a set of products.
 */
export interface IPricingRule {
    apply(items: Product[]): number; /* Applies rule and returns discounted total */
}