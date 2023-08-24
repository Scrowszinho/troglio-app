import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../theme/default';

export const addButton = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon : {
      backgroundColor: defaultTheme.colors.green,
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 4
    }
  });