import { Text, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },

  big: {
    fontSize: theme.fontSizes.big,
  },

  small: {
    fontSize: theme.fontSizes.small,
  },

  subheading: {
    fontSize: theme.fontSizes.subheading,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },

  primary: {
    color: theme.colors.textPrimary,
  },

  secondary: {
    color: theme.colors.textSecondary,
  },

  center: {
    textAlign: 'center',
  },
});

type StyledTextType = {
  children: string;
  color?: 'primary' | 'secondary';
  size?: 'big' | 'small' | 'subheading';
  weight?: 'bold';
  align?: 'center';
  style?: any;
};

export default function StyledText({
  children, color, size, weight, align, style,
}: StyledTextType) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.primary,
    color === 'secondary' && styles.secondary,
    size === 'big' && styles.big,
    size === 'small' && styles.small,
    size === 'subheading' && styles.subheading,
    weight === 'bold' && styles.bold,
    align === 'center' && styles.center,
    style,
  ];

  return (
    <Text style={textStyles}>{children}</Text>
  );
}
