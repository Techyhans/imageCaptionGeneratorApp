import {TouchableOpacity, View, Text, StyleSheet, Alert} from "react-native";
import React, {useEffect, useState} from "react";
import {Camera as ExpoCamera} from 'expo-camera';
import {CameraType} from "expo-camera/build/Camera.types";
import {Button} from "../components/Button";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../model/navigation";

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

export const Camera = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(true);
    const [type, setType] = useState<CameraType>(ExpoCamera.Constants.Type.back);
    const [camera, setCamera] = useState<ExpoCamera | null>(null);

    const askPermission = () => {
        (async () => {
            const {status} = await ExpoCamera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }

    useEffect(askPermission, []);

    useEffect(() => {
        console.log(hasPermission)
        if (!hasPermission) {
            Alert.alert(
                "No Permission",
                "Camera Permission is required!",
                [
                    {
                        text: "ok",
                        onPress: () => navigation.navigate("Main", {img: null}),
                    }
                ],
                {cancelable: false}
            )
        }
    }, [hasPermission])

    const onPress = () => {
        camera?.takePictureAsync().then((photo) => {
            // console.log(photo);
            navigation.navigate("Main", {img: photo});
        });
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
            {/*{add camera flip}*/}
            <Button
                marginTop={90}
                commend={onPress}
                text={"Take Picture"}/>

        </View>
    )
}