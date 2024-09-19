// console.log('Home added');

document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number-input').value;
    // console.log(addMoney);
    // console.log(pinNumber);

    if (pinNumber === '1234') {
        // Get the Current Balance
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber+balanceNumber;
        // console.log(newBalance);

        // Update balance
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert("Failed to add money");
    }
})