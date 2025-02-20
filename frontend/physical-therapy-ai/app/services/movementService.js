const API_URL = "http://127.0.0.1:8000";

export const analyzeMovement = async (videoFile) => {
    const formData = new FormData();
    formData.append("video", videoFile);

    const response = await fetch(`${API_URL}/analyze-movement/`, {
        method: "POST",
        body: formData
    });

    return response.json();
};
