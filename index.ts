import { Checkout } from './src/services/checkout';
import { AppleTVRule, SuperIpadRule } from './src/rules/index';

const pricingRules = [new AppleTVRule(), new SuperIpadRule()];
const co = new Checkout(pricingRules);

co.scan("atv");
co.scan("ipd");
co.scan("ipd");
co.scan("atv");
co.scan("ipd");
co.scan("ipd");
co.scan("ipd");

console.log(`Total: $${co.total()}`);
