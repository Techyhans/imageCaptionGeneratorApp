import {CameraCapturedPicture} from "expo-camera";
import {ImageProps} from "react-native";

export type RootStackParamList = {
    Main: { img: ImageProps | Readonly<ImageProps> | CameraCapturedPicture | null };
    Camera: undefined;
    Caption: { img: ImageProps | Readonly<ImageProps> | CameraCapturedPicture };
    // Caption: { qr_code_id: string };
};