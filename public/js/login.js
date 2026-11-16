const emailBox = document.getElementById('Email-Input');
const passwordBox = document.getElementById('Password-Input');

const email = 'abcde';
const senha = '1234';

function login () {

    const emailUserInput = emailBox .value;
    const passwordUserInput = passwordBox.value;

    if (emailUserInput === email && passwordUserInput === senha) {
        window.location.href = "./home.html";
    }else {
        emailBox.value = '';
        passwordBox.value = '';
    }

}