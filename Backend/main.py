from fastapi import FastAPI
import random
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import io, base64
from PIL import Image
import yolo_salma.detection as detection
app = FastAPI()

# from algorithm.object_detector import YOLOv7
# from utils.detections import draw
import json
import cv2

class ImageRequest(BaseModel):
    image : str


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# count_plastic, count_metal, count_glass, count_paper 
# global count_plastic
# global count_metal
# global count_glass
# global count_paper

@app.post("/image")
async def image_input(image_request: ImageRequest):

    data = image_request.image
    print('hehe')
    image = base64.b64decode(data) 
    img = Image.open(io.BytesIO(image))
    # yolo(img) -> bb[]
    img = img.rotate(-90, expand=True)
    img.save("00.jpg")
    res,image = detection.run()
    print(res)
    image.save("111.jpg")
    # count(res)
    # print({"plastic": count_plastic, "metal": count_metal, 'glass':count_glass, 'paper':count_paper})
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    image_str = base64.b64encode(buffered.getvalue())
    return {"image": b"data:image/jpeg;base64," + image_str, "classes": list(set(res))}




# def count(res):
#     global count_plastic
#     global count_metal
#     global count_glass
#     global count_paper
#     for i in res:
#         if i == 'plastic': count_plastic+=1
#         if i == 'metal': count_metal+=1
#         if i == 'glass': count_glass+=1
#         if i == 'paper': count_paper+=1


    


