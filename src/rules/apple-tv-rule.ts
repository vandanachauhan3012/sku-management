import { IPricingRule } from './index';
import { Product } from '../models/products';

/**
 * Rule for "Buy 2, Get 1 Free" offer on Apple TVs.
 */
export class AppleTVRule implements IPricingRule {
    private readonly sku = "atv";
    private readonly price = 109.50; 
    
    apply(items: Product[]): number {
        const targetItems: Product[] = items.filter(item => item.sku === this.sku);
        const discountableCount: number = Math.floor(targetItems.length / 3);
        const discount = discountableCount * this.price;

        return discount;
    }
}

