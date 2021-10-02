import {View, Image, StyleSheet} from "react-native";
import {Button} from "../components/Button";
import * as ImagePicker from 'expo-image-picker';
import React, {useEffect, useState} from "react";
import imageProxy from '../../assets/dummy.jpg';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../model/navigation";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});


export const Main = ({route, navigation}: NativeStackScreenProps<RootStackParamList, "Main">) => {

    const img = route.params?.img;
    const [image, setImage] = useState(imageProxy);

    useEffect(() => {
        console.log(img);
        setImage(img ? img : imageProxy);
    }, [img]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.container,
                flex: 1,
                width: '100%',
                height: '100%',
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    style={styles.image}
                    source={image}

                />
            </View>
            <View style={styles.container}>
                <Button
                    commend={() => navigation.navigate("Camera")}
                    text={'Take Picture'}/>
                <Button
                    commend={() => pickImage()}
                    text={'Upload Image'}/>
                <Button
                    commend={() => navigation.navigate("Caption", {img: image})}
                    text={'Generate Caption'}/>
            </View>
        </View>
    )
};