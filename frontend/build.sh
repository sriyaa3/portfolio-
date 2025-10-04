#!/bin/bash

# Install dependencies
npm install --legacy-peer-deps

# Build the React app
npm run build

echo "Frontend build completed successfully!"