import {useEffect, useState} from "react";
import * as SplashScreen from 'expo-splash-screen';

export const CachedResource = () => {
    const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

    const delay = (ms: number) => {
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const loadScreen = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();

                await delay(2000);
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                await SplashScreen.hideAsync();
            }
        }

        loadScreen().then(r => {});
    }, []);

    return isLoadingComplete;
}