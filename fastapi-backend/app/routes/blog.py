 
from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.orm import Session
import shutil
from app.db.session import get_db
from app.models.blog import Blog

router = APIRouter()

@router.post("/blog")
def create_blog(title: str, content: str, image: UploadFile = File(...), db: Session = Depends(get_db)):
    image_path = f"app/static/images/{image.filename}"
    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    blog = Blog(title=title, content=content, image_url=image_path)
    db.add(blog)
    db.commit()
    return {"message": "Blog created successfully", "image_url": image_path}

@router.get("/blogs")
def get_blogs(db: Session = Depends(get_db)):
    return db.query(Blog).all()
