let a = -1, b = 1, c = 0;

for (let i = 0; i < 10; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}
