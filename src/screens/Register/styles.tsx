import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../theme/default';

export const registerStyles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultTheme.textInputColor.background,
        borderWidth: .8,
        borderRadius: 8,
        marginVertical: 8,
        height: 64
    },
    textInputStyle: {
        flex: 1,
        height: 54,
        backgroundColor: defaultTheme.textInputColor.background,
        paddingBottom: 0,
    },
    icon: {
        paddingHorizontal: 8,
        margin: 8
    },
    section: {
        marginVertical: 16,
        marginHorizontal: 24,
    },

    loginButtonStyle: {
        color: defaultTheme.colors.green,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    buttonSection: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    attentionText: {
        marginVertical: 8,
        fontWeight: 'bold',
    },

    registerButtonSection: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    registerButtonStyle: {
        backgroundColor: defaultTheme.colors.green,
        padding: 8,
        borderRadius: 24,
    },
    registerButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});