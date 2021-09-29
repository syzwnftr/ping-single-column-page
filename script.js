const inputEmail = document.querySelector('.inputEmail');
const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.errorMsg');

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', function(e) {
    if (!inputEmail.value.match(validRegex)) {
        inputEmail.classList.add('redBorder');
        errorMsg.classList.add('visible');  
    }   
    e.preventDefault();
});

// Remove redBorder and errorMsg when user start typing
inputEmail.oninput = function() {
    inputEmail.classList.remove('redBorder');
    errorMsg.classList.remove('visible');
}

// To reset a value of <input> when page is reloaded
function reset() {
    inputEmail.value = '';
}

reset();