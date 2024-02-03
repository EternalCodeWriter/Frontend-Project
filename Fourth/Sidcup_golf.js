var crsr =  document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-15+"px"
    crsr.style.top = dets.y-15+"px" 
    blur.style.left = dets.x-140+"px"
    blur.style.top = dets.y-140+"px"
})
 var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3.5
        crsr.style.border = "0.5px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #b3e824"
        crsr.style.backgroundColor = "#b3e824"
    })
})

/* gsap.to(".nav",{
 backgroundColor:"black",
 duration:0.5,
 height:"6.4vw",
 scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    start:"top -10% ",
    end:"top -11%",
    scrub:1
 }
}) */

gsap.to(".nav",{
    backgroundColor: "#000",
    height: "5.9vw",
    delay: 0.5,
    scrollTrigger:{
        trigger: ".nav",
        scroller: "body",
      /*   markers: true, */
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        /* markers: true, */
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})
/* gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
}) */
gsap.from(".about img,.about-info,.about>.img1",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
       /*  markers:true, */
        start:"top 59%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        /* markers:true, */
        start:"top 65%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from(".up",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:".up",
        scroller:"body",
        /* markers:true, */
        start:"top 60%",
        end:"top 40%",
        scrub:1
    }
})
gsap.from(".down",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".up",
        scroller:"body",
      /*   markers:true, */
        start:"top 60%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
      /*   markers:true, */
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})