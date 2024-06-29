
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
  bgColor: string;
  textColor: string;
} => {
  const themes: Record<
    MT.ThemeColors,
    {
      bgColor: string;
      textColor: string;
    }
  > = {
    green: {
      bgColor: backgroundColorClasses.green,
      textColor: textColorClasses.black,
    },
    black: {
      bgColor: backgroundColorClasses.black,
      textColor: textColorClasses.green,
    },
    white: {
      bgColor: backgroundColorClasses.white,
      textColor: textColorClasses.black,
    },
  };

  return {
    bgColor: themes[theme].bgColor,
    textColor: themes[theme].textColor,
  };
};
