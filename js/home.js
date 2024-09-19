// console.log('Home added');

document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number-input').value;
    console.log(addMoney);
    console.log(pinNumber);
})