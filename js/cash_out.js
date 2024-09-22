
document.getElementById('cashout-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('cashout-amount-money').value;
    const pin=document.getElementById('cashout-pin-num').value;
    if(pin==='1234')
    {
        const current= document.getElementById('availavle-balance').innerText;
        const numAmount=parseFloat(amount);
        const numCurret=parseFloat(current);
        newBalance=numCurret-numAmount;
        document.getElementById('availavle-balance').innerText=newBalance;
    }else
    {
        alert('wrong pin ! try again');
    }
})