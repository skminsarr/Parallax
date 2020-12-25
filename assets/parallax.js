window.addEventListener('resize', function(){
    addRequiredClass();
})

function addRequiredClass(){
    if(window.innerWidth < 860){
        document.body.classList.add('mobile');
    }
    else{
        document.body.classList.remove('mobile');
    }

}
window.onload = addRequiredClass;

let humburger= document.querySelector('.humburger');
let mobilenav= document.querySelector('.nav-list');
let bars= document.querySelectorAll('.humburger span');

let isActive = false;

humburger.addEventListener('click', function(){
    mobilenav.classList.toggle('open');
    if(!isActive){
    bars[0].style.transform = 'rotate(45deg)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg)';
    isActive=true;
}
else{
    bars[0].style.transform = 'rotate(0deg)';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'rotate(0deg)';
    isActive=false;

}

})



//parallax

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.5 + 'px';
    text.style.top = value * 1 + 'px';
})


//registration form

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//addding a style
// function myfunction() {
//     var element = document.getElementById("nizam");
//     element.style.opacity= "0";
    
// }

// adding a class 
var a=1;
var element= document.getElementById("nizam");

function myfunction(){
    
    
    // element.classList.remove("nizam");
    // document.querySelector('div').removeAttribute('nizam');
    if(a==1){
    element.classList.add("mystyle");
    return a=0;

}
else {
    element.classList.remove("mystyle");
    return a=1;
}
}