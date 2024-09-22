
document.getElementById('cash-out-click')
.addEventListener('click',function(event){
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden');
})

document.getElementById('add-money-click')
.addEventListener('click',function(event){
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('add-money-from').classList.remove('hidden');
})