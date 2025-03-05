 
from fastapi import FastAPI
from app.routes import blog

app = FastAPI()


# Include Routes
app.include_router(blog.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
