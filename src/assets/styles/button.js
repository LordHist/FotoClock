import {StyleSheet} from 'react-native';

export const stylesButton = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionTouchLogin: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 26.5,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '40%',
    textAlign: 'center',
    alignItems: 'center',
    borderColor: 'rgba(112, 112, 112, 255)',
    backgroundColor: 'rgba(25, 55, 254, 255)',
  },
  buttonText: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    alignItems: 'center',

    paddingStart: 14,
    paddingTop: 11,
    marginStart: 0.5,
    marginTop: 27.5,
    width: 151,
    height: 67,
    borderRadius: 26.5,
    borderWidth: 1,
  },
  sectionText: {
    fontFamily: 'Segoe UI',
    fontWeight: '500',
    fontSize: 20,
    color: 'rgba(255, 254, 254, 255)',
  },
});
