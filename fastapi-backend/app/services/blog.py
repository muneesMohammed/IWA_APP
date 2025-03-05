from sqlalchemy.orm import Session
from app.models.blog import Blog

def get_all_blogs(db: Session):
    return db.query(Blog).all()
