function loop(value, test, update, body) {
        for (i = 0; test(value); i++) {
            body(value);
            value = update(value);
        }
    }
    
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1