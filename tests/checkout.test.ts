import { SuperIpadRule, AppleTVRule } from '../src/rules/index';
import { Checkout } from '../src/services/checkout'

describe('Checkout System', () => {
    const pricingRules = [new AppleTVRule(), new SuperIpadRule()];
    let checkout: Checkout;

    beforeEach(() => {
        checkout = new Checkout(pricingRules);
    });

    it('calculates the total for Apple TVs with the "3 for 2" rule', () => {
        checkout.scan('atv');
        checkout.scan('atv');
        checkout.scan('atv');
        checkout.scan('vga');
        expect(checkout.total()).toBe(249.00);
    });

    it('applies bulk discount for Super iPads', () => {
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd');
        expect(checkout.total()).toBe(2499.95);
    });

    it('handles mixed SKUs correctly', () => {
        checkout.scan('atv');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('atv');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd');
        expect(checkout.total()).toBe(2718.95);
    });

    it('throws error for invalid SKU', () => {
        expect(() => checkout.scan('xyz')).toThrowError('Invalid SKU: xyz');
    });

    it('resets checkout for new transaction', () => {
        checkout.scan('atv');
        checkout.reset();
        expect(checkout.total()).toBe(0.00);
    });
});
