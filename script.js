let tl = gsap.timeline()

tl.to(".full" , {
    right:0,
    duration:0.5
})
tl.from(".full h4" , {
    x:400,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
tl.from(".full i" ,{
    opacity:0
})

tl.pause()


let menu = document.querySelector("#menu")
let cross = document.querySelector("#cross")

menu.addEventListener("click" , function(){
    tl.play()
})
cross.addEventListener("click" , function(){
    tl.reverse()
})