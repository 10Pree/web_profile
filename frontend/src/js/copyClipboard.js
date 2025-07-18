import Swal from 'sweetalert2'

const CopyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        await Swal.fire({
            title: 'Copy success',
            text: 'Email copied successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
        })
    } catch (err) {
        console.log(err)
        await Swal.fire({
            title: 'Copy Failed',
            text: 'Email copied Failed',
            icon: 'error',
            showConfirmButton: false,
            timer: 1000
        })
    }
}

const button = document.getElementById("btn-email")
button.addEventListener('click', () => CopyToClipboard("nonthanan2233@gmail.com"))