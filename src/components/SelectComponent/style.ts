import { StyleSheet, Dimensions } from 'react-native';
import { defaultTheme } from '../../theme/default';

export const selectDefault = StyleSheet.create({
    select: {
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: defaultTheme.colors.inputBackgroundColor,
        borderRadius: 10
    },
});