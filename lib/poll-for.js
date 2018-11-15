const pollFor = (predicate, callback, interval, max = Infinity) => {
  if (predicate()) {
    callback();
    return () => {};
  }

  let currentDuration = 0;
  const timer = setInterval(() => {
    currentDuration += interval;

    if (predicate()) {
      callback();
      clearInterval(timer);
    } else if (currentDuration >= max) {
      clearInterval(timer);
    }
  }, interval);

  return () => {
    clearInterval(timer);
  };
};

export default pollFor;
