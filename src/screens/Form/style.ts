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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  typeChosen: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  grid: {
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
    height: 128,
  },
  showerText: {
    color: defaultTheme.colors.greenHigh,
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  text: {
    fontSize: 32,
    color: defaultTheme.colors.greenHigh,
    fontWeight: 'bold',
  },
  selectType: {
    display: 'flex',
    marginTop: 40
  },
  viewIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    height: 100
  },
  typeSelect: {
    borderRadius: 50,
    padding: 16
  },
  typeIcon: {
    width: 64,
    height: 64,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    padding: 8,
    borderWidth: 3,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: defaultTheme.colors.green
  },
  unselected: {
  },
  buttonArea: {
    flex: 1,
    paddingHorizontal: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24
  }
});
