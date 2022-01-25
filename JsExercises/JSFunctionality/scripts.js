const buttonOpenModal = document.getElementById('openModal')
console.log(buttonOpenModal)
const modalWrapper = document.querySelector('.modal-wrapper')
console.log(modalWrapper)

buttonOpenModal.onclick = function() {
    //modalWrapper.classList.remove('invisible')
    console.log(modalWrapper.classList.contains('invisible'))
    if(modalWrapper.classList.contains('invisible')){
        modalWrapper.classList.remove('invisible')
    }
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    
    if(!modalWrapper.classList.contains('invisible')){
        if(isEscKey){
            modalWrapper.classList.add('invisible')
        }
    }
})