const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });

  tl.to(".boundingelem", {
    y: 0,
    ease: Expo.easeInOut,
    // delay: -1.5,
    duration: 2,
  });

  tl.from("#herofooter", {
    y: -10,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: -1,
    duration: 1.5,
  });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
    document.querySelector(
      "#cursorcircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}
circleMouseFollower();
firstPageAnimation();
