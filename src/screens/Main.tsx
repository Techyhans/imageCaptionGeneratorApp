import {View, Image, StyleSheet} from "react-native";
import {Button} from "../components/Button";
import * as ImagePicker from 'expo-image-picker';
import React, {useState} from "react";
import imageProxy from '../../assets/dummy.jpg';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain'
    }
});


export const Main = () => {
    const [image, setImage] = useState(imageProxy);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={image}
            />
            <Button
                commend={() => {}}
                text={'Take Picture'}/>
            <Button
                commend={() => pickImage()}
                text={'Upload Image'}/>
            <Button
                commend={() => {}}
                text={'Generate Caption'}/>
        </View>
    )
};