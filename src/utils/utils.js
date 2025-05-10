// Display Money in Indian Format
export const displayMoney = (n) => {
    const numFormat = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return numFormat.format(n).split('.', 1);
};