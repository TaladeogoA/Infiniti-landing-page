gsap
  .timeline()

  .from(".left-container", { duration: 2, width: 0, ease: "Expo.easeInOut" })
  .from(".right-container", {
    opacity: 0,
    width: 0,
    ease: "Expo.easeInOut",
  })
  .from(".center-container", {
    opacity: 0,
    width: 0,
    duration: 2,
    ease: "Expo.easeInOut",
  })
  .from(".logo", {
    y: 20,
    opacity: 0,
    ease: "Expo.easeInOut",
  })

  .from(
    ".story-container",
    {
      y: 20,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "<"
  )
  .from(
    ".menu-container",
    {
      y: 20,
      opacity: 0,
      rotation: 90,
      ease: "Expo.easeInOut",
    },
    "<"
  )
  .from(".info", {
    y: 50,
    opacity: 0,
    ease: "Expo.easeInOut",
  })
  .from(
    ".social-container",
    {
      y: 50,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "<"
  );
