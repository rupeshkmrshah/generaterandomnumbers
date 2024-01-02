//create a function that will return random number of 6 numbers which will show onclick button
function myFunction()
{
    let generateOTP = Math.floor((Math.random() * 888888) + 111111);
    document.getElementById('otp').innerHTML = generateOTP;
}