
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterContainer = document.getElementById("letterContainer");

openLetter.addEventListener("click", () => {
    letterContainer.classList.remove("hidden");
    createFloatingHearts();
});

closeLetter.addEventListener("click", () => {
    letterContainer.classList.add("hidden");
});

function createFloatingHearts(){

    for(let i = 0; i < 30; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "fly 4s linear forwards";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes fly{
    from{
        transform:translateY(0);
        opacity:1;
    }

    to{
        transform:translateY(-120vh);
        opacity:0;
    }
}
`;

document.head.appendChild(style);
