import {Image, StyleSheet, View, Text} from "react-native";
import React, {useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../model/navigation";

import { InferenceSession } from "onnxruntime-react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: "center"
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export const Caption = ({route, navigation}: NativeStackScreenProps<RootStackParamList, "Caption">) => {
    const [caption, setCaption] = useState<string>('generating text....')
    const {img} = route.params;

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.container,
                width: '100%',
                height: '100%',
                flex: 0.5
            }}>
                <Image
                    style={styles.image}
                    source={img}/>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.5,
            }}>
                <Text>
                    {caption}
                </Text>
            </View>
        </View>
    )
}
