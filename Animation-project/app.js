gsap.from("#img", {
    y: -400,
    duration: 1,
    delay: 0.8,
    ease: "back.out(2.3)",
    skewX: 45,
    rotate: -30,
    filter: "blur(15px)",
})

gsap.from("li", {
    y: -400,
    duration: 1,
    opacity: 0,
    delay: 1.4,
    rotate: 180,
    stagger: 0.3,
    ease: "back.out(1.6)",
    scale: 0
});


gsap.from("button", {
    y: -400,
    duration: 1,
    delay: 3,
    scale: 0,
    ease: "back.out(1.5)",
    opacity: 0,
    rotate: -25
})

gsap.from("h1", {
    x: -1400,
    scale: 0,
    duration: 1,
    delay: 3.8,
    rotate: 10,
    opacity: 0,
    ease: "back.out(1.4)"
})
