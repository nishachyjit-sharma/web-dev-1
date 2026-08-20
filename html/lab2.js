console.log("yoyo welcome to Hoard-It bank");
let user = prompt("Can i have your name please");
console.log("Hi " + user);
let balance = Number(prompt("Can i know your balance please"));
if (balance > 0)
    {
        balance = balance + (balance * 3/100);
        console.log("yo " + user + " your balance after 1 year will be " + balance);
    }
if (balance = 0)
{
    console.log("Your balance is 0");
}    
else 
    {
        balance = balance - 20;
        console.log("An overdraft fee is applied to your current balance for unarranged overdraft, Your new balance: " + balance);

    }