// console.log('fucking love')

document.getElementById('btn-login').addEventListener('click',function(event){
    const inputPass=document.getElementById('input-pass').value;
    const inputNum=document.getElementById('input-num').value;
    event.preventDefault();
    console.log(inputNum,inputPass)
    if(inputNum==='4' && inputPass==='1234')
    {
        console.log('ke moja')
        window.location.href='./home.html';
    }else
    {
        alert('wrong phone or pin');
    }
})
