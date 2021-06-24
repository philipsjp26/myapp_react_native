import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 15, fontSize: 20}}>
        {number}
      </Text>
      <TouchableOpacity
        style={styles.buttonTambah}
        onPress={() => setNumber(number + 1)}>
        <Text style={styles.textTitle}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>State Dinamis</Text>
      <Counter />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonTambah: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '38%',
    borderRadius: 25,
    alignSelf: 'center',
  },
});
