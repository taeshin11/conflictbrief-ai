#!/bin/bash
# ConflictBrief AI — Project Initialization Script

set -e

echo "=== ConflictBrief AI — Init ==="

# Install dependencies
echo "Installing dependencies..."
npm install

# Copy env example if no .env.local exists
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "Created .env.local from .env.example — fill in your API keys."
fi

# Start dev server
echo "Starting dev server..."
npm run dev
