
document.getElementById('add-money-btn')
.addEventListener('click',function(event){

    const amount=document.getElementById('input-amount-money').value;
    const inputPin=document.getElementById('input-pin-num').value;

    event.preventDefault();
    console.log('pin & amount',amount,inputPin)

    if(inputPin==='1234')
    {
        const availAble=document.getElementById('availavle-balance').innerText;
        const currentNum=parseFloat(availAble);
        const inputBalance=parseFloat(amount);
        // console.log(currentNum,inputBalance);
        const newBalance=currentNum+inputBalance;
        // availAble.innerText=newBalance;
        document.getElementById('availavle-balance').innerText=newBalance;
        // console.log(newBalance);
    }else
    {
        alert('wrong pin ! please try again');
    }
})