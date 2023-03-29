const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
for(element of buttons){
    element.addEventListener('click', e => {
        let buttonElement = e.target.innerText;
        if(buttonElement === '=')
            display.value = eval(display.value);
        else if(buttonElement === 'AC')
            display.value = '';
        else if(buttonElement === 'CE')
            display.value = display.value.slice(0,-1);
        else{
            display.value +=buttonElement;
        }
    });
}