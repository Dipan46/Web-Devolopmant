let output = [];
let i = 1;
function fizzbuzz() {
    if (i === 1 || i === 2)
        output.push(i);
    else if (i % 3 === 0 && i % 5 != 0)
        output.push("Fizz");
    else if (i % 5 === 0 && i % 3 != 0)
        output.push("Buzz");
    else if (i % 3 === 0 && i % 5 === 0)
        output.push("FizzBuzz");
    else
        output.push(i);
    i++;
    console.log(output);
}
for (let index = 0; index < 30; index++)
    console.log(fizzbuzz());
