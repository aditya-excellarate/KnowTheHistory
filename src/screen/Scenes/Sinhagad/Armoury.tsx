import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';

function Armoury() {
  const renderAR = (prop: any) => {
    return (
      <ViroARScene>
        <ViroImage
          height={5}
          width={5}
          source={require('../../../res/armoury/maratha_headgear.jpg')}
          scale={[4, 4, 4]}
          position={[-60, 0, 0]}
          rotation={[0, 90, 0]}
          imageClipMode="None"
        />
        <ViroImage
          height={5}
          width={5}
          source={require('../../../res/armoury/shield.jpeg')}
          scale={[4, 4, 4]}
          position={[60, 0, -30]}
          rotation={[0, -90, 0]}
          imageClipMode="None"
        />
      </ViroARScene>
    );
  };
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: renderAR,
      }}
      style={styles.f1}
    />
  );
}

export default Armoury;

const styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
