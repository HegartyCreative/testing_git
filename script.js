


const timeline = gsap.timeline({})
 

timeline

.fromTo("#logo", {
    x: 850, 
    y: 600,
    opacity: 0
}, 
{
    x: 100,
    y: 50, 
    duration: 10,
    ease: 'elastic',
    opacity: 1
}

)

