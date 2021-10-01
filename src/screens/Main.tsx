import {View, Image, StyleSheet} from "react-native";
import {Button} from "../components/Button";
import React from "react";

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
        resizeMode: 'cover'
    }
});

export const Main = () => (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../../assets/dummy.jpg')}
        />
        <Button commend={() => {}} text={''}/>
        <Button commend={() => {}} text={'Upload Image'}/>
        <Button commend={() => {}} text={'Generate Caption'}/>
    </View>
    );