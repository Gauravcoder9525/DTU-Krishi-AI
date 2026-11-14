"""
🦠 Disease Detection Router
POST /api/disease-detect — Upload crop photo, detect disease using trained PyTorch model with bounding boxes.
"""

from fastapi import APIRouter, HTTPException
from models.schemas import DiseaseDetectRequest
from utils.image_utils import decode_base64_image
from services.disease_service import analyze_image_for_disease, get_disease_visual_markings
from services.crop_model_service import predict_crop_disease, get_classifier

router = APIRouter(prefix="/api", tags=["Disease Detection"])


def run_disease_pipeline(image):
    """
    Runs disease detection using the trained PyTorch MobileNetV3 model first,
    with automatic fallback to heuristic analysis.
    """
    try:
        classifier = get_classifier()
        if classifier.model_loaded:
            ml_res = predict_crop_disease(image)
            prediction = ml_res["prediction"]
            conf = ml_res["confidence"]
            agro = ml_res.get("agronomic_analysis", {})
            display_name = agro.get("display_name", prediction)
            crop = agro.get("crop", "Unknown")
            is_healthy = "healthy" in prediction.lower()

            markings = get_disease_visual_markings(
                image=image,
                disease_name=display_name,
                confidence=conf / 100.0,
                is_healthy=is_healthy
            )

            # Recommendations
            recommendations = []
            if is_healthy:
                recommendations = [
                    f"✅ {crop} crop appears healthy — continue routine monitoring",
                    "Apply preventive foliar spray of micronutrients",
                    "Scout for pests weekly to catch issues early",
                    "Maintain optimal irrigation schedule"
                ]
            else:
                for step in agro.get("cure_roadmap", []):
                    recommendations.append(f"📋 {step.get('day', '')}: {step.get('action', '')}")
                if agro.get("immediate_action"):
                    recommendations.insert(0, f"⚡ {agro['immediate_action']}")

            return {
                "success": True,
                "disease_name": display_name,
                "disease_hindi": agro.get("display_name", display_name),
                "confidence": round(conf / 100, 4),
                "confidence_pct": f"{conf:.2f}%",
                "severity": agro.get("severity", "Moderate") if not is_healthy else "None",
                "crop": crop,
                "bounding_boxes": markings["bounding_boxes"],
                "annotated_image": markings["annotated_image"],
                "heatmap_image": markings["heatmap_image"],
                "affected_area_pct": markings["affected_area_pct"],
                "lesion_count": markings["lesion_count"],
                "recommendations": recommendations,
                "top_candidates": ml_res.get("top_candidates", []),
                "agronomic_analysis": agro,
                "source": f"Krishi AI — MobileNetV3 ({crop})"
            }
    except Exception as e:
        print(f"⚠️ PyTorch model inference notice: {e}, falling back to heuristic engine")

    # Fallback to heuristic analysis
    return analyze_image_for_disease(image)


@router.post("/disease-detect")
async def detect_disease(request: DiseaseDetectRequest):
    """
    Analyze a crop leaf photo to detect plant disease.
    Returns disease name, confidence, severity, red bounding boxes, and annotated image.
    """
    try:
        image = decode_base64_image(request.image)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image data: {str(e)}")

    try:
        result = run_disease_pipeline(image)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Disease detection failed: {str(e)}")


@router.post("/disease-classify")
async def classify_disease(request: DiseaseDetectRequest):
    """
    Alias endpoint for /api/disease-detect (compatibility with existing frontend).
    """
    try:
        image = decode_base64_image(request.image)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image data: {str(e)}")

    try:
        result = run_disease_pipeline(image)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Disease classification failed: {str(e)}")
