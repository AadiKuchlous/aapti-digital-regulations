
const max = (a, b) => {
  return a > b ? a : b;
};

const min = (a, b) => {
  return a < b ? a : b;
}

const calculateRelativeValue = (relative, parentValue) => {
  return relative * parentValue;
}

const calculateCoordFromRelative = (relativeCoord, parentCoord, parentSize) => {
  return parentCoord + calculateRelativeValue(relativeCoord, parentSize);
}

export { max, min, calculateCoordFromRelative, calculateRelativeValue };