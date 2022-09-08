
//-----> for mobile navbar 
let sidemenu = document.getElementById("sideMenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-60%";
}

// ------> to show the navbar and change its color on scroll 
const nav =document.querySelector("nav");

 window.addEventListener('scroll',()=>{
    if(window.scrollY >=50){
        nav.classList.add("active-nav");
    }else{
        nav.classList.remove("active-nav");
    }
 })


//---> to show the skills, education and experince blocks
let tablinks= document.getElementsByClassName("tab-links");

let tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -----> active the navbar list section on scroll of page  
const sections = document.querySelectorAll("section");
const navlink= document.querySelectorAll("nav ul li a")

window.addEventListener("scroll",()=>{
   let curr ="";

    sections.forEach(section =>{
       let section_top= section.offsetTop;
       let section_height= section.clientHeight;
   
    if(scrollY+5 >= (section_top - section_height /3) ){
    curr = section.getAttribute('id');
    }
    // console.log(curr);
})
    
navlink.forEach((e) =>{
    e.classList.remove('active-page');
    if(e.classList.contains(curr)){
      e.classList.add("active-page");
    }
})

})



