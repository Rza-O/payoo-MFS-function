document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    
    // Wrong way to verify. not for full scale job
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        // Add to transaction history
        const p = document.createElement('p');
        p.innerText =`Added: ${addMoney} tk. New Balance: ${newBalance}`
        console.log(p);

        // Should be a common function
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to add money')
    }
});