// Addition. Write a program to add up the numbers 1 to 20.
let i = 0
for (i = 0; i < 21; i++) {
    console.log(i)
}


// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.

for (i = 1; i < 6; i++) {
    let bottles
    switch (true) {
        case i == 1:
            bottles = "one bottle"
            break;
        case i == 2:
            bottles = "two bottles"
            break;
        case i == 3:
            bottles = "three bottles"
        case i == 4:
            bottles = "four bottles"
            break;
        case i == 5:
            bottles = "five bottles"
            break;
    }
    console.log("There are", bottles, "of beer on the wall.")
}



// The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


for (i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log("The number", i, "is even.")
    } else {
        console.log("The number", i, "is not even.")
    }
}


// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (i = 1; i < 11; i++) {
    for (let y = 1; y < 11; y++) {
        console.log(i, "*", y, "=", i * y)
    }
}

// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 1; i < 101; i++) {
    switch (true) {
        case i % 3 == 0 && i % 5 == 0:
            console.log("FizzBuzz")
            break
        case i % 3 == 0:
            console.log("Fizz")
            break
        case i % 5 == 0:
            console.log("Buzz")
        default:
            console.log(i)
    }
}


// Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.

for (i = 1; i < 1001; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "is a multible of 3 and 5")
    }

}

// Bonus

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000

for (i = 1; i < 11; i++) {
    console.log(i * 100)
}


// 0 2 4 6 8 10

for (i = 0; i < 6; i++) {
    console.log(i * 2)
}

// 3 6 9 12 15

for (i = 1; i < 6; i++) {
    console.log(i * 3)
}

// 9 8 7 6 5 4 3 2 1 0

for (i = 9; i >= 0; i--) {
    console.log(i)
}

// 1 1 1 2 2 2 3 3 3 4 4 4

for (i = 1; i < 5; i++) {
    for (y = 1; y < 4; y++) {
        console.log(i)
    }
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (i = 1; i < 5; i++) {
    for (y = 0; y < 5; y++) {
        console.log(y)
    }
}

// isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

let str = "mom"
let check ="is palindrome"
let len = Math.floor(str.length / 2);
for (i=0;i< len; i++){
    if(str[i] !== str[str.length - i -1]){
        check="is not palindrome"
    }
}
console.log(check)