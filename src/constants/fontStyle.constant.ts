export const fontStyleUnionList = [
  "mini",
  "xSmall",
  "small",
  "default",
  "large",
  "xLarge",
  "h1",
  "h2",
  "h3",
] as const;
export type FontStyleUnion = (typeof fontStyleUnionList)[number];
export const fontStyles = {
  mini: 10,
  xSmall: 11,
  small: 12,
  default: 14,
  large: 16,
  xLarge: 17,
  h3: 20,
  h2: 24,
  h1: 30,
};
