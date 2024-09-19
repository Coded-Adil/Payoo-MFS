document.getElementById('show-cash-out').addEventListener('click',function(){
    // console.log('Show Cash Out');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('show-add-money').addEventListener('click',function(){
    // console.log('Show Cash Out');
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})