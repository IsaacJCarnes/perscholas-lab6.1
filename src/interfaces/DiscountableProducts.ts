interface DiscountableProducts {
    discount: number;
    doApplyDiscount:boolean;
    applyDiscount(): number;
}

export type { DiscountableProducts };