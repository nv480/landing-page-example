const btn = document.querySelectorAll('.btn-effect');
const changeColor = document.querySelectorAll('.changeColor');

const sendForm = document.getElementById('small-form').addEventListener('submit', (e) => {
    const regularExpression = /\w+@\w+\.+[a-z]/;
    const nameInput = document.getElementById('inputName').value;
    const emailInput = document.getElementById('emailInput').value;

    if (nameInput === '' && emailInput === '') {
        const sendAll = document.createElement('p');
        const texto = document.createTextNode('Debe ingresar un nombre y un email');
        sendAll.appendChild(texto);
        const mostrar = document.getElementById('mostrar').appendChild(sendAll);
        mostrar.style.color = 'red';
        mostrar.style.paddingBottom = '15px';
        setTimeout(() => {
            mostrar.style.maxHeight = '0';
            mostrar.style.maxWidth = '0';
            mostrar.style.position ='fixed';
            mostrar.style.overflow ='hidden';
        }, 2500);
    }
    else if (!regularExpression.test(emailInput)) {
        const sendEmail = document.createElement('p');
        const texto = document.createTextNode('Debe ingresar un email valido');
        sendEmail.appendChild(texto);
        const mostrar = document.getElementById('mostrar').appendChild(sendEmail);
        mostrar.style.color = 'red';
        mostrar.style.paddingBottom = '15px';
        setTimeout(() => {
            mostrar.style.maxHeight = '0';
            mostrar.style.maxWidth = '0';
            mostrar.style.position ='fixed';
            mostrar.style.overflow ='hidden';
        }, 2500);
    }
    else if (regularExpression.test(emailInput)) {
        const sendEmail = document.createElement('p');
        const texto = document.createTextNode('Suscrito satisfactoriamente');
        sendEmail.appendChild(texto);
        const mostrar = document.getElementById('mostrar').appendChild(sendEmail);
        mostrar.style.color = 'green';
        mostrar.style.paddingBottom = '15px';
        setTimeout(() => {
            mostrar.style.maxHeight = '0';
            mostrar.style.maxWidth = '0';
            mostrar.style.position ='fixed';
            mostrar.style.overflow ='hidden';
        }, 2500);
    }
    e.preventDefault();
});

btn.forEach(e => {
    e.addEventListener('click', (e) => {
        const event = e.target.parentNode;
        event.children[1].classList.toggle('active')
        event.parentNode.children[1].classList.toggle('active');
    });
});

for (i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener('click', (e) => {
        let change = e.target;
        if (change.className == 'changeColor')
            change.className = 'colorChange changeColor';
        else
            change.className = 'changeColor'
    });
}