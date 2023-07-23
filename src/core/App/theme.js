export const turmeric = () => themeDark.colors.primary;

const colors = {
  white: "#ffffff",
  black: "#000000",
  turmeric: "#cbaf44",
  heavyMetal: "#232423",
};

const common = {
  breakpoints: {
    smallMobileMax: 600,
    mobileMax: 768,
    tabletMax: 1200,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const themeDark = {
  ...common,
  colors: {
    primary: colors.turmeric,
    site: {
      background: colors.white,
      text: colors.black,
    },
  },
};

export const themeLight = {
  ...common,
  colors: {
    primary: "nana",
    site: {
      background: colors.white,
      text: colors.black,
    },
  },
};

export const tabletMax = ({ theme }) => theme.breakpoints.tabletMax;
export const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;
export const smallMobileMax = ({ theme }) => theme.breakpoints.smallMobileMax;
