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
    icon: {
        width: 48,
        height: 48,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTitle: {
        marginLeft: 10
    },
    title: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold'
    },
    subtitle: {
        fontSize: 12,
        fontFamily: 'Roboto_400Regular'
    },
    boxText: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Roboto_400Regular'
    },
    valueText: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        color: defaultTheme.colors.green,
        fontWeight: 'bold'
    },
    listIcon: {
        color: defaultTheme.colors.white,
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
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        color: defaultTheme.colors.green
    },
    titleCalc2: {
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        color: defaultTheme.colors.red
    },
    titleCalc3: {
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        color: defaultTheme.colors.blue
    },
    subtitleCalc: {
        fontSize: 12
    },
    box: {
        display: 'flex',
        alignItems: 'center',
    },
    spacer: {
        paddingHorizontal: 8
    },
    textTitle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        fontFamily: 'Roboto_400Regular',
        borderColor: defaultTheme.colors.mediumGrey
    }
});