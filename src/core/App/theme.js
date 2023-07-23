export const turmeric = () => themeDark.colors.primary;

const colors = {
  white: "#ffffff",
  black: "#000000",
  silver: "#ccc",
  silverSolid: "#c0c0c0",
  silverChalice: "#afafaf",
  nobel: "#bbb8b8",
  lunarGreen: "#334433",
  turmeric: "#cbaf44",
  heavyMetal: "#232423",
  greenPea: "#1d5329",
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
    value: colors.turmeric,
    date: colors.silverSolid,
    site: {
      background: colors.lunarGreen,
      text: colors.white,
    },
    bigBox: {
      background: colors.heavyMetal,
      subTitle: colors.turmeric,
    },
    smallBox: {
      background: colors.lunarGreen,
      text: colors.turmeric,
    },
  },
};

export const themeLight = {
  ...common,
  colors: {
    primary: "nana",
    value: colors.greenPea,
    date: colors.greenPea,
    site: {
      background: colors.silver,
      text: colors.black,
    },
    bigBox: {
      background: colors.silverChalice,
      subTitle: colors.black,
    },
    smallBox: {
      background: colors.nobel,
      text: colors.black,
    },
  },
};

export const tabletMax = ({ theme }) => theme.breakpoints.tabletMax;
export const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;
export const smallMobileMax = ({ theme }) => theme.breakpoints.smallMobileMax;
