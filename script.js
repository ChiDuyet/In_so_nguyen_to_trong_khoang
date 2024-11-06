function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function printPrimes() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    let result = '';

    if (!(1 < a && a <= 1000)) {
        result = 'Giá trị a không hợp lệ';
    } else if (!(1 <= b && b <= 1000)) {
        result = 'Giá trị b không hợp lệ';
    } else if (!(a < b)) {
        result = 'Giá trị a phải nhỏ hơn b';
    } else {
        const primes = [];
        for (let num = a; num < b; num++) {
            if (isPrime(num)) {
                primes.push(num);
            }
        }
        result = primes.length > 0 ? primes.join(' ') : 'Không có số nguyên tố nào trong khoảng này.';
    }

    document.getElementById('result').innerText = result;
}