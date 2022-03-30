export const fade = {
  initial: { opacity: 0, y: -40 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.4,
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    },
  },
};
