export const getSectionThemeColors = (
  theme: MT.ThemeColors
): {
  bgColor: MT.BackgroundColorClasses;
  textColor: MT.TextColorClasses;
} => {
  const themes: Record<MT.ThemeColors, { bgColor: MT.BackgroundColorClasses; textColor: MT.TextColorClasses }> = {
    green: {
      bgColor: MT.BackgroundColorClasses.green,
      textColor: MT.TextColorClasses.black,
    },
    black: {
      bgColor: MT.BackgroundColorClasses.black,
      textColor: MT.TextColorClasses.green,
    },
    white: {
      bgColor: MT.BackgroundColorClasses.white,
      textColor: MT.TextColorClasses.black,
    },
  };

  return {
    bgColor: themes[theme].bgColor,
    textColor: themes[theme].textColor,
  };
};
