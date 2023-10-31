const formElement = document.getElementById('myForm');
 
const pattern = {
    firstName: /^[a-z]{5,}$/,
    lastName: /^[a-z]{5,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
};
 
for (let field in pattern) {
    formElement[field].addEventListener('keyup', e => {
        e.preventDefault();
 
        let fieldValue = e.target.value;
        let kontroll = pattern[field].test(fieldValue);
        let helpText = document.getElementById(field + 'Help');
 
        if (kontroll) {
            helpText.textContent = "Ei vasta mustrile!";
            helpText.classList.remove('text-danger');
            helpText.classList.add('text-muted');
        } else {
            helpText.textContent = "Ei vasta mustrile!";
            helpText.classList.remove('text-muted');
            helpText.classList.add('text-danger');
        }
    });
}
