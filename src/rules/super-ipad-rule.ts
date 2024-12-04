import { IPricingRule } from './index';
import { Product } from '../models/products';


/**
 * Rule for bulk discount on Super iPads when quantity > 4.
 */
export class SuperIpadRule implements IPricingRule {
    private readonly sku = "ipd";
    private readonly regularPrice = 549.99;
    private readonly bulkPrice = 499.99;
    
    apply(items: Product[]): number {
        const targetItems = items.filter(item => item.sku === this.sku);
        if (targetItems.length > 4) {
        const discount = targetItems.length * (this.regularPrice - this.bulkPrice);
        return discount;
        }
        return 0;
    }
}

