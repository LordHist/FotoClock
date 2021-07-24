import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors, fonts} from './../styles';

const timePages = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
    console.log(date);
  };
  return (
    <View style={{padding: 40, flex: 1}}>
      <View style={styles.sectionTime}>
        {!isPickerShow && (
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={showPicker} style={styles.sectionTouch}>
              <Text style={styles.sectionText}>Registrar Horario</Text>
            </TouchableOpacity>
          </View>
        )}
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onChange}
            style={styles.datePicker}
          />
        )}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.sectionTouch}>
            <Text style={styles.sectionText}>Subir Foto</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.noteText}>
          Para registrar el horario es requerido escanear el QR
        </Text>
      </View>
    </View>
  );
};
export default timePages;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionTouch: {
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
    padding: 16,
    borderRadius: 26.5,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 255)',
    backgroundColor: 'rgba(255, 105, 165, 255)',
  },
  sectionText: {
    fontFamily: 'Segoe UI',
    fontSize: 24,
    textAlign: 'center',
    color: 'rgba(255, 254, 254, 255)',
  },
  sectionTime: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 46,
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  noteText: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    textAlign: 'center',
  },
});
