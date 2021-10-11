export const createColors = (key, hue, sat, light) => {
  [...new Array(10)]
    .map((_, i) => i * 10)
    .reduce(
      (a, b) => ({
        ...a,
        [`${key}${b === 0 ? "" : "_light_" + b}`]: `hsl(${hue}, ${sat}%, ${
          b === 0 ? light : (b * (100 - light)) / 100 + light
        }%)`,
        [`${key}${b === 0 ? "" : "_dark_" + b}`]: `hsl(${hue}, ${sat}%, ${
          b === 0 ? light : light - (b * (100 - light)) / 100
        }%)`,
      }),
      {}
    );
};
