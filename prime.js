function checkPrime(num){
let count=0;
for(i=1;i<=num;i++){
if(num%i==0){
count++;
}
if(count==2){
return true;
}
return false;
}
let ans=checkPrime(7);
if(ans==true){
console.log("Prime number");
}
else{
console.log("Not a Prime number");
}