let tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".cardScetion",
        pin: true,
        scrub: 4 
    },
    onComplete : ()=>{
        timeline.paused()
        console.log('Time Line PAused');
        
    }
    
})

tl1.to(".card1",{
    x : 300,
    rotate: '-35deg',
    y: 100,
    duration: 2,
    
},'a')
tl1.to(".card2",{
    x : 100,
    rotate: '-20deg',
    y: 40,
    duration: 2,
},'a')
tl1.to(".card4",{
    x : -100,
    rotate: '20deg',
    y: 40,
    duration: 2
},'a')
tl1.to(".card5",{
    x : -300,
    rotate: '35deg',
    y: 100,
    duration: 2
},'a')


// Cards Second Animation
tl1.to(".card1",{
    x : 545,
    rotate: '0deg',
    y: -25,
    duration: 2
},'b')
tl1.to(".card2",{
    x : 275,
    rotate: '0deg',
    y: -15,
    duration: 2
},'b')
tl1.to(".card4",{
    x : -270,
    rotate: '0deg',
    y: 15,
    duration: 2
},'b')
tl1.to(".card5",{
    x : -543,
    rotate: '0deg',
    y: 35,
    duration: 2
},'b')





// mobile_screen Animation

gsap.matchMedia().add("(max-width: 344px)", () => {
    tl1.to(".mobile_screen", { y: -655,  duration: 2 },'c');
});

gsap.matchMedia().add("(min-width: 345px) and (max-width: 360px)", () => {
    tl1.to(".mobile_screen", { y: -595,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 361px) and (max-width: 375px)", () => {
    tl1.to(".mobile_screen", { y: -550,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 376px) and (max-width: 390px)", () => {
    tl1.to(".mobile_screen", { y: -630,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 391px) and (max-width: 412px)", () => {
    tl1.to(".mobile_screen", { y: -680,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 413px) and (max-width: 414px)", () => {
    tl1.to(".mobile_screen", { y: -660,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 415px) and (max-width: 430px)", () => {
    tl1.to(".mobile_screen", { y: -690,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 431px) and (max-width: 540px)", () => {
    tl1.to(".mobile_screen", { y: -570,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 541px) and (max-width: 768px)", () => {
    tl1.to(".mobile_screen", { y: -720,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 769px) and (max-width: 820px)", () => {
    tl1.to(".mobile_screen", { y: -800,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 821px) and (max-width: 853px)", () => {
    tl1.to(".mobile_screen", { y: -850,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 854px) and (max-width: 1024px)", () => {
    tl1.to(".mobile_screen", { y: -900,  duration: 2 },'c');
});
gsap.matchMedia().add("(min-width: 1025px)", () => {
    tl1.to(".mobile_screen", { y: -530,  duration: 2 },'c');
});
// gsap.matchMedia().add("(min-width: 376px) and (max-width: 639px)", () => {
//     tl1.to(".mobile_screen", { y: -670,  duration: 2 },'c');
// });
// gsap.matchMedia().add("(min-width: 640px) and (max-width: 768px)", () => {
//     tl1.to(".mobile_screen", { y: -720,  duration: 2 },'c');
// });
// gsap.matchMedia().add("(min-width: 769px) and (max-width: 1024px)", () => {
//     tl1.to(".mobile_screen", { y: -900,  duration: 2 },'c');
// });
// gsap.matchMedia().add("(min-width: 1025px) and (max-width: 1440px)", () => {
//     tl1.to(".mobile_screen", { y : -543,  duration: 2 }, "c");
// });
// tl1.to(".mobile_screen",{
//     y : -543,
// },'c')
tl1.to(".card5",{
    y: -15,
    duration: 2
},'c')
tl1.to(".card1",{
    y: 0,
    duration: 2
},'c')
tl1.to(".card2",{
    y: 0,
    duration: 2
},'c')
tl1.to(".card3",{
    y: 0,
    duration: 2
},'c')
tl1.to(".card4",{
    y: 0,
    duration: 2
},'c')

// Scroll hidden Image


tl1.to(".cardImage",{
    visibility: "visible",
    duration: 10,
    y: -1600
},'d')



// Text Animation

tl1.to(".bg_text",{
    x:-2650,
    duration: 10,
     scrub: 5
},'d')

// Flip Cards
// Select all the flip cards
const cards = document.querySelectorAll('.flip-card-inner');


// GSAP timeline for each card

  const timeline = gsap.timeline({ paused: false, repeat: -1, yoyo: true});

    timeline.to(cards[0], {
        duration: 2,
          rotateY: 180,
        //   onStart: () => console.log(`Card ${currentIndex} flipping!`),
        //   onReverseComplete: () => console.log(`Card ${currentIndex} flipped back!`)
    })
    timeline.to(cards[0], {
        duration: 2,
        delay: 2,
          rotateY: 0,
    },"a")
    timeline.to(cards[1], {
        duration: 2,
        delay: 2,
          rotateY: 180,
    },'a')
    timeline.to(cards[1], {
        duration: 2,
        delay: 2,
          rotateY: 0,
    },"b")
    timeline.to(cards[2], {
        duration: 2,
        delay: 2,
          rotateY: 180,
    },'b')
    timeline.to(cards[2], {
        duration: 2,
        delay: 2,
          rotateY: 0,
    },'c')
    timeline.to(cards[3], {
        duration: 2,
        delay: 2,
          rotateY: 180,
    },'c')
    timeline.to(cards[3], {
        duration: 2,
        delay: 2,
          rotateY: 0,
    },'d')
    timeline.to(cards[4], {
        duration: 2,
        delay: 2,
          rotateY: 180,
    },'d')
    timeline.to(cards[4], {
        duration: 2,
        delay: 2,
          rotateY: 0,
          
    })
  
  

//   duration: 2,
//   rotateY: 180,
//   ease: 'power2.inOut',
//   onStart: () => console.log(`Card ${currentIndex} flipping!`),
//   onReverseComplete: () => console.log(`Card ${currentIndex} flipped back!`)

  // Flip on click
//   card.parentElement.addEventListener('click', () => {
//     if (timeline.reversed() || timeline.progress() === 0) {
//       timeline.play();
//     } else {
//       timeline.reverse();
//     }
//   });
