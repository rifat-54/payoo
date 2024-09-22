
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('input-amount-money').value;
    const pin=document.getElementById('input-pin-num').value;

    if(pin==='1234')
    {
        const current=document.getElementById('availavle-balance').innerText;
        const numCurrent=parseFloat(current);
        const numAmount=parseFloat(amount);
        const newBalance=numAmount+numCurrent;
        document.getElementById('availavle-balance').innerText=newBalance;
    }else{
        alert('wrong pin ! try again');
    }
})