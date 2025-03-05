 
from pydantic import BaseModel
from datetime import datetime

class BlogSchema(BaseModel):
    title: str
    content: str
    image_url: str

    class Config:
        orm_mode = True
