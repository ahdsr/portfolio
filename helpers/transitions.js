export const fade = {
  hidden: { opacity: 0, y: -20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,

      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.4,
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    },
  },
};
