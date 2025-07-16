
const CopyToClipboard = () => {
    navigator.clipboard.writeText("nonthanan2233@gmail.com");
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

const button = document.getElementById("btn-gmail")
button.addEventListener('click', CopyToClipboard)