const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){

        let number = btn[i].getAttribute('data-num');
        screen.value += number;

    });
}

equal.addEventListener('click', function(){

    if(screen.value === ''){
        alert('Input screen is empty');
    } else {

    let value = eval(screen.value);
        screen.value = value;
    }

});

clear.addEventListener('click', function (){
    screen.value = "";
});



