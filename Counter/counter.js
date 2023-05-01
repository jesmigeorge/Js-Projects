const counter = document.getElementsByClassName('counter')[0]
const plus = document.getElementById('add-btn')
const sub = document.getElementById('sub-btn')

function increement(){
    counter.innerHTML = parseInt(counter.innerHTML)+1
}

function decreement(){
    counter.innerHTML = parseInt(counter.innerHTML)-1
}


// plus.addEventListener('click',increement())
// sub.addEventListener('click',decreement())
//this is used when onclick attribute is not used in <button> tag.

function increement(){
    counter.innerHTML = parseInt(counter.innerHTML)+1
}

function decreement(){
    counter.innerHTML = parseInt(counter.innerHTML)-1
}
