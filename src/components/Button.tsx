import {GestureResponderEvent, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {AppStyles} from '../global/styles';

type ButtonProps = {
    commend: (event?: GestureResponderEvent) => void;
    width?: number;
    height?: number;
    marginTop?: number;
    backgroundColor?: string;
    text: string;
    textColor?: string;
}

export const Button = ({
                           backgroundColor = AppStyles.colour.primary.background,
                           commend,
                           height = 100,
                           marginTop = 40,
                           width = 290,
                           text,
                           textColor = AppStyles.colour.primary.item
                       }: ButtonProps) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    width: width,
                    borderRadius: 25,
                    height: height,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: marginTop,
                    backgroundColor: backgroundColor
                }}
                onPress={commend}
            >
                <Text style={{color: textColor}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}