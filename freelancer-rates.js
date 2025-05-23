export function dayRate(ratePerHour) {
    return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget/ dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const fullMonths = Math.floor(numDays / 22);
    const remainingDays = numDays % 22;
    const fullMonthPrice = fullMonths * 22 * dayRate(ratePerHour);
    const discountedFullMonthPrice = fullMonthPrice * (1 - discount);
    const remainingDaysPrice = remainingDays * dayRate(ratePerHour);
    return Math.ceil(discountedFullMonthPrice + remainingDaysPrice);
}