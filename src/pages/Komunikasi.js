import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Komunikasi = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi komunikasi</Text>
    </View>
  );
};

export default Komunikasi;

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    textTitle:{
        textAlign:'center'
    }
});
