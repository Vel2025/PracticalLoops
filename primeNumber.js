console.log('================Part 2 - Prime Time')

//Finding if the given number is prime or not?
let x = 21;
let isPrime= true;
if (x<=2){
    console.log (x +" is a prime number")
    }
for (i=2; i<x; i++){
    if (x%i==0 ){
        console.log(x+" is not a prime number")
        isPrime=false;
        break;
        } 
}
     if(isPrime==true){
     console.log(x+ ' is a prime number');
    }


//Log the next prime number after a given number

// let n = 9;
// let isPrime = true;

// for (i=2; i<n; i++ ){
    
//     if (n%i==0){
        
//     console.log(n+" is not a prime number")
    
//     isPrime = false;
//     } if(isPrime==true){
    
//         console.log(n+ ' is a prime number')
//         break
//     }
// }