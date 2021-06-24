import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems:'center',
            marginTop:20
          }}>
          <Image
            source={{
              uri: 'https://yt3.ggpht.com/ytc/AAUvwngcDv03gEJ2peR1AG1W9BFXos-dHNztrg01syWCSiA=s900-c-k-c0x00ffffff-no-rj',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginRight:14}}
          />
          <View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Prawito Hudoro</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}>100 ribu subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default FlexBox;
