from fastapi import FastAPI
from controllers.movement_controller import router as movement_router

app = FastAPI()

app.include_router(movement_router)

@app.get("/")
def read_root():
    return {"message": "Physical Therapy AI Backend Running"}