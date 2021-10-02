import {Image, StyleSheet, View, Text} from "react-native";
import React, {useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../model/navigation";

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
        height: '50%',
        resizeMode: 'contain'
    },
    textContainer: {},
    text: {
        flex: 1,
        alignItems: 'flex-end'
    }
});

export const Caption = ({route, navigation} : NativeStackScreenProps<RootStackParamList, "Caption">) => {
    const [caption, setCaption] = useState<string>('generating text....')
    const {img} = route.params;


    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={img}/>
            <Text style={styles.text}>
                {caption}
            </Text>
        </View>
    )
}