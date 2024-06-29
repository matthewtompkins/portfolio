const textColorClasses = {
  green: 'text-green',
  black: 'text-black',
  white: 'text-white',
};

const backgroundColorClasses = {
  green: 'bg-green',
  black: 'bg-black',
  white: 'bg-white',
};

export const getSectionThemeColors = (
  theme: MT.ThemeColors
): {
  bgColor: MT.BackgroundColorClasses;
  textColor: MT.TextColorClasses;
} => {
  const themes: Record<
    MT.ThemeColors,
    {
      bgColor: MT.BackgroundColorClasses;
      textColor: MT.TextColorClasses;
    }
  > = {
    green: {
      bgColor: backgroundColorClasses.green as MT.BackgroundColorClasses,
      textColor: textColorClasses.black as MT.TextColorClasses,
    },
    black: {
      bgColor: backgroundColorClasses.black as MT.BackgroundColorClasses,
      textColor: textColorClasses.green as MT.TextColorClasses,
    },
    white: {
      bgColor: backgroundColorClasses.white as MT.BackgroundColorClasses,
      textColor: textColorClasses.black as MT.TextColorClasses,
    },
  };

  return {
    bgColor: themes[theme].bgColor,
    textColor: themes[theme].textColor,
  };
};
