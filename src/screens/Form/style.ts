import { StyleSheet, Dimensions } from 'react-native';
import { defaultTheme } from '../../theme/default';

export const formStyle = StyleSheet.create({
    back: {
        flex: 1,
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 56,
    },
    typeChosen: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    grid: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    shower: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 24,
        backgroundColor: '#6AE8B7',
        width: 296,
        height: 128
    },
    showerText: {
        color: '#413E52',
        fontSize: 32,
        fontWeight: 'bold'
    },
    button: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    text: {
        fontSize: 32,
        color: '#413E52',
        fontWeight: 'bold'
    }
});