import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../theme/default';

export const homeList = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
        height: 80
    },
    boxTitle: {
        marginLeft: 10
    },
    title: {
        fontSize: 16
    },
    subtitle: {
        fontSize: 12
    },
    boxText: {
        display:'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valueText : {
        fontSize: 16,
        color: defaultTheme.colors.green,
        fontWeight: 'bold'
    },
    listIcon: {
        padding: 8,
        borderRadius: 100,
        color: defaultTheme.colors.white,
        display: 'flex',
        alignItems: 'center'
    },
    calcArea: {
        display: 'flex',
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginTop: 24,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: defaultTheme.colors.mediumGrey
    },
    titleCalc1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: defaultTheme.colors.green
    },
    titleCalc2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: defaultTheme.colors.red
    },
    titleCalc3: {
        fontSize: 18,
        fontWeight: 'bold',
        color: defaultTheme.colors.blue
    },
    subtitleCalc : {
        fontSize: 12
    },
    box: {
        display: 'flex',
        alignItems: 'center',
    },
    spacer: {
        paddingHorizontal: 8
    }
});