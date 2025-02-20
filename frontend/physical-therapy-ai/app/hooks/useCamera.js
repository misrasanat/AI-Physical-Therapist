import { useState, useEffect } from "react";
import { Camera } from "react-native-vision-camera";

export const useCamera = () => {
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === "authorized");
        })();
    }, []);

    return { hasPermission };
};