console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i)
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++) {
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
}
// Exercise 3 Section
console.log("EXERCISE 3a:\n==========\n");

let i = 1

while (i <= 100) {

    if (i % 2 == 1) {
        console.log(i);
    }
    i++
}
console.log("EXERCISE 3b:\n==========\n");
let j = 1

do {
    if (j % 2 == 1) {
        console.log(j);
    }
    j++
} while (j <= 100);


// Exercise 3 Section
console.log("EXERCISE 3c:\n==========\n");
k = 1
while (k <= 100) {
    console.log(i);

    if (k % 3 == 0 && k % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (k % 3 == 0) {
            console.log("FIZZ");
        }
        if (k % 5 == 0) {
            console.log("BUZZ");
        }
    }

    k++
}

l = 1
do { console.log(l)
    if (l % 3 == 0 && l % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (l % 3 == 0) {
            console.log("FIZZ");
        }
        if (l % 5 == 0) {
            console.log("BUZZ")
        }
    };
    l++
} while (l <= 100);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
```js
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
```
for (let i = 1; i < n; i++) {
    if (i == value) {
       console.log ("Found value!");
       break;
    } else {
        console.log("Did not find value")
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n")

let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let n = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

for (let i = start; i <= n; i++) {
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % fizzDivisor == 0) {
            console.log("FIZZ");
        }
        if (i % buzzDivisor == 0) {
            console.log("BUZZ");
        }
    }
}
