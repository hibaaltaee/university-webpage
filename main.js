let menu = document.getElementById('menu');
let closee = document.getElementById('close');
let nav2 = document.getElementById('nav2');
let about = document.getElementById('about');


closee.onclick = function(){
    nav2.classList.add('hide');
    closee.classList.add('hide');
    menu.classList.remove('hide');
}

menu.onclick = function(){
    nav2.classList.remove('hide');
    menu.classList.add('hide');
    closee.classList.remove('hide');
}


window.onload=nav2.classList.add('hide');


function  courses(){
   window.scroll({
    top:800,
    behavior:"smooth"
   })
}

function sc(){
    window.scroll({
        top:2500,
        behavior:"smooth"
    })
}
function blog(){
    window.scroll({
        top:1500,
        behavior:"smooth"
    })
}

function sc2(){
    window.scroll({
        top:4300,
        behavior:"smooth"
    })
}
function courses2(){
    window.scroll({
        top:700,
        behavior:"smooth"
    })
    
}
function blog2(){
    window.scroll({
        top:2400,
        behavior:"smooth"
    })
}
 
window.onload=window.scroll({
    top:0,
    behavior:"smooth"
})

