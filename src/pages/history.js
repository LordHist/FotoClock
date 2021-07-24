import React from 'react';
import {View, Text, StyleSheet, VirtualizedList} from 'react-native';
import {itemHistory} from '../constants';

export default function historyPages() {
  const getItem = (data, index) => {
    const item = data[index];
    return {
      id: item.id,
      date: item.date,
      startTime: item.startTime,
      endTime: item.endTime,
    };
  };
  const getItemCount = data => {
    return data.length;
  };
  const Items = ({data}) => {
    const {id, date, startTime, endTime} = data;
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{date}</Text>
        <Text style={styles.text}>
          Hora de Entrada:
          <Text style={styles.textData}> {startTime}</Text>
        </Text>
        <Text style={styles.text}>
          Hora de Salida:
          <Text style={styles.textData}> {endTime}</Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.containerList}>
      <View>
        <VirtualizedList
          data={itemHistory}
          initialNumToRender={4}
          renderItem={({item}) => <Items data={item} />}
          keyExtractor={item => `${item.id}`}
          getItemCount={getItemCount}
          getItem={getItem}
          style={styles.virtualizeContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#778899',
    flex: 1,
    justifyContent: 'center',
    marginVertical: 7,
    marginHorizontal: 16,
    marginBottom: 1,
    position: 'relative',
  },
  title: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  virtualizeContainer: {
    width: '100%',
  },
  text: {
    margin: 4,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 5,
  },
  textData: {
    margin: 4,
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
  containerList: {
    flex: 1,
    width: '100%',
    padding: 16,
    paddingTop: '5%',
  },
});
