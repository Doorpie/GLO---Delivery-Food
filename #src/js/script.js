"use strict";

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

function toggleModal() {
  modal.classList.toggle("is-open");
}

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);


// day1
// const
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

// переменные
let login = localStorage.getItem('gloDelivery');

// Функция включения модального окна
function toggleModalAuth() {
  loginInput.style.borderColor = "";
  modalAuth.classList.toggle('is-open');
}

//authorized
function authorized() {
  console.log('authorized');

  function logOut() {
    login = null;
    localStorage.removeItem('gloDelivery');

    checkAuth();

    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';

    buttonOut.removeEventListener('click', logOut);
  }

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut);
}

// notAuthorized
function notAuthorized() {
  console.log('no authorized');

  function logIn(event) {
    // отключаем перезарузку страницы
    event.preventDefault();

    if (loginInput.value.trim()) {

      login = loginInput.value;

      localStorage.setItem('gloDelivery', login);
  
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      logInForm.remove.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();

    } else {
      loginInput.style.borderColor = "red";
    }
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

// Проверка на вторизацию
function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();