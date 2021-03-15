'use strict'

const form = document.querySelector('#form-contact');
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", document.querySelector('#name').value);
    formData.append("email", document.querySelector('#email').value);
    formData.append("message", document.querySelector('#message').value);
    try {
        let send = await fetch('./send_email.php', {
            method: 'POST',
            body: formData
        });
        let data = await send.json()
        if (data.success === true) {
            Swal.fire(
                '¡Mensaje enviado!',
                'Gracias por contactarnos',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'intentalo mas tarde'
            })
        }
        console.log(data);
    } catch (error) {
        alert(error);
    }
});