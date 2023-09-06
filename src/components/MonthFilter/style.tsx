import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../theme/default';

export const montFilter = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    selected: {
        backgroundColor: defaultTheme.colors.mediumGrey,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: 120,
        display: 'flex',
        alignItems: 'center',
    },
    textMonth: {
        fontWeight: 'bold'
    },
    textMonthUnselected: {
        color: defaultTheme.colors.greyStrong
    },
    noSelected: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: 120,
        display: 'flex',
        alignItems: 'center'
    },
    teste: {
        display: 'flex',
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
        alignContent: 'space-between'
    }
});