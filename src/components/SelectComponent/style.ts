import { StyleSheet, Dimensions } from 'react-native';
import { defaultTheme } from '../../theme/default';

export const selectDefault = StyleSheet.create({
    select: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultTheme.textInputColor.background,
        borderWidth: .8,
        borderRadius: 8,
        marginVertical: 8,
        height: 64
    },
});