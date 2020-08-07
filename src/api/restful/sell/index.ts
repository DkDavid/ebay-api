import Account from './account';
import Analytics from './analytics';
import Compliance from './compliance';
import Finances from './finances';
import Fulfillment from './fulfillment';
import Inventory from './inventory';
import Marketing from './marketing';
import Metadata from './metadata';
import Recommendation from './recommendation';

export type Sell = {
    account: Account
    analytics: Analytics,
    compliance: Compliance,
    finances: Finances,
    fulfillment: Fulfillment,
    inventory: Inventory,
    marketing: Marketing,
    metadata: Metadata,
    recommendation: Recommendation
};

export {
    Account,
    Compliance,
    Analytics,
    Finances,
    Fulfillment,
    Inventory,
    Marketing,
    Metadata,
    Recommendation
};
