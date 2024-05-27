let string = "";
let buttons = document.querySelectorAll('.button, .button1, .button2, .button3');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let input = document.querySelector('input');
        
        if (e.target.innerHTML === 'AC') {
            string = "";
        } else if (e.target.innerHTML === '=') {
            try {
                string = eval(string.replace('X', '*'));
            } catch {
                string = "Error";
            }
        } else {
            string += e.target.innerHTML;
        }
        
        input.value = string;
    });
});
