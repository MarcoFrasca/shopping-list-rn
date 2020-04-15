import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = value => setText(value);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        value={text}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text), setText('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
