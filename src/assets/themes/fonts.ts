interface IFonts {
  Regular: string;
  Italic: string;
  Medium: string;
  MediumItalic: string;
  SemiBold: string;
  SemiBoldItalic: string;
  Bold: string;
  BoldItalic: string;
}

const FontName: IFonts = {
  Regular: 'FontName-Regular',
  Italic: 'FontName-Italic',
  Medium: 'FontName-Medium',
  MediumItalic: 'FontName-MediumItalic',
  SemiBold: 'FontName-SemiBold',
  SemiBoldItalic: 'FontName-SemiBoldItalic',
  Bold: 'FontName-Bold',
  BoldItalic: 'FontName-BoldItalic',
};

type TFontWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | '400'
  | '500'
  | '600'
  | '700';

type TFontStyle = 'normal' | 'italic';

export function getFonts(
  fontWeight: TFontWeight = '400',
  fontStyle?: TFontStyle,
) {
  const sizeToFontText = {
    regular: 'Regular',
    medium: 'Medium',
    semibold: 'SemiBold',
    bold: 'Bold',
    '400': 'Regular',
    '500': 'Medium',
    '600': 'SemiBold',
    '700': 'Bold',
  };

  const fontStyleToText = {
    normal: '',
    italic: 'Italic',
  };

  return FontName[
    (sizeToFontText[fontWeight] +
      fontStyleToText[fontStyle || 'normal']) as keyof IFonts
  ];
}
