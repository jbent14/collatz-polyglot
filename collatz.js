
var collatz = function(n) {
    console.log(n);
    while (n > 1) {
        if (n % 2 === 0) {
            n = (n / 2);
        }
        else {
            n = (3 * n + 1);
        }
       

    console.log(n);
    }
};

return collatz(59);