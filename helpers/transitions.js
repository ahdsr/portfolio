export const fade = {
  initial: { opacity: 0, y: -20 },
  enter: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.3,

      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    },
  },
};
