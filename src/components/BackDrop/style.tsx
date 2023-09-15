import { StyleSheet, Dimensions } from 'react-native';
import { defaultTheme } from '../../theme/default';
const screenHeight = Dimensions.get('window').height;

export const backdropStyle = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 24,
        paddingLeft: 32,
        paddingRight: 32,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        height: screenHeight / 2,
    },
    section: {
        flexDirection: 'row',
        paddingTop: 24,
    },
    sectionTitle: {
        fontSize: 15,
    },
    pickerStyle: {
        color: '#ff0000',
        paddingTop: 60,
    },
});