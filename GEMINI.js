let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0   ){
      document.querySelector('.contact').classList.add('top');
    }else{
      document.querySelector('.contact').classList.remove('top');
    }
}  

function loader(){
  document.querySelector('.load').classList.add('vanish');
}

function vanish(){
  setTimeout(loader, 3000);
}

window.onload = vanish();