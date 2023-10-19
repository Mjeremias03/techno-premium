export const fadeIn = (duration, delay) => {
  const transition = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration, ease: 'easeOut', delay } }
  };
  return transition;
};

export const fadeInFromLeft = (duration, delay) => {
  const transition = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration, ease: 'easeOut', delay } }
  };
  return transition;
};

