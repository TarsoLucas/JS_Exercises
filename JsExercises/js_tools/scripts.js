//pega elementos do doc html
//ex;:

document.getElementById('mb') //element
document.getElementsByClassName('hd')//retorna htmlcollection (não faz for.each)
document.getElementsByName('Meu Blug')
document.getElementsByTagName('h1')//htmlcollection
document.getElementsByTagNameNS()

console.log(document.getElementById('mb'))
//...

document.querySelector('.hd')//element
document.querySelectorAll('') //retorna nodelist (faz for.each)

const element = document.getElementById('mb')

element.textContent += "adicionei"
// element.textContent = "substitui"