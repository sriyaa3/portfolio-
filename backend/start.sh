#!/bin/bash

# Start the FastAPI server
uvicorn server:app --host 0.0.0.0 --port $PORT