import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import macbook from '../assets/images/macbookIMG.jpg';

const StylingReactNativeComponent = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.imageProduct} />
      <Text style={styles.productName}>New Macbook pro 2018</Text>
      <Text style={styles.productPrice}>Rp 12,000,000</Text>
      <Text style={styles.productLocation}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>
            BELI
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default StylingReactNativeComponent;
const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 12,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
  },
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  productLocation: {fontSize: 12, fontWeight: 'normal', marginTop: 12},
});
