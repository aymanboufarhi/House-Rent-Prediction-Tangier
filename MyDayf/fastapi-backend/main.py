from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
from pydantic import BaseModel

app = FastAPI()

# CORS middleware to allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify the frontend URL, e.g., ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load emplacement data
emplacement_map = pd.read_csv('emplacement_ido.csv')

@app.get("/emplacements")
def get_emplacements():
    return [{'id': row['id'], 'emplacement': row['emplacement']} for _, row in emplacement_map.iterrows()]

# Load model and emplacement map
model = joblib.load('gradient_boosting_model.pkl')

class PredictionRequest(BaseModel):
    surface: float
    pieces: int
    chambres: int
    bain: int
    emplacement: int  # ID of the emplacement

@app.post("/predict/")
async def predict(request: PredictionRequest):
    try:
        # Prepare the data for prediction
        data = pd.DataFrame([{
            'surface en m²': request.surface,
            'nombre des pièces': request.pieces,
            'nombre des chambres': request.chambres,
            'salle_de_bain': request.bain,
            'emplacementMap': request.emplacement
        }])

        # Make prediction
        prediction = model.predict(data)[0]
        return {"Prix prédit": prediction}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))