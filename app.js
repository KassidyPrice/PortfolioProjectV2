let modal = document.getElementById('myModal')
let span = document.getElementsByClassName('close')[0]

function openDialog(title, button) {
  button.addEventListener('click', () => {
    modal.style.display = 'block'
    const test = document.getElementById('modal-title')
    test.innerHTML = title
  })
}
