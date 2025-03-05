from sqlalchemy import Column, Integer, String, Text, DateTime
from app.database import Base
from datetime import datetime

class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    image_url = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


