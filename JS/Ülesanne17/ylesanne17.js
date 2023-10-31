/**
 * Karl Jugapuu
 * Üleasnne 17
 * 31.10.2023
 */




const form = document.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const gender = document.querySelector('input[name="gender"]:checked');
    const city = document.getElementById("city");
    const country = document.getElementById("country");
    const password = document.getElementById("password");
    
    console.log(`Eesnimi: ${firstName.value}`);
    console.log(`Perekonnanimi: ${lastName.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Sugu: ${gender.value}`);
    console.log(`Linn: ${city.value}`);
    console.log(`Riik: ${country.value}`);
    console.log(`Parool: ${password.value}`);
});
