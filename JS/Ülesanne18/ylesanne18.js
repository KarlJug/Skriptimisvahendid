const formElement = document.getElementById('myForm');
 
const pattern = {
    firstName: /^[a-z]{2,}$/,
    lastName: /^[a-z]{2,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
};
 
for (let field in pattern) {
    formElement[field].addEventListener('keyup', e => {
        e.preventDefault();
 
        let fieldValue = e.target.value;
        let kontroll = pattern[field].test(fieldValue);
 
        if (kontroll) {
            console.log("Vastab mustrile");
        } else {
            console.log("Ei vasta mustrile");
        }
    });
}
