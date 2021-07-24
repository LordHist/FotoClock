import React from 'react';
import {TouchableOpacity, Text, View, VirtualizedList} from 'react-native';
import {stylesButton as styles} from '../assets/styles/button';

export default function Button({items, onPressItem}) {
  const getItem = (data, index) => {
    const item = data[index];
    return {
      id: item.id,
      name: item.name,
    };
  };

  const getItemCount = data => {
    return data.length;
  };
  const Items = ({data}) => {
    const {id, name} = data;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.sectionTouchLogin}
          key={id}
          onPress={() => onPressItem(id)}>
          <Text style={styles.sectionText}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <VirtualizedList
        data={items}
        initialNumToRender={4}
        renderItem={({item}) => <Items data={item} />}
        keyExtractor={item => `${item.id}`}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
}
