let textarea = document.getElementById('textarea')
let count = document.getElementById('count')
let alertMsg = document.getElementById('alerts')

textarea.addEventListener('input',function(){
    let len = textarea.value.length
     
    count.textContent = 'Count'+len + '/200'

    if(len >= 200){
        alertMsg.style.display = 'block'
        textarea.style.borderColor = 'red'
        count.style.color = 'red'
    }
    else{
          alertMsg.style.display = ''
        textarea.style.borderColor = ''
        count.style.color = ''
    }
})