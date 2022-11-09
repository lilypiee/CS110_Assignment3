let number = 99;
let arr = number;
let binary = 0;
let decimal2 = 1;

while(arr){ 
    binary=binary+arr%2*decimal2;
    arr = Math.floor(arr/2);
    decimal2 = decimal2*10;
}

console.log(binary);