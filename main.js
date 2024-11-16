const textArea = document.getElementById('text-area');
const counter = document.getElementById('counter');
const textDiv = document.querySelector('.text-div');

counter.textContent = 0;
textArea.addEventListener('input', function(e) {
    let values = textArea.value;
    counter.textContent = values.length;

    if (values.length >= 250) {
        textDiv.style.borderColor = 'red';
        textArea.disabled = true;
        // alert('limit reached');
    }
});