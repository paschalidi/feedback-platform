export const hexToRGBA = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const colors = {
  primary: "#AB61E5",
  secondary: "#ACB1B6",
  active: "#4F0589",
  textPrimary: "#031323",
  divider: "#D9DCDE",
  blackPearl: "#59636e",
  primaryDim: "#FBF7FE",

  destructive: "#E63644",
  affirmative: "#189F59",
  warning: "#D97508",
  white: "#FFFFFF",
  destructiveDim: "#FFE1E1",
  affirmativeDim: "#E8F5E5",
  warningDim: "#FFF6D1",
  textInactive: "#BFBFBF",
  background: "#F2F3F4"
};

export default colors;
