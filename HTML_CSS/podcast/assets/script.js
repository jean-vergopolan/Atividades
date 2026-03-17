document.addEventListener("mousemove", function(event) {
    const bg = document.querySelector(".paralax");
    const mouseX = event.clientX; 
    const mouseY = event.clientY;
    const windowwidth = window.innerWidth;
    const windowheight = window.innerHeight;

    const moveX = (windowwidth / 2 - mouseX) / 40;
    const moveY = (windowheight / 2 - mouseY) / 40;

    bg.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
});