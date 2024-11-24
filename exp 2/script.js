// script.js

// Event 1: Click event on button
document.getElementById('clickButton').addEventListener('click', () => {
    alert('Button was clicked!');
});

// Event 2: Mouseover event on input
document.getElementById('hoverInput').addEventListener('mouseover', () => {
    document.getElementById('hoverInput').style.backgroundColor = 'yellow';
});

// Event 3: Focus event on input
document.getElementById('focusInput').addEventListener('focus', () => {
    document.getElementById('focusInput').style.backgroundColor = 'lightgreen';
});

// Event 4: Blur event on input
document.getElementById('blurInput').addEventListener('blur', () => {
    document.getElementById('blurInput').style.backgroundColor = 'lightcoral';
});

// Event 5: Mousemove event on div
document.getElementById('mouseMoveArea').addEventListener('mousemove', (event) => {
    document.getElementById('mouseMoveArea').innerText = `Mouse Position: (${event.clientX}, ${event.clientY})`;
});

// Event 6: Submit event on form
document.getElementById('submitForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted!');
});
