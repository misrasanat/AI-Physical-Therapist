#This module will handle API routes


from fastapi import APIRouter, UploadFile, File
from services.movement_service import analyze_movement

router = APIRouter()

@router.post("/analyze-movement/")
async def analyze_movement_api(video: UploadFile = File(...)):
    result = analyze_movement(video)
    return {"analysis": result}