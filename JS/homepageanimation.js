var tl = gsap.timeline()

tl.from(".hungrybird,.hungrybirdtxt,.searchbar,.searchlogo,.lginout,.usern",
{
    y:-100,
    duration:0.9,
    opacity:0,
    stagger:0.3,
})

tl.from(".backgroundimg,.deliverylogo,.deliverytext,.dineoutlogo,.deliverytext",{
    x:-50,
    duration:0.6,
    opacity:0,
    stagger:0.2,
})

tl.from(".Inspiration,.Pizzaimage,.Pizzatext,.Biryaniimage,.Biryanitext,.Burgerimage,.Burgertext,.rollsimage,.rollstext,.Chickenimage,.Chickentext",{
    x:-50,
    duration:0.5,
    opacity:0,

})



