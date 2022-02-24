/*--- Captura datos input ---*/
const userName = document.querySelector('#user');
const submit = document.querySelector('#submit');
const playbuttonsubmit = document.querySelector('#submit');
const heading = document.querySelector('#heading');

// userName.addEventListener( 'blur', addUserName )
playbuttonsubmit.addEventListener('click', addUserName)

function addUserName(e) {
    e.preventDefault();

    // Captura la info ingresada en input
    const name = userName.value
    // Almacena como objeto JSON en almacenamiento local el valor ingresado en el numero
    localStorage.setItem('userName', JSON.stringify(name));
    console.log(name);
    // Valida que el userName no se encuentre vacio
    if (userName.value != '') {
        // Limpia el input
        userName.value = '';
        // Redirecciona al juego
        window.location.href = './game.html'
        console.log(submit)
    }
    console.log('No hay Nombre')
    // Crea un div
    const message = document.createElement('h3');
    // Agrega clase error a div
    message.classList.add('error');
    // Modifica el texto del div
    message.textContent = 'Debes ingresar un nombre';
    // Inserta despues del h1
    heading.appendChild(message)
    // Temporizador, elimina el mensaje
    setTimeout(() => {
        message.remove();
    }, 3000)
    console.log(message)
    // TEmporizar el mensaje
}

