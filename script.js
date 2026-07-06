// const btn=document.getElementById("btn");

// const message=document.querySelector(".message");

// const gallery=document.querySelector(".gallery");

// btn.onclick=function(){

// message.style.display="block";

// gallery.style.display="grid";

// btn.innerHTML="🎉 Happy Birthday 🎉";

// }
// const btn=document.getElementById("openBtn");

// const hero=document.querySelector(".hero");

// const letter=document.querySelector(".letter");

// const text=document.getElementById("typing");

// const message=`Happy Birthday to the most wonderful friend ever. 💙

// I hope every dream you have comes true.

// Thank you for always making life brighter.

// May this year be full of happiness, love and success.

// Love you forever. 🤍`;

// btn.onclick=function(){

// hero.style.display="none";

// letter.classList.remove("hidden");

// typeWriter();

// }

// let i=0;

// function typeWriter(){

// if(i<message.length){

// text.innerHTML+=message.charAt(i);

// i++;

// setTimeout(typeWriter,40);

// }

// }
// confetti({

// particleCount:180,

// spread:120,

// origin:{y:0.6}

// });
// function createHeart(){

// const heart=document.createElement("div");

// heart.classList.add("heart");

// heart.innerHTML="💙";

// heart.style.left=Math.random()*100+"vw";

// heart.style.animationDuration=(4+Math.random()*3)+"s";

// document.body.appendChild(heart);

// setTimeout(()=>{

// heart.remove();

// },7000);

// }

// setInterval(createHeart, 600);
// function createBalloon(){

// const balloon=document.createElement("div");

// balloon.classList.add("balloon");

// const balloons=["🎈","🎈","🎈"];

// balloon.innerHTML=balloons[Math.floor(Math.random()*balloons.length)];

// balloon.style.left=Math.random()*100+"vw";

// balloon.style.animationDuration=(6+Math.random()*4)+"s";

// document.body.appendChild(balloon);

// setTimeout(()=>{

// balloon.remove();

// },10000);

// }

// setInterval(createBalloon, 2000);
// const images = document.querySelectorAll(".photos img");
// const popup = document.getElementById("popup");
// const popupImg = document.getElementById("popupImg");
// const close = document.getElementById("close");

// images.forEach(img => {

//     img.onclick = () => {

//         popup.style.display = "flex";
//         popupImg.src = img.src;

//     }

// });

// close.onclick = () => {

//     popup.style.display = "none";

// }

// ================= Elements =================

const openBtn = document.getElementById("openBtn");
const hero = document.querySelector(".hero");
const letter = document.querySelector(".letter");
const typing = document.getElementById("typing");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const gift = document.getElementById("gift");
const giftMessage = document.getElementById("giftMessage");

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const close = document.getElementById("close");


// ================= Message =================

const message = `

Dear Raneem 💙

Happy Birthday to the most amazing friend.

Thank you for always being by my side.

I wish you endless happiness,
success and beautiful memories.

Never stop smiling.

Love You Forever 🤍

`;

let i = 0;


// ================= Open Letter =================

openBtn.onclick = () => {

    hero.style.display = "none";

    letter.classList.remove("hidden");

    typeWriter();

}


// ================= Typing =================

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

    else{

        confetti({

            particleCount:250,

            spread:180,

            origin:{y:0.6}

        });

    }

}


// ================= Music =================

// let playing = false;

// musicBtn.onclick = ()=>{

//     if(!playing){

//         music.play();

//         musicBtn.innerHTML="🔇 Pause Music";

//         playing=true;

//     }

//     else{

//         music.pause();

//         musicBtn.innerHTML="🎵 Play Music";

//         playing=false;

//     }

// }
openBtn.onclick = () => {

    hero.style.display = "none";

    letter.classList.remove("hidden");

    music.play();

    typeWriter();

    confetti({

        particleCount:300,

        spread:180,

        origin:{y:0.6}

    });

}

// window.addEventListener("load", () => {

//     music.play();

//     playing = true;

//     musicBtn.innerHTML = "🔇 Pause Music";

// });
// ================= Popup Gallery =================

const images=document.querySelectorAll(".photos img");

images.forEach(img=>{

    img.onclick=()=>{

        popup.style.display="flex";

        popupImg.src=img.src;

    }

})

close.onclick=()=>{

    popup.style.display="none";

}


// ================= Gift =================

gift.onclick=()=>{

    gift.innerHTML="💙";

    gift.style.transform="scale(1.3) rotate(10deg)";

    giftMessage.style.display="block";

    confetti({

        particleCount:350,

        spread:180

    });

}


// ================= Floating Hearts =================

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="💙";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,700);


// ================= Balloons =================

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.classList.add("balloon");

    balloon.innerHTML="🎈";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.animationDuration=(6+Math.random()*4)+"s";

    document.body.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },10000);

}

setInterval(createBalloon,1800);