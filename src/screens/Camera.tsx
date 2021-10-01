import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import { Camera as ExpoCamera } from 'expo-camera';
import {CameraType} from "expo-camera/build/Camera.types";
import {Button} from "../components/Button";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 0.7,
        width: '100%',
        height: '50%',
    }
});

export const Camera = ({navigation} : NativeStackScreenProps<RootStackParamList>) => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [type, setType] = useState<CameraType>(ExpoCamera.Constants.Type.back);
    const [camera, setCamera] = useState<ExpoCamera | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await ExpoCamera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const onPress = () => {
        camera?.takePictureAsync().then((photo) => {
            navigation.navigate("Main", {img: photo?.base64});
        });
    }

    // todo: prompt error, then go back to main screen
    if (hasPermission === null) {
        return <View />;
    }

    return (
        <View style={styles.container}>
            <ExpoCamera
                ref={ref => {
                    setCamera(ref);
                }}
                style={styles.camera}
                ratio={'1:1'}
                type={type}>
            </ExpoCamera>
            {/*{add camera}*/}
            <Button
                marginTop={90}
                commend={onPress}
                text={"Take Picture"}/>

        </View>
    )
}