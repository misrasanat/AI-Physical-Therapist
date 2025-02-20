import React, { useRef } from "react";
import { View, Text, Button } from "react-native";
import { Camera } from "react-native-vision-camera";
import { analyzeMovement } from "../services/movementService";

const HomeScreen = () => {
    const cameraRef = useRef(null);

    const handleRecord = async () => {
        const video = await cameraRef.current.startRecording();
        const result = await analyzeMovement(video);
        console.log(result);
    };

    return (
        <View>
            <Text>AI Physical Therapy Assistant</Text>
            <Camera ref={cameraRef} style={{ width: 300, height: 400 }} isActive={true} />
            <Button title="Analyze Movement" onPress={handleRecord} />
        </View>
    );
};

export default HomeScreen;