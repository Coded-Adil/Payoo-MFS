// console.log("Button Clicked");

// Form submit reloading the page
document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
});