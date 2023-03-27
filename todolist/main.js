let sunMode = document.querySelector('.sunModeBtn');
let darkMode = document.querySelector('.darkModeBtn')
let view = document.querySelector('.content');
let scrollQ = document.querySelector('.scrollQ');
darkMode.addEventListener('click', function(){
    document.querySelector('body').classList.add('darkmode');
})
sunMode.addEventListener('click', function(){
    document.querySelector('body').classList.remove('darkmode');
})


window.addEventListener('scroll',function(){
    if(window.scrollY > 10){
    view.style.display= 'block';
    scrollQ.style.display ='none'
    }else{
        view.style.display= 'none';
        scrollQ.style.display ='block';
    }

})