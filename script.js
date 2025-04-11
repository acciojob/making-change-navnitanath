function makeChange(amount) {
    let change = { q: 0, d: 0, n: 0, p: 0 };

    change.q = Math.floor(amount / 25);
    amount %= 25;

    change.d = Math.floor(amount / 10);
    amount %= 10;

    change.n = Math.floor(amount / 5);
    amount %= 5;

    change.p = amount;

    return change;
}

// Example test cases
console.log(makeChange(47)); // Output: { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // Output: { q: 0, d: 2, n: 0, p: 4 }
