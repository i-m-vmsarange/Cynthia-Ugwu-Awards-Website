const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
    document.querySelector(
      "#cursorcircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}
circleMouseFollower();
