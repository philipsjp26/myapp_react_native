import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import macbook from '../assets/images/macbookIMG.jpg';

const Story = props => {
  return (
    <View>
      <Image
        source={props.gambar}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50 / 2,
          marginRight: 20,
        }}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};
function PropsDinamis() {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} indicatorStyle={'white'}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Story judul="Gambar 1" gambar={macbook} />
          <Story judul="Gambar 2" gambar={macbook} />
          <Story judul="Gambar 3" gambar={macbook} />
          <Story judul="Gambar 4" gambar={macbook} />
          <Story judul="Gambar 5" gambar={macbook} />
          <Story judul="Gambar 6" gambar={macbook} />
          <Story judul="Gambar 7" gambar={macbook} />
          <Story judul="Gambar 8" gambar={macbook} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 19,
  },
  text: {
    fontSize: 11,
  },
});
export default PropsDinamis;
