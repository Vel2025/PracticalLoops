// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.

// Loop through all numbers from 1 to 100.


for (let i = 1; i<101; i++) {
    console.log(i);
    }

// If a number is divisible by 3, log “Fizz.”

for (i=1; i<101; i++){
    if (i%3==0){
        let str1 ="Fizz"
        console.log(str1)
    }
}

// If a number is divisible by 5, log “Buzz.”

for (i=1; i<101; i++){
    if (i%5==0){
        let str1 ="Buzz"
        console.log(str1)
    }
}
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”

for (i=1; i<101; i++){
    if (i%3==0&&i%5==0){
        let str1 ="Fizz Buzz"
        console.log(str1)
    }
}

// If a number is not divisible by either 3 or 5, log the number.
for (i=1; i<101; i++){
    if (i%3!==0&&i%5!==0){
        
        console.log(i)
    }
}
