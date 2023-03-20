import { Viro360Image, ViroARScene, ViroARSceneNavigator, ViroImage } from '@viro-community/react-viro';
import React from 'react'
import { StyleSheet } from 'react-native';

function Armoury() {

    const renderAR = props => {
        return (
            <ViroARScene>
                <ViroImage
                    height={2}
                    width={2}
                    source={require("../../../res/maratha_headgear.jpg")}
                    scale={[0, 2, 0]}
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

export default Armoury

const styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});
