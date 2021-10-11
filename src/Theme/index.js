import { createColors } from "../utils/index";
export const style = {
  shared: {
    colors: {
      white: "#FFFFFF",
      ...createColors("black", 0, 0, 50),
      ...createColors("error", 1, 80, 50),
      ...createColors("warning", 55, 75, 50),
      ...createColors("success", 124, 74, 50),
      ...createColors("info", 195, 64, 50),
    },
    sizes: {
        button: {
            sm: "5px 9px",
            md: "9px 15px",
            lg: "14px 24px",
        }
    }
  },
  themes: {
    main: {
      colors: {
        primary: "#084c61",
        secondary: "#177E89",
        third: "#E3E7D3",
        links:"#AA6DA3",
      },
    },
    dark: {
      colors: {
        primary: "#11001C",
        secondary: "#35012C",
        third: "#4F0147",
        links: "#FCBA04"
      },
    },
  },
};
