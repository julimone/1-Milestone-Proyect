/*--- Captures input data  ---*/
const userName = document.querySelector('#user');
const submit = document.querySelector('#submit');
const playbuttonsubmit = document.querySelector('#submit');
const heading = document.querySelector('#heading');

// userName.addEventListener( 'blur', addUserName )
playbuttonsubmit.addEventListener('click', addUserName)

function addUserName(e) {
    e.preventDefault();

    // Captures info typed in the input
    const name = userName.value
    // Stores object JSON in local Storage #value
    localStorage.setItem('userName', JSON.stringify(name));
    console.log(name);
    // Validates that the userName is not empty
    if (userName.value != '') {
        // Clears input
        userName.value = '';
        // Rederects to game
        window.location.href = './game.html'
        console.log(submit)
    }
    console.log('No hay Nombre')
    // Creates a div
    const message = document.createElement('h3');
    // Adds class error to div
    message.classList.add('error');
    // Modifies  texto in div
    message.textContent = 'Debes ingresar un nombre';
    // Inserts after  h1
    heading.appendChild(message)
    // Temporizador, deletes mesage
    setTimeout(() => {
        message.remove();
    }, 3000)
    console.log(message)
    // Tempo  mensage
}

