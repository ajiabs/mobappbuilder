import {Platform} from 'react-native';
const isAndroid = Platform.OS === 'android' ? true : false;
export const Font = {
  Regular: 'Montserrat-Regular',
  Bold: 'Montserrat-Bold',
  ExtraBold: 'Montserrat-ExtraBold',
  Medium: 'Montserrat-Medium',
  SemiBold: 'Montserrat-SemiBold',
  Black: 'Montserrat-Black',
};

export const FontSizee = {
  TextInput: 16,
  LabelSmall: 14,
  Button: 18,
  ErrorLabel: 12,
  AlertTitle: 18,
  AlertDescription: 16,
  Smallest: 8,
  Small: 10,
  Average: 12,
  Normal: 14,
  Medium: 15,
  Large: 16,
  VeryLarge: 18,
  Largest: 20,
  Largest2: 25,
  Largest3: 28,
  Largest4: 22,
};

export const FontSize = {
  Normal: isAndroid ? 14 : 16,
  Average: isAndroid ? 12 : 14,
  VeryLarge: isAndroid ? 18 : 20,
  Smallest: isAndroid ? 10 : 10,
  Small: isAndroid ? 13 : 15,
  Large: isAndroid ? 20 : 22,
  _21: isAndroid ? 21 : 23,
  _22: isAndroid ? 22 : 24,
  _23: isAndroid ? 23 : 25,
  Largest: isAndroid ? 26 : 26,
  LargeMedium: isAndroid ? 25 : 25,
  Medium: isAndroid ? 15 : 17,
  MediumLarge: isAndroid ? 17 : 19,
  MediumSmall: isAndroid ? 16 : 18,
};
