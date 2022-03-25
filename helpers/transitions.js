export const fade = {
  initial: { opacity: 1, y: -20 },
  enter: {
    delay: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      cubicBezier: [0.37, 0, 0.63, 1],
    },
  },
  exit: {
    opacity: 0,
    delay: 1,
    transition: {
      duration: 0.4,
      cubicBezier: [0.37, 0, 0.63, 1],
    },
  },
};
