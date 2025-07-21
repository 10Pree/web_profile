import Swal from 'sweetalert2'

const CopyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        await Swal.fire({
            position: 'top-end',
            title: 'Copy success',
            text: 'Email copied successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'swal-popup',
            }
        })
    } catch (err) {
        console.log(err)
        await Swal.fire({
            position: 'top-end',
            title: 'Copy Failed',
            text: 'Email copied Failed',
            icon: 'error',
            timer: 1500,
            customClass: {
                popup: 'swal-popup',
            }
        })
    }
}

const button = document.getElementById("btn-email")
button.addEventListener('click', () => CopyToClipboard("nonthanan2233@gmail.com"))