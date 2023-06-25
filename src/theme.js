const common = {
  breakpoints: {
    smallMobileMax: 600,
    mobileMax: 767,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const themeDark = {
  ...common,
};

export const mobileMax = ({ theme }) => theme.breakpoints.mobileMax;
export const smallMobileMax = ({ theme }) => theme.breakpoints.smallMobileMax;
