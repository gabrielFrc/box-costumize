const colorList = ['red', 'blue', 'yellow', 'green']

const input = document.querySelector('input');
const box = document.querySelector('div.box');

input.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        costumize();
    }
})

function costumize(){
    colorList.map(x => {
        if(input.value.toLowerCase() == x){
            box.style.backgroundColor = input.value.toLowerCase()

            console.log(x)
            return
        }
    })

    if(input.value.includes('px')){
        box.style.borderRadius = input.value
        return
    }

    box.style.backgroundImage = "url("+input.value+")"
}