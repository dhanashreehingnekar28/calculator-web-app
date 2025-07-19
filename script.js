const display =
document.getElementById('display');
const buttons =
document.querySelectorAll('.buttons button');
buttons.forEach(btn => {
    btn.addEventListener('click',() => {
        const val = btn.textContent;

        if (val === 'C'){
            display.value = '';
        } else if (val === '=') {
            try{
                display.value =
                eval(display.value);
            }catch{
                display.value = 'Error';
            }
        } else {
            display.value += val;
        }
    });
});
document.addEventListener('keydown',e => {
    if ((e.key >= '0' && e.key <= '9') || '+-*/.'.includes(e.key)){
        display.value += e.key;
    }else if (e.key === 'Enter') {
        try {
            display.value =  eval(display.value);
        } catch {
            display.value = 'Error';
        }
} else if (e.key === 'Backspace') {
    display.value = display.value.slice(0,-1);
} else if (e.key === 'Escape') {
    display.value = '';
}
});
