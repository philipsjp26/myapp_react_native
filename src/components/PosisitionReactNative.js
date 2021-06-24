import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import trolley from '../assets/images/trolley.png';

export default function PosisitionReactNative(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={trolley} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang belanja anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#439801',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative'
  },
  iconCart: {
    width: 50,
    height: 49,
  },
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    borderRadius: 25,
    width: 20,
    padding:2,
    position:'absolute',
    top:5,
    right:0,
    textAlign:'center'
  },
});
