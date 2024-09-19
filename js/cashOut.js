document.getElementById('button-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('cash-out-input').value;
    const pinNumber = document.getElementById('pin-cash-out-input').value;
    // console.log(cashOutAmount);
    if (pinNumber === '1234') {
        const mainBalance = document.getElementById('account-balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalance);
        const cashOutAmountNumber = parseFloat(cashOutAmount);
        const updatedBalance = mainBalanceNumber - cashOutAmountNumber;
        document.getElementById('account-balance').innerText = updatedBalance;
    }else{
        alert("Failed to Cash Out");
    }
})