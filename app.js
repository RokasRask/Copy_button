
const button = document.querySelector('.btn')
const input = document.querySelector('input')

button.addEventListener('click', (e)=> {
    e.preventDefault();

    navigator.clipboard.writeText(input.value).then(() => {
        button.innerText = 'Copied';

        setTimeout(()=> {
            button.innerText = 'Copy';
        }, 3000)
    })
})