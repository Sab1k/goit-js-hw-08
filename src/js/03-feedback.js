
import throttle from "lodash.throttle";

const refs = {
    feedbackForm: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textArea: document.querySelector(".feedback-form textarea"),
}

window.addEventListener('DOMContentLoaded', setFormValues);

const state = localStorage.getItem('feedback-form-state') 
    ? JSON.parse(localStorage.getItem('feedback-form-state')) 
    : {};


refs.feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log({email: refs.email.value, message: refs.textArea.value});
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

});

refs.textArea.addEventListener('input', throttle(handleSetStorageState, 500));

refs.email.addEventListener('input', throttle(handleSetStorageState, 500));

function handleSetStorageState(event) {
    state[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(state));
}

function setFormValues() {

    if(!localStorage.getItem('feedback-form-state'))
    return;

    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if(savedData.email) {
        refs.email.value = savedData.email;
    }

    if(savedData.message) {
        refs.textArea.value = savedData.message;
    }
}
