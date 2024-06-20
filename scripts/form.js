const scriptURL = 'https://script.google.com/macros/s/AKfycbzrF6lZYm5HVTjfY84wE18sK4rExkHQmhfatExAcf_YhfNcyiBsv-G3MLTeXOy_fkex/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const sendingIndicator = document.querySelector('.sending-indicator');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Show sending indicator only when submitting
    sendingIndicator.style.display = 'flex';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.textContent = "Message sent successfully";
            setTimeout(function () {
                msg.textContent = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
        .finally(() => {
            // Hide sending indicator after form submission is complete
            sendingIndicator.style.display = 'none';
        });
});
