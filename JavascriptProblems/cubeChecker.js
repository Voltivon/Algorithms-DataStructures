var cubeChecker = function (volume, side) {
  const sidesToVolume = side * side * side;

  if (volume <= 0) {
    return false;
  }

  if (sidesToVolume == volume) {
    return true;
  }

  return false;
};
