document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    if (username === 'admin' && password === '12345') {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login bem-sucedido!';
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Usuário ou senha incorretos!';
    }
});
