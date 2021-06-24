import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import StylingReactNativeComponent from './src/components/StylingReactNativeComponent';
import FlexBox from './src/components/FlexBox';
import PosisitionReactNative from './src/components/PosisitionReactNative';
import PropsDinamis from './src/pages/PropsDinamis';
import StateDinamis from './src/pages/StateDinamis';
import Komunikasi from './src/pages/Komunikasi';
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <ScrollView>
        <StylingReactNativeComponent
          onButtonPress={() => setCount(count + 1)}
        />
        {/* <FlexBox /> */}
        <PosisitionReactNative quantity={count}/>
        {/* <PropsDinamis/> */}
        {/* <StateDinamis/> */}
        {/* <Komunikasi /> */}
      </ScrollView>
    </View>
  );
};

export default App;
