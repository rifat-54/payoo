// console.log('cah out file found');

document.getElementById('cashout-money-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const amount=inputFildValueById('cashout-amount-money');
    const pin=inputFildValueById('cashout-pin-num');

    if(isNaN(amount))
    {
        alert('Amout is invaid');
    }

    if(pin===1234)
    {
        const current=textFildValueById('availavle-balance');
        if(amount>current)
        {
            alert('Not have available balance');
            return;
        }
        const newBalance=current-amount;
        document.getElementById('availavle-balance').innerText=newBalance;
        // creat tranjection history
        const div=document.createElement('div');
        div.classList.add('bg-red-500');
        div.innerHTML=`
        <h4 class="text-white">Cash out</h4>
        <p class="text-black">${amount} withdraw new balance ${newBalance}</p>

        `
        document.getElementById('tranjection-section').appendChild(div);
    }else
    {
        alert('failed to cash out');
    }
})