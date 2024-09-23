

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount=inputFildValueById('input-amount-money');
    const pin=inputFildValueById('input-pin-num');
    
    if(isNaN(amount))
    {
        alert('Amount is invalid');
        return;
    }
    
    if(pin===1234)
    {
        const currentBalance=textFildValueById('availavle-balance');
        const newBalance=currentBalance+amount;
        document.getElementById('availavle-balance').innerText=newBalance;
        // console.log('taka paise')

        // added history

        const p=document.createElement('p');
        p.innerText=`Add money ${amount} New Balance ${newBalance}`
        // where add
        document.getElementById('tranjection-section').appendChild(p);
        console.log(p);
    }else
    {
        alert('failed to add money ');
    }
})