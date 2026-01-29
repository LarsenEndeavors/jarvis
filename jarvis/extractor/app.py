from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
import httpx
import trafilatura

app = FastAPI(title="Jarvis Extractor")

class ExtractRequest(BaseModel):
    url: HttpUrl

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/extract")
async def extract(req: ExtractRequest):
    try:
        async with httpx.AsyncClient(follow_redirects=True, timeout=30) as client:
            r = await client.get(str(req.url), headers={"User-Agent": "Mozilla/5.0"})
            r.raise_for_status()
            html = r.text

        text = trafilatura.extract(html, include_comments=False, include_tables=True)
        if not text or len(text.strip()) < 50:
            raise HTTPException(status_code=422, detail="Could not extract meaningful text")

        return {
            "url": str(req.url),
            "text": text
        }
    except httpx.HTTPError as e:
        raise HTTPException(status_code=502, detail=f"Fetch failed: {e}")
