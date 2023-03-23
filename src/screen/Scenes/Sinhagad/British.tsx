import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
  ViroMaterials,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';

function British() {
  const type = 'barrel';
  ViroMaterials.createMaterials({
    cannon: {
      diffuseTexture: require(`../../../res/cannon/${type}/baseColor.png`),
      normalTexture: require(`../../../res/cannon/${type}/normal.png`),
      metalnessTexture: require(`../../../res/cannon/${type}/metallic.png`),
      roughnessTexture: require(`../../../res/cannon/${type}/rough.png`),
      metalness: 0.2,
      diffuseIntensity: 0.5,
      roughness: 0.1,
    },
  });
  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });
  const renderAR = (prop: any) => {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#FFF" />
        <Viro3DObject
          source={require('../../../res/cannon/cannon.obj')}
          type="OBJ"
          position={[0, 0, -15]}
          scale={[1, 1, 1]}
          rotation={[0, 90, 0]}
          resources={[
            require('../../../res/cannon/12_Pounder_Brass_Cannon.mtl'),
          ]}
          materials={'cannon'}
          animation={{name: 'rotate', loop: true, run: true}}
        />
        <ViroImage
          height={5}
          width={5}
          source={require('../../../res/armoury/maratha_headgear.jpg')}
          scale={[4, 4, 4]}
          position={[-60, 0, 0]}
          rotation={[0, 90, 0]}
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

export default British;

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
