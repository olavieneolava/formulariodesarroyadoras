//Javascipt final

const form = document.getElementById('formuario');
const username = document.getElementById('nombre');
const email = document.getElementById('correo');
const password = document.getElementById('password');
const password2 = document.getElementById('rpassword');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = correo => {
    const re = "^\S{1,}@\S{2,}\.\S{2,}$";
    return re.test(String(correo).toLowerCase());
}

const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const correoValue = correo.value.trim();
    const passwordValue = password.value.trim();
    const rpasswordValue = rpassword.value.trim();

    if(nombreValue === '') {
        setError(nombre, 'Debes introducir tu nombre');
    } else {
        setSuccess(nombre);
    }

    if(correoValue === '') {
        setError(correo, 'El correo es necesario');
    } else if (!isValidEmail(correoValue)) {
        setError(correo, 'Prueba un correo valido');
    } else {
        setSuccess(correo);
    }

    if(passwordValue === '') {
        setError(password, 'Contraseña necesria');
    } else if (passwordValue.length > 8 ) {
        setError(password, 'La contraseña debe tener minimo 8 caracteres')
    } else {
        setSuccess(password);
    }

    if(rpasswordValue === '') {
        setError(rpassword, 'Confirma la contraseña');
    } else if (rpasswordValue !== passwordValue) {
        setError(rpassword, "La contraseña no coincide");
    } else {
        setSuccess(rpassword);
    }

};