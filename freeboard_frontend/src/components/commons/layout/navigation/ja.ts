'use strict';


onst wrapper = document.querySelector('#wrapper');
const navber_height = wrapper.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY >navber_height/2 ){
        navber.classList.add('navber--dark');
    }else{
        navber.classList.remove('navber--dark');
    }
})

function onScroll (){


}