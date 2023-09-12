import { StyleSheet, Dimensions } from 'react-native';
import { defaultTheme } from '../../theme/default';
const screenHeight = Dimensions.get('window').height;

export const home = StyleSheet.create({
    topInformations: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: defaultTheme.colors.green,
        borderBottomColor: defaultTheme.colors.green,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 12,
        paddingTop: 40,
        paddingBottom: 8
    },
    text: {
        paddingHorizontal: 16,
        color: defaultTheme.colors.green,
        fontWeight: '600',
        fontSize: 24
    },
});