// console.log('utilies paise')

function inputFildValueById(id)
{
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

function textFildValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}

function showFildById(id)
{
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('tranjection-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}