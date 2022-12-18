export const generateColor = () => {
  const color =
    "#" +
    Math.floor(Math.random() * (0xffffff + 1))
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();

  return color;
};

export const shuffleCards = (arr) => {
  if (arr) {
    return arr
      .sort(() => Math.random() - 0.5)
      .map((color) => ({
        ...color,
      }));
  }
};
