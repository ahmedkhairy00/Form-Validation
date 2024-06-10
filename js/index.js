'use strict';

// variables
const form = document.querySelector('#form');
const allInputs = form.querySelectorAll('input')
const userName = document.querySelector('.username');
const userMsg = document.querySelector('.user-msg');
const email = document.querySelector('.email');
const emailMsg = document.querySelector('.email-msg');
const password = document.querySelector('.pass');
const passMsg = document.querySelector('.pass-msg');
const confirmPassword = document.querySelector('.confirm-pass');
const confirmPassMsg = document.querySelector('.confpass-msg');
const inputsArr = [...allInputs];



// when submit 
const validData = function (e) {
    e.preventDefault();

    if(userName.value == '' || userName.length < 6) {
        userMsg.textContent = 'Username must be at least 6 characters';
        userName.classList.add('error');

    } 
    else toggleClassAndClearMsg(userName,userMsg);

    if(email.value == '' || !email.value.includes('@') || !email.value.includes('.com')){
        emailMsg.textContent = 'Please enter a valid email , and it must contain @ and .com';
        email.classList.add('error')

    }
    else toggleClassAndClearMsg(email,emailMsg);

     
    if (password.value == '' || !password.value.match(/[A-Z]/g) || password.length < 6){
        passMsg.textContent = 'Password must be at least 6 characters and contain at least one uppercase';
        password.classList.add('error')

    }
    else toggleClassAndClearMsg(password,passMsg);


    

    if(confirmPassword.value == '' || confirmPassword.value !== password.value){
        confirmPassMsg.textContent = 'Password  does not match';
        confirmPassword.classList.add('error')

    }
    else toggleClassAndClearMsg(confirmPassword,confirmPassMsg);

    return true

    // if all data valid 
  }

 
  
  form.addEventListener('submit' , validData);

  const toggleClassAndClearMsg = function (input , labelMsg){
    input.classList.add('success');
    input.classList.remove('error');
    labelMsg.textContent ='';
  }