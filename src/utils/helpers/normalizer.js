export const normalizeLocation = (str) => {
  const locationArr = str.split(" ");
  const reversedArr = [locationArr[1], locationArr[0]];
  const reversedString = reversedArr.join(", ");
  return reversedString.slice(0, -1);
};

