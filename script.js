const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.getElementById("story").scrollIntoView({
        behavior:"smooth"
    });

});




function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration =
    (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(createHeart,800);
function createConfetti(){

    for(let i=0;i<40;i++){

        const confetti = document.createElement("div");

        confetti.innerHTML="❤️";

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-50px";

        confetti.style.fontSize=
        (15+Math.random()*20)+"px";

        confetti.style.zIndex="9999";

        confetti.style.pointerEvents="none";

        confetti.style.transition="4s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.transform=
            `translateY(${window.innerHeight+300}px)
             rotate(720deg)`;

            confetti.style.opacity="0";

        },10);

        setTimeout(()=>{

            confetti.remove();

        },4000);

    }

}


const startDate = new Date("June 16, 2025");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days =
    Math.floor(diff/(1000*60*60*24));

    const hours =
    Math.floor(diff/(1000*60*60))%24;

    const mins =
    Math.floor(diff/(1000*60))%60;

    const secs =
    Math.floor(diff/1000)%60;

    document.getElementById("loveCounter").innerHTML=
    `${days} Days ${hours} Hours ${mins} Minutes ${secs} Seconds`;
}

setInterval(updateCounter,1000);

updateCounter();

document.querySelectorAll(".gallery img")
.forEach(img=>{

    img.addEventListener("click",()=>{

        const lightbox =
        document.createElement("div");

        lightbox.classList.add("lightbox");

        lightbox.innerHTML=
        `<img src="${img.src}">`;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click",()=>{

            lightbox.remove();

        });

    });

});

const text =
"Happy 1 Year Monique ❤️";

const heroTitle =
document.getElementById("heroTitle");

let index = 0;

function typeTitle(){

    if(index < text.length){

        heroTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeTitle,80);

    }

}

heroTitle.innerHTML="";

typeTitle();

const year2 = new Date("June 16, 2027 00:00:00");

function updateYear2() {

    const now = new Date();

    const diff = year2 - now;

    if (diff <= 0) {
        document.getElementById("year2Counter").innerHTML =
        "🎉 Happy 2 Years Baby ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("year2Counter").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

}

setInterval(updateYear2, 1000);

updateYear2();

const floatingHeart =
document.getElementById("floatingHeart");

const secretPopup =
document.getElementById("secretPopup");

const closeSecret =
document.getElementById("closeSecret");

console.log(floatingHeart);
console.log(secretPopup);
console.log(closeSecret);

let x = 100;
let y = 100;

let dx = 2.5;
let dy = 1.8;

function moveHeart(){

    x += dx;
    y += dy;

    if(x <= 0 || x >= window.innerWidth - 60){
        dx *= -1;
    }

    if(y <= 0 || y >= window.innerHeight - 60){
        dy *= -1;
    }

    floatingHeart.style.left = x + "px";
    floatingHeart.style.top = y + "px";

    requestAnimationFrame(moveHeart);
}

moveHeart();

floatingHeart.addEventListener("click",()=>{

    console.log("HEART CLICKED");

    secretPopup.style.display = "flex";

});




closeSecret.addEventListener("click",()=>{

    secretPopup.style.display="none";

});

const loveReasons = [

    "You open up to me ❤️",

    "The way you laugh at the dumbest things ❤️",

    "You care for me and you look after me ❤️",

    "How you always take care of the people around you ❤️",

    "The way you make me feel at home ❤️",

    "How you somehow make every normal day better ❤️",

    "How you always steal my stuff ❤️",

    "How you feed me every chance you get ❤️",

    "How supportive you've been this entire year ❤️",

    "How beautiful you are even when you don't think so ❤️",

    "You feed me with your hands ❤️",

    "You hug and hold me when I see you ❤️",

    "The way you look at me ❤️",

    "You are so comfortable with me that you don't mind being fully seen with nothing ❤️",

    "<p>15. You chose me and you continue to choose me and I love you for That ❤️",

    "How comfortable I am around you ❤️",

    "How you always make me smile ❤️",

    "Not a reason but I LOVE YOU SOOSOS much ❤️"

];

const loveBtn =
document.getElementById("loveBtn");

const loveReason =
document.getElementById("loveReason");

loveBtn.addEventListener("click",()=>{

    const random =
    Math.floor(Math.random()*loveReasons.length);

loveReason.style.opacity = 0;

setTimeout(()=>{

    loveReason.innerHTML =
    loveReasons[random];

    loveReason.style.opacity = 1;

},200);

});

const floatingDog =
document.getElementById("floatingDog");

const dogPopup =
document.getElementById("dogPopup");

const closeDog =
document.getElementById("closeDog");

floatingDog.addEventListener("click",()=>{

    console.log("DOG CLICKED");

    dogPopup.style.display="flex";

});

closeDog.addEventListener("click",()=>{

    dogPopup.style.display="none";

});

const floatingDonut =
document.getElementById("floatingDonut");

const donutPopup =
document.getElementById("donutPopup");

const closeDonut =
document.getElementById("closeDonut");

floatingDonut.addEventListener("click",()=>{

    console.log("DONUT CLICKED");

    donutPopup.style.display="flex";

});

closeDonut.addEventListener("click",()=>{

    donutPopup.style.display="none";

});

let dogAngle = 0;

function moveDog(){

    dogAngle += 0.01;

    const x =
    150 + Math.cos(dogAngle)*100;

    const y =
    150 + Math.sin(dogAngle)*100;

    floatingDog.style.left =
    x + "px";

    floatingDog.style.top =
    y + "px";

    requestAnimationFrame(moveDog);
}

moveDog();


let donutX = 300;
let donutDirection = 1;

function moveDonut(){

    donutX += donutDirection * 2;

    if(
        donutX > window.innerWidth-100
    ){
        donutDirection = -1;
    }

    if(
        donutX < 50
    ){
        donutDirection = 1;
    }

    floatingDonut.style.left =
    donutX + "px";

    requestAnimationFrame(moveDonut);
}

moveDonut();
