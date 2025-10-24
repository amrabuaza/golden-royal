#!/bin/bash

# Build the project
npm run build

# Create a temporary directory for deployment
mkdir -p temp-deploy

# Copy the built files to the temporary directory
cp -r dist/* temp-deploy/

# Copy CNAME file for custom domain
cp CNAME temp-deploy/

# Deploy to firebase
firebase deploy

# Clean up
rm -rf temp-deploy

echo "Deployment completed!"
