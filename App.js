import React, {useState} from 'react';
import {View, StyleSheet, Alert, FlatList} from 'react-native';
import {AddItem, Header, ListItem} from './components';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.random(100),
      text: 'Milk',
    },
    {
      id: Math.random(100),
      text: 'Eggs',
    },
    {
      id: Math.random(100),
      text: 'Bread',
    },
    {
      id: Math.random(100),
      text: 'Juice',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const addItem = text => {
    if (!text || text.length === 0) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => [{id: Math.random(100), text}, ...prevItems]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
