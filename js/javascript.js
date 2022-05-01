function MenuAparecer(){
    document.querySelector('main').style.display = "none";
    document.querySelector('.menu-mobile').style.display = 'block';
    document.querySelector('.menu-open').style.display="none";
    document.querySelector('.menu-close').style.display="block";
}
function MenuDesaparecer(){
    document.querySelector('main').style.display = 'block';
    document.querySelector('.menu-mobile').style.display = 'none';
    document.querySelector('.menu-open').style.display='block';
    document.querySelector('.menu-close').style.display = 'none';
    
}