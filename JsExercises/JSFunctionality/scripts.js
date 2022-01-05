const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    
    if(modalWrapper.classList('insivible') == false){
        if(IsEscKey){
            modalWrapper.classList.add('invisible')
        }
    }
})